// src/store/logreport.ts
import { useBookingStore } from "./bookingStore";

/**
 * 🔍 Debug Logger สำหรับแสดงค่าทั้งหมดใน Booking Store
 * ใช้ในโหมด Development เท่านั้น
 * 
 * @param label - ชื่อที่จะแสดงใน log (เช่น "Before Navigation", "After Click")
 */
export const logBookingStore = (label: string = "Booking Store") => {
  // ตรวจสอบว่าอยู่ในโหมด development หรือไม่
  if (process.env.NODE_ENV !== "development") {
    return; // ไม่ log ในโหมด production
  }

  const state = useBookingStore.getState();

  console.group(`📊 ${label}`);
  console.log("selectedFrame:", state.selectedFrame);
  console.log("selectedDream:", state.selectedDream);
  console.log("selectedArtist:", state.selectedArtist);
  console.log("selectedDreamFrame:", state.selectedDreamFrame);
  console.groupEnd();
};

/**
 * 🎨 แสดงค่าแบบสวยงามพร้อมสี
 */
export const logBookingStoreDetailed = (label: string = "Booking Store Details") => {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const state = useBookingStore.getState();

  console.log(
    `%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    "color: #4F46E5; font-weight: bold;"
  );
  console.log(
    `%c📊 ${label}`,
    "color: #4F46E5; font-size: 16px; font-weight: bold;"
  );
  console.log(
    `%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    "color: #4F46E5; font-weight: bold;"
  );

  console.log(
    `%c🎞️  Frame: %c${state.selectedFrame || "null"}`,
    "color: #6366F1; font-weight: bold;",
    state.selectedFrame ? "color: #10B981; font-weight: bold;" : "color: #EF4444;"
  );

  console.log(
    `%c💭 Dream: %c${state.selectedDream || "null"}`,
    "color: #6366F1; font-weight: bold;",
    state.selectedDream ? "color: #10B981; font-weight: bold;" : "color: #EF4444;"
  );

  console.log(
    `%c🎭 Artist: %c${state.selectedArtist || "null"}`,
    "color: #6366F1; font-weight: bold;",
    state.selectedArtist ? "color: #10B981; font-weight: bold;" : "color: #EF4444;"
  );

  console.log(
    `%c🖼️  Dream Frame: %c${state.selectedDreamFrame || "null"}`,
    "color: #6366F1; font-weight: bold;",
    state.selectedDreamFrame ? "color: #10B981; font-weight: bold;" : "color: #EF4444;"
  );

  console.log(
    `%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    "color: #4F46E5; font-weight: bold;"
  );
};

/**
 * 🚨 แสดงเฉพาะค่าที่มีการเปลี่ยนแปลง
 */
export const logBookingStoreChanges = (
  before: ReturnType<typeof useBookingStore.getState>,
  after: ReturnType<typeof useBookingStore.getState>,
  label: string = "Store Changes"
) => {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const changes: string[] = [];

  if (before.selectedFrame !== after.selectedFrame) {
    changes.push(`Frame: ${before.selectedFrame} → ${after.selectedFrame}`);
  }
  if (before.selectedDream !== after.selectedDream) {
    changes.push(`Dream: ${before.selectedDream} → ${after.selectedDream}`);
  }
  if (before.selectedArtist !== after.selectedArtist) {
    changes.push(`Artist: ${before.selectedArtist} → ${after.selectedArtist}`);
  }
  if (before.selectedDreamFrame !== after.selectedDreamFrame) {
    changes.push(`DreamFrame: ${before.selectedDreamFrame} → ${after.selectedDreamFrame}`);
  }

  if (changes.length > 0) {
    console.group(`🔄 ${label}`);
    changes.forEach((change) => console.log(`  • ${change}`));
    console.groupEnd();
  } else {
    console.log(`✅ ${label}: No changes detected`);
  }
};
