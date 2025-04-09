import db from "./index";
import { User as UserTable } from "./schema";

export type User = typeof UserTable.$inferSelect;
export type NewUser = typeof UserTable.$inferInsert;

export async function createUser(userData: Omit<NewUser, 'id'>): Promise<User['id']> {
    try {
        const result = await db.insert(UserTable).values(userData).returning({ id: UserTable.id });
        return result[0]?.id;
    } catch (error) {
        throw new Error("Failed to create user");
    }
}