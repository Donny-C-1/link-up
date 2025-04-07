import { pgTable, uniqueIndex, index, pgEnum, serial, text, integer, timestamp, boolean } from 'drizzle-orm/pg-core';

export const rolesEnum = pgEnum('roles', ['guest', 'user', 'admin']);

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	age: integer('age'),
	username: text("username").notNull(),
	email: text("email").notNull().unique(),
	passwordHash: text("password_hash").notNull(),
	role: rolesEnum('role').default('guest'),
	createdAt: timestamp().defaultNow().notNull()
}, (table) => [
	index("username_index").on(table.username),
	uniqueIndex("email_index").on(table.email)
]);

export const conversations = pgTable('conversations', {
	id: serial("id").primaryKey(),
	name: text("name"),
	is_group: boolean("is_group").default(false),
	createdAt: timestamp().defaultNow().notNull(),
	createdBy: integer("created_by").notNull().references(() => users.id),
	updatedAt: timestamp().defaultNow().notNull()
}, (table) => [
	index("name_index").on(table.name)
])

export const messages = pgTable('messages', {
	id: serial("id").primaryKey(),
	conversationId: integer("conversation_id").notNull().references(() => conversations.id),
	senderId: integer("sender_id").notNull().references(() => users.id),
	isAI: boolean("is_ai").default(false),
	content: text("content").notNull(),
	createdAt: timestamp().defaultNow().notNull(),
	updatedAt: timestamp().defaultNow().notNull()
});