// "use client";
// import { useState } from "react";
// import SidebarDemo from "@/components/SidebarDemo"; // import component ที่แก้แล้ว
// import { LayoutDashboard, UserCog, Settings } from "lucide-react";
// import FixedLayout from "@/components/FixedLayout"; // สมมติว่ายังใช้อยู่

// export default function Page() {
//   const [selectedArtist, setSelectedArtist] = useState("KengNamPing");

//   // เตรียมข้อมูลที่จะส่งเข้าไป (Data)
//   const artistLinks = [
//     {
//       label: "KengNamPing",
//       icon: <LayoutDashboard className="h-5 w-5 text-neutral-700" />,
//       onClick: () => setSelectedArtist("KengNamPing"), // กดแล้วเปลี่ยน State
//     },
//     {
//       label: "TleFirstOne",
//       icon: <UserCog className="h-5 w-5 text-neutral-700" />,
//       onClick: () => setSelectedArtist("TleFirstOne"),
//     },
//     {
//       label: "Khjira Set",
//       icon: <Settings className="h-5 w-5 text-neutral-700" />,
//       onClick: () => setSelectedArtist("Khjira Set"),
//     }
//   ];

//   return (
//     <FixedLayout>
//       {/* ส่งข้อมูลเข้าไปผ่าน prop 'links' */}
//       <SidebarDemo links={artistLinks}>
        
//         {/* ส่งเนื้อหา Dashboard เข้าไปผ่าน children */}
//         <div className="flex flex-1 p-10 bg-white">
//            <div className="border-2 border-dashed border-gray-300 w-full h-full flex items-center justify-center">
//               <h1 className="text-4xl">
//                  กำลังแสดงผล: {selectedArtist}
//               </h1>
//            </div>
//         </div>

//       </SidebarDemo>
//     </FixedLayout>
//   );
// }