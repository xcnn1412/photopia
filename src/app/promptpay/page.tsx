"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FixedLayout from "@/components/FixedLayout";

import { useBookingStore } from "@/store/bookingStore"
import { logBookingStoreDetailed } from "@/store/logreport";

export default function PaymentPage() {

    const router = useRouter();

    const handleBack = () => {
        router.push('/payment');
    }

    const handleNext = () => {
        router.push('/staticloading')
    }

    return(
        <FixedLayout>
            <main className="relative w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-16">
            
            <div className="absolute top-10 left-10">
                    <Button
                        className="bg-slate-700 text-white px-12 py-6 rounded-xl hover:bg-slate-600 text-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                        onClick={handleBack}
                    >
                        Back
                    </Button>
            </div>

            <div className="text-center mb-12">
                    <h1 className="font-bold text-5xl text-slate-800">Scan QR Code on Bank App Payment</h1>
                    <p className="mt-5 font-light text-3xl text-slate-600">ชำระเงินผ่านคิวอาร์โค้ด</p>
            </div>

            <Button 
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-500 hover:to-blue-600 text-2xl font-semibold w-80 h-80 flex flex-col items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-blue-400"
            onClick={handleNext}
            >

            <Image src="/assets/qrcode-mockup.png" alt="PromptPay" width={300} height={300} />

            </Button>

            <p className="mt-5 font-light text-3xl text-slate-600">.... หากชำระแล้วกรุณารอสักครู่ .....</p>

            </main>
        </FixedLayout>
    );
}