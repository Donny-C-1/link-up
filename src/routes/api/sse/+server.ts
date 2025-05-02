export function GET({ request }) {
    let count = 0;
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
        start: (controller) => {
            const chunk = encoder.encode(`data: Hello ${count++}\n\n`);
            controller.enqueue(chunk);
        },
        pull: (controller) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    const chunk = encoder.encode(`data: New Data ${count++}\n\n`);
                    controller.enqueue(chunk);
                    resolve();
                }, 5000);
            })
        }
    })
    const responseHeaders = {
        "Content-Type": "text/event-stream"
    }
    return new Response(stream, { status: 200, headers: responseHeaders });
}