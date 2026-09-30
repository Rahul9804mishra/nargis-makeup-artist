import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const appointments = pgTable('appointments', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  service: varchar('service', { length: 255 }).notNull(),
  preferredDate: varchar('preferred_date', { length: 50 }),
  preferredTime: varchar('preferred_time', { length: 50 }),
  location: text('location'),
  message: text('message'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
