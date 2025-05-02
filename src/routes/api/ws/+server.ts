import { WebSocketServer } from "ws";
import { Server } from "node:http";
import { json } from "@sveltejs/kit";

export function GET({ request }: { request: Request }, { server }: { server: Server }) {
    console.log("/api/ws");
    if (server instanceof Server) {
        const wss = new WebSocketServer({ noServer: true });

        server.on('upgrade', (req, socket, head) => {
            if (req.url === "/api/ws") {
                wss.handleUpgrade(req, socket, head, (ws) => {
                    console.log('client connected');
                })
            }
        })
    }
    return new Response(null, { status: 101 })
    // debugger;
    // return json("Test complete");
}