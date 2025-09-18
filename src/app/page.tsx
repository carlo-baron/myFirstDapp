'use client';
import { useEffect } from "react";
import { useMiniKit } from "@coinbase/onchainkit/minikit";

export default function Home() {
    const { setFrameReady, isFrameReady } = useMiniKit();

    useEffect(() => {
        if(!isFrameReady) setFrameReady();
    }, [isFrameReady, setFrameReady]);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-4xl">Welcome</h1>
    </div>
  );
}
