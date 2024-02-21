import { Liveblocks } from "@liveblocks/node";
import { env } from "process";

const API_KEY = env.LIVEBLOCKS_SECRET

const liveblocks = new Liveblocks({
    secret: API_KEY!,
});

export async function POST(request: Request) {
    // Get the current user from your database
    const user = __getUserFromDB__(request);

    // Start an auth session inside your endpoint
    const session = liveblocks.prepareSession(
        user.id,
        { userInfo: user.metadata } // Optional
    );

    // Implement your own security, and give the user access to the room
    const { room } = await request.json();
    if (room && __shouldUserHaveAccess__(user, room)) {
        session.allow(room, session.FULL_ACCESS);
    }

    // Authorize the user and return the result
    const { status, body } = await session.authorize();
    return new Response(body, { status });
}