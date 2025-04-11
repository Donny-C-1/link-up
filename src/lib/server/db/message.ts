import db from "./index";
import { Message as MessageTable } from "./schema";
import type { Conversation, Message, NewMessage } from "./schema";
import { eq } from "drizzle-orm";

export async function retrieveMessagesById(conversationId: Conversation['id']): Promise<Message[]> {
    try {
        const messages = await db.select().from(MessageTable).where(eq(MessageTable.conversationId, conversationId));
        return messages;
    } catch (error) {
        throw new Error(`Failed to retrieve messages from convesation with id ${conversationId}`)
    }
}