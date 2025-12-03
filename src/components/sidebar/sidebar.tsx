"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo, LogoIcon } from "./YourLogoComponent"; // แยก Logo ไปไว้ไฟล์อื่นหรือไว้ในนี้ก็ได้

// 1. สร้าง Interface กำหนดหน้าตาของข้อมูลที่จะส่งเข้ามา
interface SidebarProps {
  links: {
    label: string;
    href?: string;
    icon: React.ReactNode;
    onClick?: () => void; // เพิ่ม onClick เผื่อใช้เปลี่ยน state
  }[];
  children?: React.ReactNode; // รับเนื้อหาที่จะแสดงด้านขวา (Dashboard)
}

// 2. รับ props เข้ามาในฟังก์ชัน
export default function SidebarDemo({ links, children }: SidebarProps) {
  const [open, setOpen] = useState(false);

  // *ลบ const links = [...] ตัวเก่าทิ้งไปเลย เพราะเราจะใช้จาก props แทน*

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            
            <div className="mt-8 flex flex-col gap-2">
              {/* 3. ใช้ links ที่รับมาจาก Props มา Map */}
              {links.map((link, idx) => (
                <SidebarLink 
                  key={idx} 
                  link={{
                    label: link.label,
                    href: link.href || "#",
                    icon: link.icon,
                    onClick: link.onClick // ส่งต่อ onClick
                  }} 
                />
              ))}
            </div>
          </div>
          
          {/* ส่วน User Profile อาจจะทำเป็น props รับมาด้วยก็ได้ถ้าต้องการ */}
          {/* ... User Profile Code ... */}

        </SidebarBody>
      </Sidebar>
      
      {/* 4. แสดงเนื้อหาด้านขวาที่ส่งเข้ามา */}
      {children} 
    </div>
  );
}