import {
	pgTable,
	uniqueIndex,
	index,
	pgEnum,
	serial,
	text,
	integer,
	timestamp,
	boolean,
	primaryKey
} from 'drizzle-orm/pg-core';
import { type InferInsertModel, type InferSelectModel, relations } from 'drizzle-orm';

export const rolesEnum = pgEnum('roles', ['guest', 'user', 'admin']);

export const User = pgTable(
	'users',
	{
		id: serial('id').primaryKey(),
		age: integer('age'),
		username: text('username').notNull(),
		email: text('email').notNull().unique(),
		passwordHash: text('password_hash').notNull(),
		role: rolesEnum('role').default('guest'),
		createdAt: timestamp('created_at').defaultNow().notNull()
	},
	(table) => [
		index('username_index').on(table.username),
		uniqueIndex('email_index').on(table.email)
	]
);

export const Conversation = pgTable(
	'conversations',
	{
		id: serial('id').primaryKey(),
		name: text('name'),
		is_group: boolean('is_group').default(false),
		createdAt: timestamp('created_at').defaultNow().notNull(),
		createdBy: integer('created_by')
			.notNull()
			.references(() => User.id),
		updatedAt: timestamp('updated_at').defaultNow().notNull()
	},
	(table) => [index('name_index').on(table.name)]
);

export const usersToConversations = pgTable(
	'users_to_conversations',
	{
		userId: integer('user_id')
			.notNull()
			.references(() => User.id),
		conversationId: integer('conversation_id')
			.notNull()
			.references(() => Conversation.id)
	},
	(table) => [
		primaryKey({ columns: [table.userId, table.conversationId] }),
		index('user_id_index').on(table.userId),
		index('conversation_id_index').on(table.conversationId)
	]
);

export const Message = pgTable('messages', {
	id: serial('id').primaryKey(),
	conversationId: integer('conversation_id')
		.notNull()
		.references(() => Conversation.id),
	senderId: integer('sender_id')
		.notNull()
		.references(() => User.id),
	isAI: boolean('is_ai').default(false),
	content: text('content').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const userRelations = relations(User, ({ many }) => ({
	conversationParticipants: many(usersToConversations),
	createdConversations: many(Conversation, { relationName: 'createdBy' }),
	messages: many(Message, { relationName: 'sender' })
}));

export const conversationRelations = relations(Conversation, ({ many, one }) => ({
	participants: many(usersToConversations),
	messages: many(Message),
	creator: one(User, { fields: [Conversation.createdBy], references: [User.id] })
}));

export const usersToConversationsRelations = relations(usersToConversations, ({ one }) => ({
	user: one(User, { fields: [usersToConversations.userId], references: [User.id] }),
	conversation: one(Conversation, {
		fields: [usersToConversations.conversationId],
		references: [Conversation.id]
	})
}));

export const messageRelations = relations(Message, ({ one }) => ({
	conversation: one(Conversation, {
		fields: [Message.conversationId],
		references: [Conversation.id]
	}),
	sender: one(User, { fields: [Message.senderId], references: [User.id] })
}));

export type User = InferSelectModel<typeof User>;
export type NewUser = InferInsertModel<typeof User>;
export type Conversation = InferSelectModel<typeof Conversation>;
export type NewConversation = InferInsertModel<typeof Conversation>;
export type Message = InferSelectModel<typeof Message>;
export type NewMessage = InferInsertModel<typeof Message>;
export type UserToConversation = InferSelectModel<typeof usersToConversations>;
export type NewUserToConversation = InferInsertModel<typeof usersToConversations>;