"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FixedLayout from "@/components/FixedLayout";
import { Button } from "@/components/ui/button";

export default function StaticLoadingPage() {

    const router = useRouter();

    const handelNext = () => {
        router.push("/snap");
    };

    return (
      <FixedLayout>
        <main className="relative w-full h-full bg-[#FFF8E7] flex flex-col items-center justify-center p-16 border-2 border-gray-200">

        {/* Next Button */}
        <div className="absolute top-10 right-10 z-10">
            <Button
              onClick={handelNext}
              className="bg-black text-white px-16 py-8 rounded-xl hover:bg-gray-800 text-3xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              NEXT
            </Button>
          </div>

        {/* Timer Display */}
        <div className="absolute top-10 right-10">
          <p className="text-4xl text-gray-600 font-medium">5 Sec.</p>
        </div>

        <div className="text-center italic font-bold text-4xl space-y-4 text-gray-700">
        <p>เตรียมตัวให้พร้อมสำหรับการถ่ายภาพแห่งความทรงจำ</p>
        <p>ทุกคนมีเวลาถ่ายรูปกับศิลปินที่คุณรัก ทั้งหมด {40} วินาที</p>
        <p>สามารถถ่ายได้ทั้งหมด {4} ช็อต</p>
        </div>

        <div className="text-center font-semibold text-4xl space-y-4 text-gray-700 mt-16">
        <p>Get ready for memorable photo shoot</p>
        <p>You have {40} seconds to take photos with your beloved artists</p>
        <p>You can take a total of {4} shots</p>
        </div>

        <div className="relative w-150">
            <Image
                src="/assets/logo-photopia-crop.png"
                alt="Company Logo"
                width={800}
                height={450}
                className="mt-16"
                style={{ height: 'auto' }} // ให้สูงเป็นสัดส่วนอัตโนมัติ
            />
        </div>



        </main> 
      </FixedLayout>
    );
}