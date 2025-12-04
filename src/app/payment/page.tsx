"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FixedLayout from "@/components/FixedLayout";

import { useBookingStore } from "@/store/bookingStore";
import { logBookingStoreDetailed } from "@/store/logreport";
import { Button } from "@/components/ui/button";

export default function PaymentPage() {
  const router = useRouter();

  const [photoCount, setPhotoCount] = useState(1);

  const handleDecrease = () => {
    setPhotoCount((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setPhotoCount((prev) => Math.min(10, prev + 1));
  };

  // Get all values from booking store
  // const selectedFrame = useBookingStore((state) => state.selectedFrame);
  // const selectedDream = useBookingStore((state) => state.selectedDream);
  const selectedArtist = useBookingStore((state) => state.selectedArtist);
  const selectedDreamFrame = useBookingStore((state) => state.selectedDreamFrame);

  // Debug Check
  useEffect(() => {
    logBookingStoreDetailed("Payment Page");
  }, []);
  
  return (
    <FixedLayout>
      <div className="grid h-full w-full grid-cols-2 bg-white">
        {/* Left Side */}
        <div className="relative flex flex-col items-center justify-center border-r-2 border-gray-200 bg-gray-50 p-10">
          <h2 className="mb-6 text-2xl font-bold">Your Selection</h2>
          <p className="mb-6 text-2xl font-semibold">Artist : {selectedArtist}</p>

          {/* Show selected frame */}
          {selectedDreamFrame ? (
            <div className="flex max-h-full w-full items-center justify-center">
              <div className="relative inline-block max-h-[90%] max-w-[90%] overflow-hidden rounded-lg bg-white shadow-xl">
                <Image
                  src={selectedDreamFrame}
                  alt="Selected Dream Frame"
                  width={800}
                  height={800}
                  className="h-auto w-auto max-h-[90vh] max-w-full object-contain"
                />
              </div>
            </div>
          ) : (
            <div className="text-gray-400">No Image Selected</div>
          )}
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center justify-center">

          <h1 className="mb-2 text-4xl font-bold">เลือกจำนวนภาพถ่าย</h1>
          <p className="mb-2 text-4xl font-bold">Please Select your Count</p>

          {/* Counter */}
          <div className="mt-20">
            <div className="flex items-center gap-10">
            <button
              type="button"
              onClick={handleDecrease}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-2xl font-bold text-white"
            >
              -
            </button>

            <div className="flex h-16 w-40 items-center justify-center rounded-2xl
            border border-black bg-white text-2xl font-semibold text-gray-900 shadow">
              {photoCount}
            </div>

            <button
              type="button"
              onClick={handleIncrease}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-2xl font-bold text-white"
            >
              +
            </button>

          </div>
        </div>

          <p className="mt-20 text-4xl font-bold"> มูลค่า { 100 * photoCount} บาท </p> 

          {/* ใส่เนื้อหาฝั่งขวาต่อตรงนี้ */}
          
        <Button
        className="mt-20 bg-green-500 text-green-800  px-15 py-15 rounded-4xl 
         hover:bg-green-300 hover:text-white text-xl font-bold  uppercase"
        >   
        ชำระเงิน
        </Button>

        </div>
      </div>
    </FixedLayout>
  );
}