"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FixedLayout from "@/components/FixedLayout";
import { Button } from "@/components/ui/button";
import { h1 } from "framer-motion/client";

import { useBookingStore } from "@/store/bookingStore";

export default function SnapPage() {
    return(

        <h1>QR Code Page</h1>
    );
}