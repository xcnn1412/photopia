"use client";

import { useBookingStore } from "@/store/bookingStore";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FixedLayout from "@/components/FixedLayout";

// ข้อมูลจำลอง (Mock Data) ของศิลปินแต่ละค่าย
const ARTIST_DATA = {
  "DOMUNDI TV": [
    { id: '1', name: 'Zee & NuNew', image: '/assets/artists/zee-nunew.png' }, // เปลี่ยน path รูปให้ตรงกับที่มีจริง
    { id: '2', name: 'Max & Nat', image: '/assets/artists/max-nat.png' },
    { id: '3', name: 'Tutor & Yim', image: '/assets/artists/tutor-yim.png' },
    // เพิ่มคนอื่นๆ ...
  ],
  "GMM TV": [
    { id: 'g1', name: 'Gemini & Fourth', image: '/assets/artists/gemini-fourth.png' },
    { id: 'g2', name: 'Pond & Phuwin', image: '/assets/artists/pond-phuwin.png' },
  ],
  "TIA51": [
    { id: 't1', name: 'Artist TIA', image: '/assets/artists/tia-artist.png' },
  ]
};

export default function SelectArtistsPage() {
  const router = useRouter();
  
  // 1. ดึงค่าค่ายที่เลือก และตัวเซ็ตค่าศิลปิน
  const selectedDream = useBookingStore((state) => state.selectedDream);
  const setArtist = useBookingStore((state) => state.setArtist);
  const reset = useBookingStore((state) => state.reset);

  // ดึงรายชื่อศิลปินตามค่ายที่เลือก (ถ้าไม่มีให้เป็น array ว่าง)
  const currentArtists = ARTIST_DATA[selectedDream as keyof typeof ARTIST_DATA] || [];

  const handleBack = () => {
    // ย้อนกลับไปหน้าเลือกค่าย (ไม่ต้อง reset dream ก็ได้ หรือจะ reset ก็แล้วแต่ flow)
    // แต่ปกติถ้าย้อนกลับเฉยๆ มักไม่ reset เพื่อให้ user เลือกใหม่ได้สะดวก
    router.back(); 
  };

  const handleSelectArtist = (artistName: string) => {
    console.log("Selected Artist:", artistName);
    setArtist(artistName); // จำว่าเลือกใคร
    router.push('/payment'); // ไปหน้าจ่ายเงิน (หรือหน้าเลือกเฟรมย่อยถ้ามี)
  };

  return (
    <FixedLayout>
      <main className="relative w-full h-full bg-white flex flex-col items-center justify-center p-10">
        
        {/* Back Button */}
        <div className="absolute top-10 left-10">
          <Button 
             className="bg-black text-white px-10 py-4 rounded-xl text-xl font-bold"
             onClick={handleBack}
          >
            Back
          </Button>
        </div>

        {/* Timer (ถ้ามี) */}
        <div className="absolute top-10 right-10">
          <p className="text-4xl text-gray-600 font-medium">40 Sec.</p>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-10 mt-10">
            Select Artist ({selectedDream})
        </h1>

        {/* Grid แสดงรายชื่อศิลปิน */}
        <div className="grid grid-cols-3 gap-8 w-full max-w-6xl overflow-y-auto max-h-[60vh] p-4">
            {currentArtists.length > 0 ? (
                currentArtists.map((artist) => (
                    <div key={artist.id} className="flex flex-col items-center gap-4">
                        {/* การ์ดรูปศิลปิน */}
                        <button 
                            className="relative w-[250px] h-[350px] bg-gray-100 rounded-2xl overflow-hidden border-4 border-transparent hover:border-blue-500 transition-all shadow-lg"
                            onClick={() => handleSelectArtist(artist.name)}
                        >
                            {/* รูปศิลปิน (ถ้ายังไม่มีรูปจริง ให้ใช้ div สีไปก่อน) */}
                            {/* <Image src={artist.image} alt={artist.name} fill className="object-cover" /> */}
                            
                            {/* Placeholder ชั่วคราว */}
                            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-2xl">
                                {artist.name}
                            </div>
                        </button>
                        <p className="text-2xl font-bold">{artist.name}</p>
                    </div>
                ))
            ) : (
                <p className="text-2xl text-red-500 col-span-3 text-center">
                    No artists found for {selectedDream}
                </p>
            )}
        </div>

      </main>
    </FixedLayout>
  );
}