
import { Minimize2, Sparkles, Crown, Compass } from "lucide-react";
import type { GalleryTemplate } from "@/types/gallery";

export const templates: GalleryTemplate[] = [
  {
    id: "minimal-essence",
    name: "Minimal",
    style: "minimal",
    description: "Clean lines, pure thoughts",
    backgroundClass: "bg-white shadow-[inset_0_0_30px_rgba(0,0,0,0.03)]",
    icon: Minimize2,
    poem: "White space speaks softly\nThoughts float in clarity here\nPeace finds its true form",
    author: "The Minimalist",
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
    description: "Where reality dances with dreams",
    backgroundClass: "bg-gradient-to-br from-[#FFB5C5] via-[#FAF3E0] to-[#98D8D8] shadow-[inset_0_0_60px_rgba(255,181,197,0.2)]",
    icon: Sparkles,
    poem: "Through twilight's soft veil\nMagic whispers ancient tales\nDreams take wing and soar",
    author: "The Dreamer",
    layout: [
      "grid-cols-3 gap-4",
      "col-span-2 aspect-[21/9] bg-white/20 shadow-inner backdrop-blur-sm",
      "aspect-[3/4] bg-white/20 shadow-inner backdrop-blur-sm",
      "col-span-3 aspect-[3/1] bg-white/20 shadow-inner backdrop-blur-sm"
    ]
  },
  {
    id: "exclusive-gallery",
    name: "Exclusive Gallery",
    style: "exclusive",
    description: "Curated by Virgil Abloh",
    backgroundClass: "bg-black text-white shadow-[inset_0_0_60px_rgba(255,255,255,0.1)]",
    icon: Compass,
    poem: "Bold visions unfold\nBreaking boundaries with grace\nArt meets street design",
    author: "Virgil Abloh",
    layout: [
      "grid-cols-2 gap-8",
      "aspect-[16/9] bg-white/10 shadow-inner backdrop-blur-sm",
      "aspect-[1/1] bg-white/10 shadow-inner backdrop-blur-sm",
      "col-span-2 aspect-[21/9] bg-white/10 shadow-inner backdrop-blur-sm"
    ]
  }
];
