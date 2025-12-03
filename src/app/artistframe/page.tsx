"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FixedLayout from "@/components/FixedLayout";

export default function ArtistFramePage() {
  const router = useRouter();

  return (
    <FixedLayout>
      <main className="relative w-full h-full bg-white flex flex-col items-center justify-center p-16 border-2 border-gray-200">
        
        {/* Back Button */}
        <div className="absolute top-10 left-10">
          <Button
            className="bg-black text-white px-12 py-6 rounded-xl hover:bg-gray-800 text-xl font-semibold"
            onClick={() => router.push('/page-2')}
          >
            Back
          </Button>
        </div>

        {/* Timer Display */}
        <div className="absolute top-10 right-10">
          <p className="text-4xl text-gray-600 font-medium">45 Sec.</p>
        </div>

        <h1 className="text-5xl font-bold">Select Your Dream</h1>

        <div className="flex flex-row space-x-8 mt-16">
          
          <div className="flex flex-col items-center space-y-1">
            <Image 
              src="/assets/DOMUNDI LOGO.png" 
              alt="Company Logo" 
              width={250}
              height={250}
              className="logo"
            />
            <Button
              className="bg-white text-black border-2 border-black px-12 py-6 rounded-xl hover:bg-gray-800 hover:text-white text-xl font-semibold"
              onClick={() => router.push('/domunditv')}
            >
              DOMUNDI TV
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <Image 
              src="/assets/GMM TV LOGO.png" 
              alt="Company Logo" 
              width={250}
              height={250}
              className="logo"
            />
            <Button
              className="bg-white text-black border-2 border-black px-12 py-6 rounded-xl hover:bg-gray-800 hover:text-white text-xl font-semibold"
              onClick={() => router.push('/page-2')}
            >
              GMM TV
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <Image 
              src="/assets/tia51 LOGO.png" 
              alt="Company Logo" 
              width={250}
              height={250}
              className="logo"
            />
            <Button
              className="bg-white text-black border-2 border-black px-12 py-6 rounded-xl hover:bg-gray-800 hover:text-white text-xl font-semibold"
              onClick={() => router.push('/page-2')}
            >
              TIA51
            </Button>
          </div>
          
        </div>

      </main>

      <footer>
        <Image 
          src="/assets/tia51 LOGO.png" 
          alt="Company Logo" 
          width={250} 
          height={250}
          className="logo"
        />
      </footer>
    </FixedLayout>
  );
}