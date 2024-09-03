// src/lib/pusherServer.ts
import PusherServer, { Options } from "pusher"

export const pusherOptions: Options = {
    appId: process.env.app_id as string,
    key: process.env.key as string,
    secret: process.env.secret as string,
    cluster: process.env.cluster! as string,
    useTLS: true
}

// Allows you to use pusher inside Next.js route handlers and server
// components.
export const pusherServer = new PusherServer(pusherOptions)