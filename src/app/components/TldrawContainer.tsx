"use client";

import '@tldraw/tldraw/tldraw.css';
import { Tldraw } from '@tldraw/tldraw';
import { useYjsStore } from "@/app/store/useYjsStore";

export function TldrawEditor() {

    const yjsStore = useYjsStore({ roomId: "tldraw_room" });

    return (
        <div className='fixed inset-0'>
            <Tldraw
                inferDarkMode
                store={yjsStore}
            />
        </div>
    );
}