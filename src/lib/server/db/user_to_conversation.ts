import { eq } from "drizzle-orm";
import db from "./index";
import { usersToConversations } from "./schema";
import type { UserToConversation, NewUserToConversation, User } from "./schema";

export async function retrieveAllUserToConversation(): Promise<UserToConversation[]> {
    try {
        const result = await db.select().from(usersToConversations);
        return result;
    } catch (error) {
        throw new Error("Failed to retrieve entries in User to Conversation db");
    }
}

export async function retrieveUserToConversationById(userId: User['id']): Promise<UserToConversation[]> {
    try {
        const result = await db.select().from(usersToConversations).where(eq(usersToConversations.userId, userId));
        return result;
    } catch (error) {
        throw new Error("Failed to retieve entries in user_to_conversation db by id");
    }
}