import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Minimize2, Box, Frame, Layers, HeartHandshake, Palette, Sparkles, Sun, Waves, Trees, Cloud, Sunrise } from "lucide-react";
import { useState } from "react";

export type TemplateStyle = "minimal" | "warm" | "classic" | "modern" | "vibrant" | "dreamy" | "soft" | "bright" | "river" | "forest" | "meadow" | "sunrise";

interface GalleryTemplate {
  id: string;
  name: string;
  style: TemplateStyle;
  description: string;
  backgroundClass: string;
  icon: React.ComponentType<any>;
  poem?: string;
  author?: string;
  layout: string[];
}

const templates: GalleryTemplate[] = [
  {
    id: "warm-embrace",
    name: "Warm Embrace",
    style: "warm",
    description: "A cozy space for your creative expressions",
    backgroundClass: "bg-gradient-to-r from-[#ee9ca7] to-[#ffdde1]",
    icon: HeartHandshake,
    poem: "In gentle moments\nWe find our truest stories\nShared with loving care",
    author: "Heart & Soul",
    layout: [
      "grid-cols-1 gap-8",
      "aspect-[3/4] bg-white/20 shadow-inner",
      "aspect-square bg-white/20 shadow-inner",
      "aspect-[4/3] bg-white/20 shadow-inner"
    ]
  },
  {
    id: "vibrant-dreams",
    name: "Vibrant Dreams",
    style: "vibrant",
    description: "Where colors dance with imagination",
    backgroundClass: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
    icon: Palette,
    poem: "Colors bloom and shine\nPainting stories in the light\nDreams take wing and soar",
    author: "Color Poet",
    layout: [
      "grid-cols-2 gap-4",
      "col-span-2 aspect-[2/1] bg-white/20",
      "aspect-square bg-white/20",
      "aspect-square bg-white/20"
    ]
  },
  {
    id: "soft-whispers",
    name: "Soft Whispers",
    style: "soft",
    description: "A gentle canvas for delicate memories",
    backgroundClass: "bg-gradient-to-r from-[#ffc3a0] to-[#ffafbd]",
    icon: Sparkles,
    poem: "Whispered memories\nFloat like petals in the wind\nGently touching hearts",
    author: "Gentle Voice",
    layout: [
      "grid-cols-3 gap-4",
      "col-span-2 aspect-[2/1] bg-white/20 shadow-sm",
      "aspect-[3/4] bg-white/20 shadow-sm",
      "col-span-3 aspect-[3/1] bg-white/20 shadow-sm"
    ]
  },
  {
    id: "bright-day",
    name: "Bright Day",
    style: "bright",
    description: "Celebrate the joy of the present moment",
    backgroundClass: "bg-gradient-to-br from-[#accbee] to-[#e7f0fd]",
    icon: Sun,
    poem: "Morning light dances\nJoy sparkles in every ray\nNew stories unfold",
    author: "Light Seeker",
    layout: [
      "grid-cols-12 gap-4",
      "col-span-8 aspect-video bg-white/30",
      "col-span-4 aspect-square bg-white/30",
      "col-span-12 aspect-[4/1] bg-white/30"
    ]
  },
  {
    id: "river-flow",
    name: "River Flow",
    style: "river",
    description: "Let your creativity flow freely",
    backgroundClass: "bg-gradient-to-r from-[#accbee] to-[#e7f0fd]",
    icon: Waves,
    poem: "Water flows gently\nOver ancient river stones\nTime drifts endlessly",
    author: "River Sage",
    layout: [
      "grid-cols-3 gap-4",
      "col-span-2 aspect-[21/9] bg-white/30 shadow-inner",
      "aspect-[3/4] bg-white/30 shadow-inner",
      "col-span-3 aspect-[3/1] bg-white/30 shadow-inner"
    ]
  },
  {
    id: "forest-whispers",
    name: "Forest Whispers",
    style: "forest",
    description: "Find peace in nature's embrace",
    backgroundClass: "bg-gradient-to-br from-[#c1c161] to-[#d4d4b1]",
    icon: Trees,
    poem: "Tall trees reaching high\nWhispering ancient stories\nNature's embrace holds",
    author: "Woodland Voice",
    layout: [
      "grid-cols-12 gap-3",
      "col-span-8 aspect-video bg-black/5",
      "col-span-4 aspect-square bg-black/5",
      "col-span-12 aspect-[4/1] bg-black/5"
    ]
  },
  {
    id: "meadow-dreams",
    name: "Meadow Dreams",
    style: "meadow",
    description: "Where wildflowers dance with clouds",
    backgroundClass: "bg-gradient-to-t from-[#e6b980] to-[#eacda3]",
    icon: Cloud,
    poem: "Summer meadow sways\nWildflowers dance with the breeze\nNature's lullaby",
    author: "Field Dreamer",
    layout: [
      "grid-cols-2 gap-6",
      "aspect-[16/9] bg-white/20",
      "aspect-square bg-white/20",
      "col-span-2 aspect-[2/1] bg-white/20"
    ]
  },
  {
    id: "sunrise-stories",
    name: "Sunrise Stories",
    style: "sunrise",
    description: "Begin each day with fresh inspiration",
    backgroundClass: "bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3]",
    icon: Sunrise,
    poem: "New day awakens\nFresh stories wait to unfold\nBeginnings bloom bright",
    author: "Dawn Dreamer",
    layout: [
      "grid-cols-6 gap-2",
      "col-span-4 aspect-[2/1] bg-white/40 shadow-sm",
      "col-span-2 aspect-square bg-white/40 shadow-sm",
      "col-span-6 aspect-[3/1] bg-white/40 shadow-sm"
    ]
  }
];

interface GalleryTemplatesProps {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

export const GalleryTemplates = ({
  selectedTemplate,
  onSelectTemplate,
}: GalleryTemplatesProps) => {
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null);

  const handleTemplateClick = (templateId: string) => {
    if (expandedTemplate === templateId) {
      setExpandedTemplate(null);
    } else {
      setExpandedTemplate(templateId);
      onSelectTemplate(templateId);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {templates.map((template) => {
        const Icon = template.icon;
        const isExpanded = expandedTemplate === template.id;
        const isVisible = !expandedTemplate || expandedTemplate === template.id;
        
        return (
          <Card
            key={template.id}
            className={cn(
              "cursor-pointer transition-all duration-500",
              "hover:ring-1 hover:ring-gallery-warm",
              template.backgroundClass,
              isExpanded ? 
                "col-span-2 md:col-span-4 ring-2 ring-gallery-accent scale-100" : 
                "hover:scale-105",
              !isVisible && "hidden",
              "transform-gpu"
            )}
            onClick={() => handleTemplateClick(template.id)}
          >
            <div className={cn(
              "p-4",
              isExpanded ? "p-4" : "p-2",
              "transition-all duration-500"
            )}>
              <div className="flex items-center gap-2 mb-2">
                <Icon className={cn(
                  "transition-all duration-500",
                  isExpanded ? "h-5 w-5" : "h-3 w-3"
                )} />
                <h3 className={cn(
                  "font-serif transition-all duration-500",
                  isExpanded ? "text-lg" : "text-xs"
                )}>{template.name}</h3>
              </div>
              
              {isExpanded && (
                <div className="animate-fade-up">
                  <div className="prose prose-sm mt-2">
                    <p className="text-xs text-gallery-warm font-serif italic">
                      "{template.poem}"
                    </p>
                    <p className="text-xs text-gallery-warm text-right">
                      — {template.author}
                    </p>
                  </div>

                  <div className={cn(
                    "mt-4 grid gap-2",
                    template.layout[0]
                  )}>
                    {template.layout.slice(1).map((layoutClass, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          layoutClass,
                          "transition-all duration-300 hover:opacity-80"
                        )}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-2">
                <span className={cn(
                  "inline-block px-2 py-0.5 text-xs bg-white/80 rounded",
                  "transition-all duration-500",
                  isExpanded ? "opacity-100" : "opacity-70"
                )}>
                  {template.style}
                </span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
