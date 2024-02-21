'use client';
import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "../liveblocks.config";
import { TldrawEditor } from "./components/TldrawContainer";
import { Loading } from "./components/Loading";
import { env } from "process";

export default function Page() {

  const room_id = env.LIVEBLOCKS_ROOM_ID;

  return (
    <RoomProvider
      id={`$room_id`}
      autoConnect={true}
      initialPresence={{ cursor: { x: 0, y: 0 } }}
      initialStorage={{}}
    >
      <ClientSideSuspense fallback=<Loading />>
        {() => <TldrawEditor />}
      </ClientSideSuspense>
    </RoomProvider >
  );
}