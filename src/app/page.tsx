import Image from "next/image";

import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "../../liveblocks.config";
import { TldrawEditor } from "./components/TldrawContainer";
import { Loading } from "./components/Loading";

export default function Page() {
  return (
    <RoomProvider
      id="tldraw-liveblocks-room"
      initialPresence={{}}
    >
      <ClientSideSuspense fallback=<Loading />>
        {() => <TldrawEditor />}
      </ClientSideSuspense>
    </RoomProvider>
  );
}