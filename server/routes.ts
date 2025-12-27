import type { Express } from "express";
import type { Server } from "http";
import { setupAuth, registerAuthRoutes } from "./auth";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  await setupAuth(app);
  registerAuthRoutes(app);

  app.get(api.campaigns.getHero.path, async (req, res) => {
    const campaign = await storage.getHeroCampaign();
    if (!campaign) {
      // Seed if not exists
      const newCampaign = await storage.createCampaign({
        title: "Secure donations for families affected by emergencies.",
        description: "Secure, verified donations.",
        raisedAmount: "232032",
        targetAmount: "500000",
        donorCount: 412,
        percentFilled: 48,
      });
      return res.json(newCampaign);
    }
    res.json(campaign);
  });

  return httpServer;
}
