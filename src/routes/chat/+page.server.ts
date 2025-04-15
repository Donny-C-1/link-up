import { retrieveUserConversations } from "$lib/server/db/conversation";

const STATIC_USER_ID = 2;

export async function load() {
    try {
        const conversations = await retrieveUserConversations(STATIC_USER_ID);
        return {
            conversations
        }
    } catch (error) {
        return {
            conversations: []
        }
    }
}