// src/store/bookingStore.ts
import { create } from 'zustand'

// 1. กำหนด Type ของข้อมูลที่เราจะเก็บ
type BookingState = {
    
    selectedFrame: string | null; // เก็บชื่อกรอบที่เลือก
    selectedDream: string | null; // เก็บชื่อค่าย เช่น 'DOMUNDI', 'GMM'
    selectedArtist: string | null; // เก็บชื่อศิลปินที่เลือก
    selectedDreamFrame: string | null; // เก็บชื่อกรอบของค่ายที่เลือก
  
  // Actions (ฟังก์ชันสำหรับเปลี่ยนค่า)
  setFrame: (frame: string | null) => void;
  setDream: (dream: string | null) => void;
  setArtist: (artist: string | null) => void;
  setDreamFrame: (dreamframe: string | null) => void;
  reset: () => void; // เอาไว้ล้างค่าตอนหมดเวลา หรือกลับหน้าแรก
}

// 2. สร้าง Store
export const useBookingStore = create<BookingState>((set) => ({

  selectedFrame: null,
  selectedArtist: null,
  selectedDream: null,
  selectedDreamFrame: null,

  setFrame: (frame) => set({ selectedFrame: frame }), 
  setDream: (dream) => set({ selectedDream: dream }),
  setArtist: (artist) => set({ selectedArtist: artist }),
  setDreamFrame: (dreamframe) => set({ selectedDreamFrame: dreamframe }),
  
  // คืนค่าทั้งหมดเป็น null
  reset: () => set({ selectedFrame: null, selectedDream: null, selectedArtist: null }),

}))