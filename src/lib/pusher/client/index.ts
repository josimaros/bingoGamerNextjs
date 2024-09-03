// src/lib/pusherClient.ts
import PusherClient from "pusher"
import {pusherOptions} from '../server/index'

// Allows you to use Pusher inside Next.js "use client" components.
const key = process.env.key!

export const pusherClient = new PusherClient(pusherOptions)