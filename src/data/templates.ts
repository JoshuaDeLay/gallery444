
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
    backgroundClass: "bg-gradient-to-br from-[#FFB5C5] via-[#FAF3E0] to-[#98D8D8] shadow-[inset_0_0_60px_rgba(255,181,197,0.2)]",
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
    backgroundClass: "bg-gradient-to-br from-[#9b87f5] via-[#F1F0FB] to-[#e7f0fd] shadow-[inset_0_0_60px_rgba(155,135,245,0.2)]",
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
    backgroundClass: "bg-gradient-to-br from-[#1A1F2C] via-[#6E59A5] to-[#9b87f5] shadow-[inset_0_0_60px_rgba(155,135,245,0.2)]",
    icon: Box,
    layout: [
      "grid-cols-6 gap-4",
      "col-span-4 aspect-[16/9] bg-black/20 shadow-inner backdrop-blur-sm",
      "col-span-2 aspect-square bg-black/20 shadow-inner backdrop-blur-sm",
      "col-span-6 aspect-[21/9] bg-black/20 shadow-inner backdrop-blur-sm"
    ]
  }
];
