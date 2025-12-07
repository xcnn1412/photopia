"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FixedLayout from "@/components/FixedLayout";

import { useBookingStore } from "@/store/bookingStore";
import { logBookingStore } from "@/store/logreport";  

export default function Frontpage() {
  const router = useRouter();
  const [buttonText, setButtonText] = useState("STEP UP");
  const resetBooking = useBookingStore((state) => state.reset);

  const handleClick = () => {
    resetBooking(); // เคลียร์ค่าทั้งหมดใน booking store
    //console.log("Booking store has been reset");
    logBookingStore("Before Back Navigation");
    setButtonText("Let's Go ...");
    setTimeout(() => {
      router.push('/page-2');
    }, 500); // รอ 0.5 วินาทีก่อนเปลี่ยนหน้า
  };

  return (
    <FixedLayout>
      <main className="relative w-full h-full bg-white flex flex-col items-center justify-center p-16 border-2 border-gray-200">
        
        {/* Timer Display */}
        <div className="absolute top-10 right-10">
          <p className="text-4xl text-gray-600 font-medium">5 Sec.</p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center space-y-16 ">
          {/* Logo */}
          <Image
                          src="/assets/logo-photopia-crop.png"
                          alt="Company Logo"
                          width={800}
                          height={450}
                          className="relative w-250 mt-25"
                          style={{ height: 'auto' }} // ให้สูงเป็นสัดส่วนอัตโนมัติ
           />

          {/* Tagline */}
          <p className="text-4xl text-gray-700 font-semibold tracking-wider">
            WE MAKE IT <span className="text-[#c1121f]">HAPPEN.</span> 
            YOU FEELING IT <span className="text-[#669bbc]">HAPPY.</span>
          </p>
        </div>

        {/* Button */}
        <Button
          className="bg-white border border-black  text-black px-32 py-18 rounded-full mt-10 hover:bg-black hover:text-white text-6xl font-bold mt-25"
          onClick={handleClick}
        >
          {buttonText}
        </Button>

      </main>
    </FixedLayout>
  );
}
