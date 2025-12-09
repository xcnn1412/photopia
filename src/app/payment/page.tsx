"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FixedLayout from "@/components/FixedLayout";

export default function Payment() {
    const router = useRouter();

    const handleBack = () => {
        router.push('/checkout');
    };

    const handlePromptpay = () => {
        router.push('/promptpay');
    };

    return (
        <FixedLayout>
            <main className="relative w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-16">
                
                {/* Back Button */}
                <div className="absolute top-10 left-10">
                    <Button
                        className="bg-slate-700 text-white px-12 py-6 rounded-xl hover:bg-slate-600 text-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                        onClick={handleBack}
                    >
                        Back
                    </Button>
                </div>

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="font-bold text-5xl text-slate-800">Select Payment Method</h1>
                    <p className="mt-5 font-light text-3xl text-slate-600">เลือกวิธีการชำระเงิน</p>
                </div>

                {/* Primary Payment Methods */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <Button 
                        className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-500 hover:to-blue-600 text-2xl font-semibold w-80 h-80 flex flex-col items-center justify-center gap-2 shadow-xl"
                        onClick={handlePromptpay}
                    >
                        <span>PROMPTPAY</span>
                        <Image src="/assets/pp-icon.png" alt="PromptPay" width={140} height={140} />
                    </Button>

                    <Button className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl hover:from-indigo-500 hover:to-indigo-600 text-2xl font-semibold w-80 h-80 flex items-center justify-center shadow-xl hover:shadow-2xl">
                        Visa/MasterCard
                    </Button>
                </div>

                {/* Secondary Payment Methods */}
                <div className="grid grid-cols-3 gap-6">
                    <Button className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white rounded-2xl hover:from-cyan-500 hover:to-cyan-600 text-xl font-semibold w-64 h-64 flex items-center justify-center shadow-xl hover:shadow-2xl">
                        WeChat Pay
                    </Button>

                    <Button className="bg-gradient-to-br from-sky-600 to-sky-700 text-white rounded-2xl hover:from-sky-500 hover:to-sky-600 text-xl font-semibold w-64 h-64 flex items-center justify-center shadow-xl hover:shadow-2xl">
                        Alipay
                    </Button>

                    <Button className="bg-gradient-to-br from-violet-600 to-violet-700 text-white rounded-2xl hover:from-violet-500 hover:to-violet-600 text-xl font-semibold w-64 h-64 flex items-center justify-center shadow-xl hover:shadow-2xl">
                        Coupon
                    </Button>
                </div>

            </main>
        </FixedLayout>
    );
}