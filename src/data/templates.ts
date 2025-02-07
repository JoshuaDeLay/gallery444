
import { Minimize2, GalleryHorizontal, GalleryVertical, Box } from "lucide-react";
import type { GalleryTemplate } from "@/types/gallery";

export const templates: GalleryTemplate[] = [
  {
    id: "minimal-essence",
    name: "Minimal",
    style: "minimal",
    description: "",
    backgroundClass: "bg-white shadow-[inset_0_0_30px_rgba(0,0,0,0.03)]",
    icon: Minimize2,
    layout: [
      "grid-cols-12 gap-6",
      "col-span-8 aspect-video bg-gray-50",
      "col-span-4 aspect-square bg-gray-50",
      "col-span-12 aspect-[4/1] bg-gray-50"
    ]
  },
  {
    id: "magical-whispers",
    name: "Abstract",
    style: "magical",
    description: "",
    backgroundClass: "bg-gradient-to-br from-[#E5DEFF] via-[#F1F0FB] to-[#D3E4FD] shadow-[inset_0_0_60px_rgba(211,228,253,0.2)]",
    icon: GalleryHorizontal,
    layout: [
      "grid-cols-3 gap-4",
      "col-span-2 aspect-[21/9] bg-white/20 shadow-inner backdrop-blur-sm",
      "aspect-[3/4] bg-white/20 shadow-inner backdrop-blur-sm",
      "col-span-3 aspect-[3/1] bg-white/20 shadow-inner backdrop-blur-sm"
    ]
  },
  {
    id: "digital-artistry",
    name: "Portfolio",
    style: "magical",
    description: "",
    backgroundClass: "bg-gradient-to-br from-[#FDE1D3] via-[#FEF7CD] to-[#F2FCE2] shadow-[inset_0_0_60px_rgba(253,225,211,0.2)]",
    icon: GalleryVertical,
    layout: [
      "grid-cols-6 gap-4",
      "col-span-4 aspect-[16/9] bg-white/20 shadow-inner backdrop-blur-sm",
      "col-span-2 aspect-square bg-white/20 shadow-inner backdrop-blur-sm",
      "col-span-6 aspect-[21/9] bg-white/20 shadow-inner backdrop-blur-sm"
    ]
  },
  {
    id: "3d-gallery",
    name: "3D Gallery",
    style: "magical",
    description: "",
    backgroundClass: "bg-gradient-to-br from-[#F1F0FB] via-[#E5DEFF] to-[#FFDEE2] shadow-[inset_0_0_60px_rgba(229,222,255,0.2)]",
    icon: Box,
    layout: [
      "grid-cols-6 gap-4",
      "col-span-4 aspect-[16/9] bg-black/20 shadow-inner backdrop-blur-sm",
      "col-span-2 aspect-square bg-black/20 shadow-inner backdrop-blur-sm",
      "col-span-6 aspect-[21/9] bg-black/20 shadow-inner backdrop-blur-sm"
    ]
  }
];
