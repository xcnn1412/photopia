"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FixedLayout from "@/components/FixedLayout";

export default function Page2() {
  const router = useRouter();

  return (
    <FixedLayout>
      <main className="relative w-full h-full bg-white flex flex-col items-center justify-center p-16 border-2 border-gray-200">
        
        {/* Back Button */}
        <div className="absolute top-10 left-10">
          <Button
            className="bg-black text-white px-12 py-6 rounded-xl hover:bg-gray-800 text-xl font-semibold"
            onClick={() => router.push('/')}
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
          src="/assets/Asset 1-8.png" 
          alt="Company Logo" 
          width={800}
          height={800}
          className="logo"
        />

        <div className="relative flex-row space-x-8 mt-16">
          <Button
            className="bg-white border border-black text-black px-32 py-50 rounded-4xl mt-10 hover:bg-black hover:text-white text-6xl font-bold"
            onClick={() => router.push('/artistframe')}
          >
            ARTIST FRAME
          </Button>

          <Button
            className="bg-white border border-black text-black px-32 py-50 rounded-4xl mt-10 hover:bg-black hover:text-white text-6xl font-bold"
          >
            NORMAL FRAME
          </Button>
        </div>

      </main>
    </FixedLayout>
  );
}