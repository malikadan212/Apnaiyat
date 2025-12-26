import { db } from "./db";
import { campaigns, type Campaign } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getHeroCampaign(): Promise<Campaign | undefined>;
  createCampaign(campaign: typeof campaigns.$inferInsert): Promise<Campaign>;
}

export class DatabaseStorage implements IStorage {
  async getHeroCampaign(): Promise<Campaign | undefined> {
    const [campaign] = await db.select().from(campaigns).limit(1);
    return campaign;
  }

  async createCampaign(campaign: typeof campaigns.$inferInsert): Promise<Campaign> {
    const [newCampaign] = await db.insert(campaigns).values(campaign).returning();
    return newCampaign;
  }
}

export const storage = new DatabaseStorage();
