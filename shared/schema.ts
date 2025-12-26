import { pgTable, text, serial, integer, numeric } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export * from "./models/auth";

export const campaigns = pgTable("campaigns", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  raisedAmount: numeric("raised_amount").notNull(),
  targetAmount: numeric("target_amount").notNull(),
  donorCount: integer("donor_count").notNull(),
  percentFilled: integer("percent_filled").notNull(),
});

export const insertCampaignSchema = createInsertSchema(campaigns).omit({ id: true });

export type Campaign = typeof campaigns.$inferSelect;
