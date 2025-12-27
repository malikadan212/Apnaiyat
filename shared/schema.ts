import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export * from "./models/auth";

export const campaigns = sqliteTable("campaigns", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  raisedAmount: text("raised_amount").notNull(),
  targetAmount: text("target_amount").notNull(),
  donorCount: integer("donor_count").notNull(),
  percentFilled: integer("percent_filled").notNull(),
});

export const insertCampaignSchema = createInsertSchema(campaigns).omit({ id: true });

export type Campaign = typeof campaigns.$inferSelect;
