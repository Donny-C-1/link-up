import { json } from "@sveltejs/kit";

export function GET({ request }) {
    return json({ message: "Test successful"});
}