import { json } from "@sveltejs/kit";

export function GET({ request }) {
    console.log("/api");
    debugger;
    return json({ message: "Test successful"});
}