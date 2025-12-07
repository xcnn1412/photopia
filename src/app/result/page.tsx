"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FixedLayout from "@/components/FixedLayout";
import { Button } from "@/components/ui/button";
import { h1 } from "framer-motion/client";

import { useBookingStore } from "@/store/bookingStore";

export default function SnapPage() {

      const selectedArtist = useBookingStore((state) => state.selectedArtist);
      const selectedDreamFrame = useBookingStore((state) => state.selectedDreamFrame);

      const router = useRouter();

    const handelNext = () => {
        router.push("/qrcode");
    };


    return(
        <FixedLayout>

         <div 
         className="relative w-full h-full"
         style={{
         backgroundImage: "url('/assets/background.png')",
         backgroundSize: "cover",
         backgroundPosition: "center",
        }}>

            <div className="flex flex-col items-center w-full gap-8 p-8">

                 <Image
                    src="/assets/logo-photopia-crop.png"
                    alt="Company Logo"
                    width={800}
                    height={450}
                    className="max-w-full h-auto"
                />

                 {/* Next Button */}
                <div className="absolute top-10 right-10 z-10">
                    <Button
                    onClick={handelNext}
                    className="bg-black text-white px-16 py-8 rounded-xl hover:bg-gray-800 text-3xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed "
                    >
                    NEXT
                    </Button>
                </div>

                <div className="w-full grid grid-cols-2 justify-center gap-6">

                    {/* ฝั่งซ้าย */}
                    <div className="bg-white h-full flex  justify-center ">
                        <h1 className="text-4xl font-semibold mt-15"> Pick your best 4 memory </h1> 
                    </div>

                    {/* ฝั่งขวา */}
                    <div className=" h-full flex items-center justify-center shadow-lg p-4">
                        {selectedDreamFrame ? (
                            <div className="relative w-full max-w-[480px] aspect-[3/4] overflow-hidden rounded-3xl">
                                <Image
                                    src={selectedDreamFrame}
                                    alt="Selected Dream Frame"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 480px"
                                />
                            </div>
                        ) : (
                            <h1 className="text-gray-400">No Frame Selected</h1>
                        )}
                    </div>

                </div>

            </div>

        </div>
   

        </FixedLayout>
    );   
}   