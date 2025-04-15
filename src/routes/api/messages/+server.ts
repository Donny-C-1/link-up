import { json } from "@sveltejs/kit";
import { retrieveMessagesById } from "$lib/server/db/message";
import { error } from "@sveltejs/kit";

export async function GET({ params, url }) {
        try {
            const conversationId = url.searchParams.get('conversationId');
            const messages = await retrieveMessagesById(Number(conversationId));

            return json(messages);
        } catch (err) {
            error(500, "Do the calmz");
        }
}