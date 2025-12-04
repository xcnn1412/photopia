"use client";
import { useState } from "react";
import { MainSidebar } from "@/components/sidebar/main-sidebar";
import { LayoutDashboard, UserCog, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import FixedLayout from "@/components/FixedLayout";
import { useRouter } from "next/navigation";

import { useBookingStore } from "@/store/bookingStore";
import { logBookingStoreDetailed } from "@/store/logreport"; //ไว้ทดสอบดูค่าใน store

export default function Page() {
  const router = useRouter();
  const setDreamFrame = useBookingStore((state) => state.setDreamFrame);
  const setDream = useBookingStore((state) => state.setDream);
  
  // ดึงค่าทั้งหมดจาก store เพื่อ log
  const selectedFrame = useBookingStore((state) => state.selectedFrame);
  const selectedDream = useBookingStore((state) => state.selectedDream);
  const selectedDreamFrame = useBookingStore((state) => state.selectedDreamFrame);
  const selectedArtistStore = useBookingStore((state) => state.selectedArtist);
  
  // State สำหรับเก็บศิลปินที่เลือก
  // default เป็น "KengNamPing"
  const [selectedArtist, setSelectedArtist] = useState("KengNamPing");

  // ข้อมูลเมนูที่จะส่งเข้าไป Sidebar (ไม่รวม Back)
  const menuItems = [
    {
      label: "KengNamPing",
      icon: <LayoutDashboard className="h-5 w-5" />,
      onClick: () => setSelectedArtist("KengNamPing"),
      active: selectedArtist === "KengNamPing",
    },
    {
      label: "TleFirstOne",
      icon: <UserCog className="h-5 w-5" />,
      onClick: () => setSelectedArtist("TleFirstOne"),
      active: selectedArtist === "TleFirstOne",
    },
    {
      label: "Khemjiraset",
      icon: <Camera className="h-5 w-5" />,
      onClick: () => setSelectedArtist("Khemjiraset"),
      active: selectedArtist === "Khemjiraset",
    },
  ];

  return (
    <FixedLayout>
      <MainSidebar 
        items={menuItems}
        footer={
          <div className="pb-4">
            <Button
              className="bg-black text-white px-12 py-6 rounded-xl 
              hover:bg-gray-800 text-xl font-semibold w-full"
              onClick={() => {                
                setDreamFrame(null);
                setDream(null);
                logBookingStoreDetailed("After Back Button Click");
                router.push("/artistframe");
              }}
            >
              Back
            </Button>
          </div>
        }
      >
        
        {/* --- เนื้อหาด้านขวา (children) --- */}
        <div className="p-10 w-full h-full bg-white dark:bg-neutral-900 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700">
           <div className="flex flex-col items-center justify-center h-full space-y-4">
              <h1 className="text-4xl font-bold">Selected: {selectedArtist}</h1>
              <div className="w-[500px] h-[300px] bg-gray-200 animate-pulse rounded-xl"></div>
           </div>
        </div>

      </MainSidebar>
    </FixedLayout>
  );
}