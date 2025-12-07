"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import FixedLayout from "@/components/FixedLayout";

export default function SnapPage() {
    
    const router = useRouter();

    const handelNext = () => {
        router.push("/result");
    };

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        let stream: MediaStream | null = null;
        let showTimer: ReturnType<typeof setTimeout> | null = null;
        let hideTimer: ReturnType<typeof setTimeout> | null = null;

        const startCamera = async () => {
            if (!navigator.mediaDevices?.getUserMedia) {
                console.error("Webcam not supported in this browser");
                return;
            }

            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    video: { width: 1080, height: 810 },
                });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Unable to access webcam", error);
            }
        };

        startCamera();

        showTimer = setTimeout(() => {
            setShowPrompt(true);
            hideTimer = setTimeout(() => setShowPrompt(false), 150000);
        }, 2000);

        return () => {
            if (stream) {
                stream.getTracks().forEach((track) => track.stop());
            }
            if (showTimer) {
                clearTimeout(showTimer);
            }
            if (hideTimer) {
                clearTimeout(hideTimer);
            }
        };
    }, []);

    return (
        <FixedLayout>
            <div
                className="relative w-full h-full"
                style={{
                    backgroundImage: "url('/assets/background1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute top-12 left-12 text-white text-7xl font-semibold tracking-wide">
                    NO.1
                </div>

                {/* Next Button */}
                <div className="absolute top-10 right-10 z-10">
                    <Button
                    onClick={handelNext}
                    className="bg-black text-white px-16 py-8 rounded-xl hover:bg-gray-800 text-3xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                    NEXT
                    </Button>
                </div>

                <div className="absolute top-1/2 left-1/2 w-[1080px] h-[810px] bg-white -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden">

                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        style={{ transform: "scaleX(-1)" }}
                        autoPlay
                        playsInline
                        muted
                    />
                    
                </div>

                {showPrompt && (
                    <div className="absolute bottom-80  right-30 text-white text-6xl font-semibold italic">
                        คนเก่ง ยิ้มหน่อย
                    </div>
                )}
            </div>
        </FixedLayout>
    );
}