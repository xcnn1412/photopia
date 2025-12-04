"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LayoutDashboard, UserCog, Camera, ArrowLeft } from "lucide-react";

import { MainSidebar } from "@/components/sidebar/main-sidebar";
import { Button } from "@/components/ui/button";
import FixedLayout from "@/components/FixedLayout";

import { useBookingStore } from "@/store/bookingStore";
import { logBookingStoreDetailed } from "@/store/logreport";


// =====================================================
// Type Definitions
// =====================================================
type FrameOrientation = "portrait" | "landscape";

interface FrameData {
  src: string;
  type: FrameOrientation;
}

// =====================================================
// Artist Frames Data
// =====================================================
const ARTIST_FRAMES: Record<string, FrameData[]> = {
  KengNamPing: [
    { src: "/assets/kengnamping-1.png", type: "portrait" },
    { src: "/assets/kengnamping-2.png", type: "portrait" },
    { src: "/assets/kengnamping-3.png", type: "portrait" },
  ],
  TleFirstOne: [
    { src: "/assets/TlefirstOne-1.png", type: "portrait" },
    { src: "/assets/TlefirstOne-2.png", type: "portrait" },
    { src: "/assets/TlefirstOne-3.png", type: "portrait" },
  ],
  Khemjiraset: [
    { src: "/assets/khemjira-1.png", type: "portrait" },
    { src: "/assets/khemjira-2.png", type: "landscape" },
  ],
};

// =====================================================
// Select Artists Page Component
// =====================================================
export default function Page() {
  const router = useRouter();

  // Zustand Store Actions
  const setDreamFrame = useBookingStore((state) => state.setDreamFrame);
  const setDream = useBookingStore((state) => state.setDream);
  const setArtist = useBookingStore((state) => state.setArtist);

  // Local State Management
  const [selectedArtist, setSelectedArtist] = useState("KengNamPing");
  const [selectedFrameSrc, setSelectedFrameSrc] = useState<string | null>(null);

  // Get current artist frames based on selection
  const currentFrames = ARTIST_FRAMES[selectedArtist] || [];

  // =====================================================
  // Event Handlers
  // =====================================================

  // Handle artist change and clear selected frame
  const handleArtistChange = (artistName: string) => {
    setSelectedArtist(artistName);
    setSelectedFrameSrc(null);
  };

  // Handle next button click - save to store and navigate
  const handleNext = () => {
    if (selectedFrameSrc) {
      // Log before updating store
      // console.log("Selected Artist:", selectedArtist);
      // console.log("Selected Frame:", selectedFrameSrc);

      // Update store
      setArtist(selectedArtist);
      setDreamFrame(selectedFrameSrc);

      logBookingStoreDetailed("Before Back Navigation");
      // Navigate to next page
      router.push("/checkout");
    }
  };

  // Handle back button click - clear store and navigate back
  const handleBack = () => {
    setDreamFrame(null);
    setDream(null);
    setArtist(null);
    logBookingStoreDetailed("After Back Button Click");
    router.push("/artistframe");
  };

  // Sidebar menu items configuration
  const menuItems = [
    {
      label: "KengNamPing",
      icon: <LayoutDashboard className="h-5 w-5" />,
      onClick: () => handleArtistChange("KengNamPing"),
      active: selectedArtist === "KengNamPing",
    },
    {
      label: "TleFirstOne",
      icon: <UserCog className="h-5 w-5" />,
      onClick: () => handleArtistChange("TleFirstOne"),
      active: selectedArtist === "TleFirstOne",
    },
    {
      label: "Khemjiraset",
      icon: <Camera className="h-5 w-5" />,
      onClick: () => handleArtistChange("Khemjiraset"),
      active: selectedArtist === "Khemjiraset",
    },
  ];

  return (
    <FixedLayout>
      <MainSidebar
        items={menuItems}
        footer={
          <div className="pb-4 flex flex-row gap-4 w-full">
            <Button
              onClick={handleBack}
              className="bg-white text-black border-2 border-black px-6 py-6 rounded-xl flex-1 hover:bg-gray-100 text-xl font-semibold"
            >
              <ArrowLeft className="mr-2 h-6 w-6" /> Back
            </Button>
          </div>
        }
      >
        {/* Main Content Area */}
        <div className="p-10 w-full h-full bg-white dark:bg-neutral-900 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden relative">
          
          {/* Next Button - Top Right Corner */}
          <div className="absolute top-10 right-10 z-10">
            <Button
              onClick={handleNext}
              disabled={!selectedFrameSrc}
              className="bg-black text-white px-16 py-8 rounded-xl hover:bg-gray-800 text-3xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              NEXT
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center h-full space-y-8">
            
            {/* Page Title */}
            <h1 className="text-4xl font-bold">Frame Selected: {selectedArtist}</h1>

            {/* Frame Gallery Grid */}
            <div className="flex flex-row gap-8 items-center justify-center w-full h-full overflow-x-auto pb-10 px-4">
              {currentFrames.length > 0 ? (
                currentFrames.map((frame, index) => {
                  const isLandscape = frame.type === "landscape";
                  const isSelected = selectedFrameSrc === frame.src;

                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedFrameSrc(frame.src)}
                      className={`
                        relative bg-gray-100 overflow-hidden shadow-xl 
                        transition-all cursor-pointer group shrink-0
                        ${isLandscape ? "w-[600px] h-[400px]" : "w-[400px] h-[600px]"}
                        ${isSelected 
                          ? "border-8 border-green-500 scale-95 ring-4 ring-offset-2 ring-green-200" 
                          : "border-4 border-transparent hover:border-black hover:scale-105"
                        }
                      `}
                    >
                      <Image
                        src={frame.src}
                        alt={`${selectedArtist} frame ${index + 1}`}
                        fill
                        className="object-contain transition-transform duration-500"
                      />
                    </div>
                  );
                })
              ) : (
                <div className="text-gray-400 text-xl">Coming Soon...</div>
              )}
            </div>
          </div>
        </div>
      </MainSidebar>
    </FixedLayout>
  );
}