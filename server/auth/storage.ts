import { users, type User, type UpsertUser } from "@shared/models/auth";
import { db } from "../db";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";

export interface IAuthStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(userData: { email: string; password: string; firstName?: string; lastName?: string }): Promise<User>;
  upsertUser(user: UpsertUser): Promise<User>;
}

class AuthStorage implements IAuthStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(userData: { email: string; password: string; firstName?: string; lastName?: string }): Promise<User> {
    const passwordHash = await bcrypt.hash(userData.password, 10);
    const now = Math.floor(Date.now() / 1000);
    
    const [user] = await db
      .insert(users)
      .values({
        id: nanoid(),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        passwordHash,
        createdAt: now,
        updatedAt: now,
      })
      .returning();
    
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const now = Math.floor(Date.now() / 1000);
    
    const [user] = await db
      .insert(users)
      .values({
        ...userData,
        createdAt: userData.createdAt || now,
        updatedAt: now,
      })
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: now,
        },
      })
      .returning();
    
    return user;
  }
}

export const authStorage = new AuthStorage();