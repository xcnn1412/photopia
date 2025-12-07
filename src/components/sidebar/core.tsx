"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

// 1️⃣ เพิ่ม active?: boolean เข้าไปใน Interface
interface Links {
  label: string;
  href?: string;
  icon: React.JSX.Element | React.ReactNode;
  onClick?: () => void;
  active?: boolean; // ✅ เพิ่มบรรทัดนี้: เพื่อให้เราสั่งให้มัน "เลือกค้างไว้" ได้
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(true);
  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as any)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open } = useSidebar();
  return (
    <motion.div
      className={cn(
        "h-full px-4 py-4 hidden justify-center items-center md:flex md:flex-col bg-gray-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",
        className
      )}
      animate={{
        width: "300px",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div> & { children?: React.ReactNode }) => {
  const { open, setOpen } = useSidebar();
  return (
    <motion.div
      className={cn(
        "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
      )}
      {...props}
    >
      <div className="flex justify-end z-20 w-full">
        <Menu
          className="text-neutral-800 dark:text-neutral-200"
          onClick={() => setOpen(!open)}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-center justify-between",
              className
            )}
          >
            <div
              className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
              onClick={() => setOpen(!open)}
            >
              <X />
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

type SidebarLinkProps = {
  link: Links;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "children">;

export const SidebarLink = ({
  link,
  className,
  ...linkProps
}: SidebarLinkProps) => {
  const { open } = useSidebar();
  const pathname = usePathname();

  // เช็ค active จาก prop ที่ส่งมาก่อน ถ้าไม่มีค่อยเช็คจาก pathname
  const isActive = link.active === true;

  const isButton = !link.href || link.href === "#";
  const combinedClassName = cn(
    "flex items-center justify-start gap-4 group/sidebar py-3 px-4 w-full transition-all duration-200",
    "rounded-xl cursor-pointer border-2",
    isActive
      ? "text-black  border border-black shadow-md"
      : "border-transparent text-neutral-700 hover:bg-gray-200 hover:text-black hover:border-gray-300",
    "active:scale-95",
    className
  );

  const content = (
    <>
      {link.icon}

      <motion.span
        animate={{
          display: "inline-block",
          opacity: 1,
        }}
        className="text-xl font-semibold whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </>
  );

  if (isButton) {
    return (
      <div className={combinedClassName} onClick={link.onClick}>
        {content}
      </div>
    );
  }

  return (
    <Link
      href={link.href ?? "#"}
      className={combinedClassName}
      onClick={link.onClick}
      {...linkProps}
    >
      {content}
    </Link>
  );
};