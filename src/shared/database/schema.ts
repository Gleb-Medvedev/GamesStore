import { pgTable, varchar, text, date, uuid } from 'drizzle-orm/pg-core';

export const games = pgTable('games', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title', { length: 255 }).notNull(),
  shortDescription: text('shortDescription').notNull(),
  genre: varchar('genre', { length: 100 }).notNull(),
  publisher: varchar('publisher', { length: 255 }).notNull(),
  developer: varchar('developer', { length: 255 }).notNull(),
  releaseDate: date('releaseDate', { mode: 'string' }).notNull(),
});