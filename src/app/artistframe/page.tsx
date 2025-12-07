"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FixedLayout from "@/components/FixedLayout";

import { useBookingStore } from "@/store/bookingStore";
import { logBookingStoreDetailed } from "@/store/logreport"; //ไว้ทดสอบดูค่าใน store

export default function ArtistFramePage() {
  const router = useRouter();
  const setDream = useBookingStore((state) => state.setDream);
  const reset = useBookingStore((state) => state.reset);

  const handleBack = () => {
    console.log("Clearing state...");
    reset();
    router.push('/page-2');
  };

  const handleSelectDream = (dreamName: string) => {
    console.log("Selected Dream: ", dreamName);
    setDream(dreamName);
    router.push('/select-artists');
  };

  return (
    <FixedLayout>
      <main className="relative w-full h-full flex flex-col items-center justify-center border-2 border-gray-200 overflow-hidden">

        {/* ========================================= */}
        {/* 1. LAYER พื้นหลัง (แก้ตรงนี้) */}
        {/* ต้องใส่ absolute inset-0 z-0 เพื่อให้มันลอยอยู่ข้างหลังสุดและไม่ดันปุ่ม */}
        {/* ========================================= */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/background.png" // ⚠️ เช็คชื่อไฟล์ดีๆ
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay สีขาวจางๆ (ถ้าต้องการ) */}
          <div className="absolute inset-0 bg-white/30" />
        </div>

        {/* ========================================= */}
        {/* 2. LAYER เนื้อหา (ปุ่ม, ข้อความ) */}
        {/* ต้องใส่ relative z-10 เพื่อให้มันลอยทับรูปภาพ */}
        {/* ========================================= */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-16">

          {/* Back Button */}
          <div className="absolute top-10 left-10">
            <Button
              className="bg-black text-white px-12 py-6 rounded-xl 
                hover:bg-gray-800 text-xl font-semibold"
              onClick={() => {
                handleBack();
                logBookingStoreDetailed("Back Button : artistframe");

              }}
            >
              Back
            </Button>
          </div>

          {/* Timer Display */}
          <div className="absolute top-10 right-10">
            <p className="text-4xl text-gray-800 font-bold">5 Sec.</p>
          </div>

          {/* Main Content Title */}
          <h1 className="absolute top-32 w-full text-center text-[50px] font-bold text-black tracking-wide z-10">
            Select Your Dream
          </h1>

          {/* Buttons Container */}
          <div className="flex flex-row items-end justify-center gap-16 w-full mt-20">

            {/* Dream 1 */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-[350px] h-[350px]">
                <Image
                  src="/assets/DOMUNDI LOGO.png"
                  alt="Domundi"
                  fill
                  className="object-contain"
                />
              </div>
              <Button
                className="bg-white text-black border-2 border-black px-10 py-6 rounded-full 
                  hover:bg-black hover:text-white text-xl font-bold w-full uppercase"
                onClick={() => {
                  handleSelectDream('DOMUNDI_TV');
                  logBookingStoreDetailed("Back Button : artistframe");
                }}
              >
                DOMUNDI TV
              </Button>
            </div>

            {/* */}
            {/* <div className="flex flex-col items-center gap-6">
              <div className="relative w-[350px] h-[350px]">
                <Image
                  src="/assets/GMM TV LOGO.png"
                  alt="GMM TV"
                  fill
                  className="object-contain"
                />
              </div>
              <Button
                className="bg-white text-black border-2 border-black px-10 py-6 rounded-full 
                  hover:bg-black hover:text-white text-xl font-bold w-full uppercase"
                onClick={() => handleSelectDream('GMM_TV')}
              >
                GMM TV
              </Button>
            </div> */}


            {/* <div className="flex flex-col items-center gap-6">
              <div className="relative w-[350px] h-[350px]">
                <Image
                  src="/assets/tia51 LOGO.png"
                  alt="TIA_51"
                  fill
                  className="object-contain"
                />
              </div>
              <Button
                className="bg-white text-black border-2 border-black px-10 py-6 rounded-full 
                  hover:bg-black hover:text-white text-xl font-bold w-full uppercase"
                onClick={() => handleSelectDream('TIA51_TV')}
              >
                TIA51 TV
              </Button>
            </div> */}

          </div>

        </div>
        {/* จบ Layer เนื้อหา */}

      </main>
    </FixedLayout>
  );
}