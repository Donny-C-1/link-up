import db from "$lib/server/db";
import { users as usersTable } from "$lib/server/db/schema";

const memData = {
    email: "test1@tryhard.com",
    password: "tryharder"
}

export async function load() {
    const users = await db.select().from(usersTable);
    console.log("Load function");

    return {
        users,
        memData
    }
}

export const actions = {
    signup: async ({ request }) => {
        const data = await request.formData();
        memData.email = data.get("email") as any;
        memData.password = data.get("password") as any;
        // const username = data.get('username');
        // if (typeof username !== 'string') {
        //     throw new Error('Invalid username');
        // }
        // const email = data.get('email');
        // const passwordHash = data.get('passwordHash');
        // if (typeof email !== 'string' || typeof passwordHash !== 'string') {
        //     throw new Error('Invalid email or password');
        // }
        // db.insert(usersTable).values({ username, email, passwordHash });

        console.log(data.get("email"));
    },
    
    login: async ({ request }) => {
        console.log("Login function");
        const data = await request.formData();

        console.log(data.get("email"));
    }
}