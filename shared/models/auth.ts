import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

// Session storage table for express-session
export const sessions = sqliteTable(
  "sessions",
  {
    sid: text("sid").primaryKey(),
    sess: text("sess").notNull(), // JSON stored as text
    expire: integer("expire").notNull(), // Unix timestamp
  },
  (table) => [index("IDX_session_expire").on(table.expire)]
);

// User storage table
export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  profileImageUrl: text("profile_image_url"),
  passwordHash: text("password_hash"),
  createdAt: integer("created_at"), // Unix timestamp
  updatedAt: integer("updated_at"), // Unix timestamp
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;
