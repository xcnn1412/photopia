"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FixedLayout from "@/components/FixedLayout";

import { useBookingStore } from "@/store/bookingStore"
import { logBookingStoreDetailed } from "@/store/logreport";

export default function Page2() {
  const router = useRouter();

  const setFrame = useBookingStore( (state) => state.setFrame );
  const reset = useBookingStore( (state) => state.reset );

  const handleBack = () =>{
    console.log("Clearing state...");
    reset();
    router.push('/');
  };

  const handleSelectFrame = ( frameType : string , destinationPath: string ) => {
    console.log("Selected Frame: ", frameType);

    if ( setFrame ) {
      setFrame( frameType);
      router.push( destinationPath );
    }
  }

  return (
    <FixedLayout>
      <main className="relative w-full h-full bg-white flex flex-col items-center justify-center p-16 border-2 border-gray-200">
        
        {/* Back Button */}
        <div className="absolute top-10 left-10">
          <Button
            className="bg-black text-white px-12 py-6 rounded-xl 
            hover:bg-gray-800 text-xl font-semibold"
            onClick={handleBack}
          >
            Back
          </Button>
        </div>

        {/* Timer Display */}
        <div className="absolute top-10 right-10">
          <p className="text-4xl text-gray-600 font-medium">5 Sec.</p>
        </div>

        {/* Logo Display */}
        <Image
          src="/assets/logo-photopia-crop.png"
          alt="Company Logo"
          width={800}
          height={450}
          className="relative w-250 mt-25"
          style={{ height: 'auto' }} // ให้สูงเป็นสัดส่วนอัตโนมัติ
        />

        <div className="relative flex flex-row space-x-8 mt-16">

          {/* artistframe */}
          <Button
            className="bg-white border border-black text-black px-32 py-[200px] rounded-[2rem] mt-10 
            hover:bg-black hover:text-white text-6xl font-bold"
            onClick={() => {
              logBookingStoreDetailed("Before Back Navigation");
              handleSelectFrame('artistframe', '/artistframe');
              logBookingStoreDetailed("Before Back Navigation");
            }}
          >
            ARTIST FRAME
          </Button>

          {/* normalframe */}
          <Button
            className="bg-white border border-black text-black px-32 py-[200px] rounded-[2rem] mt-10 
            hover:bg-black hover:text-white text-6xl font-bold"
            onClick={() => handleSelectFrame('normalframe', '/normalframe')}
          >
            NORMAL FRAME
          </Button>
        </div>

      </main>
    </FixedLayout>
  );
}