import {
  pgTable,
  uuid,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),

  message: text("message").notNull(),

  patientId: text("patient_id").notNull(),

  sentBy: text("sent_by").notNull(),

  createdAt: timestamp("created_at").defaultNow(),
});