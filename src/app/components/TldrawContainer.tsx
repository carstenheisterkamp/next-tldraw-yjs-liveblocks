
"use client";

import '@tldraw/tldraw/tldraw.css';
import { Tldraw } from '@tldraw/tldraw';
import { useYjsStore } from "@/app/useYjsStore";

export function TldrawEditor() {
    const yjsStore = useYjsStore({ roomId: "tldraw_room" });

    return (
        <div className='fixed inset-0'>
            <Tldraw store={yjsStore} />
        </div>
    );
}