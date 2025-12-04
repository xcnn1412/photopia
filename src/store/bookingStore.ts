// src/store/bookingStore.ts
import { create } from 'zustand'

// 1. กำหนด Type ของข้อมูลที่เราจะเก็บ
type BookingState = {
    
    selectedFrame: string | null; // เก็บชื่อกรอบที่เลือก
    selectedDream: string | null; // เก็บชื่อค่าย เช่น 'DOMUNDI', 'GMM'
    selectedArtist: string | null; // เก็บชื่อศิลปินที่เลือก
  
  // Actions (ฟังก์ชันสำหรับเปลี่ยนค่า)
  setFrame: (frame: string) => void;
  setDream: (dream: string) => void;
  setArtist: (artist: string) => void;
  reset: () => void; // เอาไว้ล้างค่าตอนหมดเวลา หรือกลับหน้าแรก
}

// 2. สร้าง Store
export const useBookingStore = create<BookingState>((set) => ({

  selectedFrame: null,
  selectedDream: null,
  selectedArtist: null,

  setFrame: (frame) => set({ selectedFrame: frame }), 
  setDream: (dream) => set({ selectedDream: dream }),
  setArtist: (artist) => set({ selectedArtist: artist }),
  
  // คืนค่าทั้งหมดเป็น null
  reset: () => set({ selectedFrame: null, selectedDream: null, selectedArtist: null }),

}))