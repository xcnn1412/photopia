"use client";

import { useState, useEffect } from "react";

interface FixedLayoutProps {
  children: React.ReactNode;
}

export default function FixedLayout({ children }: FixedLayoutProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const scaleX = window.innerWidth / 1920;
      const scaleY = window.innerHeight / 1080;
      const newScale = Math.min(scaleX, scaleY);
      setScale(newScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      <div
        style={{
          width: "1920px",
          height: "1080px",
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
        className="bg-white shadow-2xl overflow-hidden relative"
      >
        {children}
      </div>
    </div>
  );
}