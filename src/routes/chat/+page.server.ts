import { retrieveUserConversations } from "$lib/server/db/conversation";
import { createMessage } from "$lib/server/db/message.js";
import { fail } from "@sveltejs/kit";

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

export const actions = {
    createMessage: async ({ request }) => {
        const data = await request.formData();

        let conversationId = Number(data.get('conversationId'));
        let senderId = Number(data.get('senderId'));
        let content = String(data.get('content'));

        let messageData = {
            conversationId,
            senderId,
            content
        }

        try {
            const message = await createMessage(messageData);
            console.log(message);
        } catch (err) {
            console.error(err);
            fail(400, {
                description: 'Madness'
            })
        }
    }
}