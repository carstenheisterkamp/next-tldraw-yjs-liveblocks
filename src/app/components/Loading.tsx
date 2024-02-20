"use client";
import Image from "next/image";

export function Loading() {
    return (
        <div className="absolute w-full h-full flex place-content-center place-items-center">
            <Image className="w-16 h-16 opacity-20" src="./img/loading.svg" alt="Loading" width={100} height={100} />
        </div>
    );
}