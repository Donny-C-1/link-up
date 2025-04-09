import db from "$lib/server/db";
// import { users as usersTable } from "$lib/server/db/schema";
import { redirect, fail } from "@sveltejs/kit";
import { createUser } from "$lib/server/db/user.js";

// export async function load() {
//     const users = await db.select().from(usersTable);

//     return {
//         users,
//         memData
//     }
// }

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
            return redirect(303, "/chat");
        } catch (error: any) {
            return fail(500, { errMessage: error.message || "Could not create user"});
        }
    },
    
    login: async ({ request }) => {
        const data = await request.formData();

    }
}