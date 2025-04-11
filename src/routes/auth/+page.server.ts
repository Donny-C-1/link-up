import { redirect, fail } from "@sveltejs/kit";
import { createUser, retrieveUser, retrieveUsersFromConversation } from "$lib/server/db/user.js";
import { retrieveAllGroupConversationsOfUser } from "$lib/server/db/conversation.js";

export async function load() {
    try {
        const user = await retrieveAllGroupConversationsOfUser(2);
        return {
            user
        }
    } catch (error) {
        return {
            error: 'madness'
        }
    }
}

export const actions = {
    signup: async ({ request }) => {
        const data = await request.formData();
        const username = data.get("username") as string;
        const email = data.get("email") as string;
        const passwordHash = data.get("password") as string;

        if (!username || !email || !passwordHash) {
            return fail(400, {
                error: "Username, email and password fields are required"
            })
        }

        try {
            const userId = await createUser({ username, email, passwordHash });
        } catch (error: any) {
            return fail(500, { errMessage: error.message || "Could not create user"});
        }
        redirect(303, "/chat");
    },
    
    login: async ({ request }) => {
        const data = await request.formData();

        return { message: "success" };

    }
}