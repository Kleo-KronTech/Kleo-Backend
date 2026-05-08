import { pgTable, integer, text, uuid } from 'drizzle-orm/pg-core';

export const reminders = pgTable('reminders', {
  id: uuid('id').primaryKey().defaultRandom(),

  text: text('text').notNull(),

  date: integer('date').notNull(),

  time: text('time').notNull(),

  category: text('category').notNull(),

  repeatDays: text('repeat_days').array().default([]),
});