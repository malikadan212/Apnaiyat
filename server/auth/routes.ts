import type { Express } from "express";
import passport from "passport";
import { authStorage } from "./storage";
import { isAuthenticated } from "./auth";

export function registerAuthRoutes(app: Express): void {
  // Get current authenticated user
  app.get("/api/auth/user", isAuthenticated, async (req: any, res) => {
    try {
      res.json(req.user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Login endpoint
  app.post("/api/auth/login", (req, res, next) => {
    passport.authenticate("local", (err: any, user: any, info: any) => {
      if (err) {
        return res.status(500).json({ message: "Authentication error" });
      }
      if (!user) {
        return res.status(401).json({ message: info?.message || "Invalid credentials" });
      }
      
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ message: "Login error" });
        }
        return res.json({ user, message: "Login successful" });
      });
    })(req, res, next);
  });

  // Register endpoint
  app.post("/api/auth/register", async (req, res) => {
    try {
      const { email, password, firstName, lastName } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }

      // Check if user already exists
      const existingUser = await authStorage.getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const user = await authStorage.createUser({ email, password, firstName, lastName });
      
      // Auto-login after registration
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ message: "Registration successful but login failed" });
        }
        return res.json({ user, message: "Registration successful" });
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ message: "Registration failed" });
    }
  });

  // Logout endpoint
  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout error" });
      }
      res.json({ message: "Logout successful" });
    });
  });
}