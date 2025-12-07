"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import FixedLayout from "@/components/FixedLayout";
import { useBookingStore } from "@/store/bookingStore";
import { h1 } from "framer-motion/client";

import { Button } from "@/components/ui/button";

export default function QRCodePage() {
    const selectedDreamFrame = useBookingStore((state) => state.selectedDreamFrame);

    const router = useRouter();

    const handelNext = () => {
        router.push("/"); // เปลี่ยนเส้นทางไปยังหน้าหลักหรือหน้าที่ต้องการหลังจาก QR Code
    }

    return (
        <FixedLayout>
            <div
                className="relative w-full h-full"
                style={{
                    backgroundImage: "url('/assets/background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                {/* Next Button */}
                <div className="absolute top-10 right-10 z-10">
                    <Button
                    onClick={handelNext}
                    className="bg-black text-white px-16 py-8 rounded-xl hover:bg-gray-800 text-3xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed "
                    >
                    HOME
                    </Button>
                </div>

                {/* Left Section - Photo Preview */}
                <div className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-center p-16">
                    <div className="relative w-full max-w-md aspect-[3/4] bg-white rounded-3xl shadow-2xl overflow-hidden">
                        {selectedDreamFrame ? (
                            <div className="relative w-full h-full">
                                <Image
                                    src={selectedDreamFrame}
                                    alt="Selected Dream Frame"
                                    fill
                                    className="object-contain p-4"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                            </div>
                        ) : (
                            <h1>"No photo selected"</h1>
                        )}
                    </div>
                </div>

                {/* Right Section - Logo and Text */}
                <div className="absolute right-0 top-0 h-full w-1/2 flex flex-col items-center justify-center gap-12 p-16">
                    <Image
                        src="/assets/logo-photopia-crop.png"
                        alt="Photopia Logo"
                        width={600}
                        height={340}
                        className="max-w-full h-auto"
                    />

                    {/* QR Code Mockup */}
                    <div className="w-full max-w-md flex items-center justify-center">
                        <Image
                            src="/assets/qrcode-mockup.png"
                            alt="QR Code Mockup"
                            width={400}
                            height={150}
                            className="max-w-full h-auto"
                        />
                    </div>

                    <h1 className="text-white text-5xl font-serif text-center">
                        You and artist are connecting...
                    </h1>
                </div>
            </div>
        </FixedLayout>
    );
}