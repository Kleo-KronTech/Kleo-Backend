import {
  pgTable,
  uuid,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const reminders = pgTable("reminders", {
  id: uuid("id").defaultRandom().primaryKey(),

  text: text("text").notNull(),

  reminderDate: timestamp("reminder_date").notNull(),

  category: text("category").notNull(),

  repeatDays: text("repeat_days").array().default([]),

  createdAt: timestamp("created_at").defaultNow(),
});