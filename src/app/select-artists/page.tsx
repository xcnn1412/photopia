"use client";
import { useState } from "react";
import { MainSidebar } from "@/components/sidebar/main-sidebar"; // เรียกใช้ตัว Wrapper
import { LayoutDashboard, UserCog, Camera } from "lucide-react";
import FixedLayout from "@/components/FixedLayout";

export default function Page() {
  // State ของหน้าเว็บเรา
  const [activeTab, setActiveTab] = useState("KengNamPing");

  // ข้อมูลเมนูที่จะส่งเข้าไป
  const menuItems = [
    {
      label: "KengNamPing",
      icon: <LayoutDashboard className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />,
      onClick: () => setActiveTab("KengNamPing"), // สั่งให้เปลี่ยนหน้า
    },
    {
      label: "TleFirstOne",
      icon: <UserCog className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />,
      onClick: () => setActiveTab("TleFirstOne"),
    },
    {
      label: "Take Photo",
      icon: <Camera className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />,
      onClick: () => console.log("Open Camera"),
    },
  ];

  return (
    <FixedLayout>
      <MainSidebar items={menuItems}>
        
        {/* --- เนื้อหาด้านขวา (children) --- */}
        <div className="p-10 w-full h-full bg-white dark:bg-neutral-900 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700">
           <div className="flex flex-col items-center justify-center h-full space-y-4">
              <h1 className="text-4xl font-bold">Selected: {activeTab}</h1>
              <div className="w-[500px] h-[300px] bg-gray-200 animate-pulse rounded-xl"></div>
           </div>
        </div>

      </MainSidebar>
    </FixedLayout>
  );
}