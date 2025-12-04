"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./core";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

// กำหนด Type ของข้อมูลเมนู
export interface SidebarItem {
  label: string;
  href?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

interface MainSidebarProps {
  items: SidebarItem[];      // รายการเมนู
  children?: React.ReactNode; // เนื้อหาด้านขวา (Dashboard Content)
  header?: React.ReactNode;   // โลโก้ด้านบน (Optional)
  footer?: React.ReactNode;   // เมนูด้านล่างสุด (Optional)
}

export function MainSidebar({ items, children, header, footer }: MainSidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // บังคับเต็มจอเสมอ
      )}
    >
      {/* --- ส่วนของ Sidebar --- */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            
            {/* Logo หรือ Header */}
            {header ? header : <DefaultLogo open={open} />}
            
            {/* Render รายการเมนู */}
            <div className="mt-8 flex flex-col gap-2">
              {items.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          
          {/* Footer (เช่น User Profile หรือปุ่ม Back) */}
          {footer && <div>{footer}</div>}
        </SidebarBody>
      </Sidebar>

      {/* --- ส่วนของ Content ด้านขวา --- */}
      <div className="flex flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}


// --- Logo Component เริ่มต้น (เผื่อไม่ได้ส่ง props header มา) ---
export const DefaultLogo = ({ open }: { open: boolean }) => {
  return (
    <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        {open && "Acet Labs"}
      </motion.span>
    </Link>
  );
};