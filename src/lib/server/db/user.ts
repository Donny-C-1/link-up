import db from "./index";
import { User as UserTable, Conversation as ConversationTable, usersToConversations } from "./schema";
import { User, type NewUser, type Conversation } from "./schema";
import { eq, getTableColumns } from "drizzle-orm";

export async function createUser(userData: Omit<NewUser, 'id'>): Promise<User['id']> {
    try {
        const result = await db.insert(UserTable).values(userData).returning({ id: UserTable.id });
        return result[0]?.id;
    } catch (error) {
        throw new Error("Failed to create user");
    }
}

export async function retrieveUser(userId: User['id']): Promise<User | null> {
    try {
        const result = await db.select().from(UserTable).where(eq(UserTable.id, userId)).limit(1);
        return result[0] || null;
    } catch (error) {
        throw new Error("Failed to retrieve user");
    }
}

export async function retrieveAllUsers(): Promise<User[]> {
    try {
        const users = await db.select().from(UserTable);
        return users;
    } catch (error) {
        throw new Error("Failed to retireve user");
    }
}

export async function retrieveUsersFromConversation(conversationId: Conversation['id']): Promise<User[]> {
    try {
        const users = await db.select(getTableColumns(UserTable)).from(UserTable).innerJoin(usersToConversations, eq(UserTable.id, usersToConversations.userId)).where(eq(usersToConversations.conversationId, conversationId));
        return users;
    } catch (error) {
        throw new Error("Failed to retrieve users from conversation");
    }
}