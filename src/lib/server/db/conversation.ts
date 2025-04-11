import { and, eq, getTableColumns } from 'drizzle-orm';
import db from './index';
import {
	Conversation as ConversationTable,
	User as UserTable,
	usersToConversations
} from './schema';
import { Conversation, type NewConversation, type User } from './schema';

export async function retrieveConversation(
	conversationId: Conversation['id']
): Promise<Conversation | null> {
	try {
		const result = await db
			.select()
			.from(ConversationTable)
			.where(eq(Conversation.id, conversationId))
			.limit(1);
		return result[0] || null;
	} catch (error) {
		throw new Error('Failed to retrieve conversation');
	}
}

export async function retrieveAllConversations(): Promise<Conversation[]> {
	try {
		const conversations = await db.select().from(ConversationTable);
		return conversations;
	} catch (error) {
		throw new Error('Failed to retireve all users');
	}
}

export async function retrieveAllGroupConversationsOfUser(
	userId: User['id']
): Promise<Conversation[]> {
	try {
		const conversations = await db
			.select(getTableColumns(ConversationTable))
			.from(UserTable)
			.innerJoin(usersToConversations, eq(UserTable.id, usersToConversations.userId))
			.innerJoin(ConversationTable, eq(ConversationTable.id, usersToConversations.conversationId))
			.where(and(eq(usersToConversations.userId, userId), eq(ConversationTable.is_group, true)));
		return conversations;
	} catch (error) {
		throw new Error('Failed to retires users group conversations');
	}
}
