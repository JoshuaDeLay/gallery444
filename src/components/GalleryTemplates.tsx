
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Minimize2, Box, Frame, Layers, HeartHandshake, Palette, Sparkles, Sun, Waves, Trees, Cloud, Sunrise, Cpu, Binary } from "lucide-react";
import { useState } from "react";

export type TemplateStyle = "minimal" | "warm" | "classic" | "modern" | "vibrant" | "dreamy" | "soft" | "bright" | "river" | "forest" | "meadow" | "sunrise" | "cyber";

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
    backgroundClass: "bg-gradient-to-br from-[#FFB5C5] to-[#FAF3E0] shadow-[inset_0_0_40px_rgba(139,69,19,0.1)]",
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
    backgroundClass: "bg-gradient-to-br from-[#98D8D8] to-[#FFB5C5] shadow-[inset_0_0_40px_rgba(255,255,255,0.2)]",
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
    backgroundClass: "bg-gradient-to-r from-[#FAF3E0] to-[#FFB5C5] shadow-[inset_0_0_30px_rgba(152,216,216,0.2)]",
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
    backgroundClass: "bg-gradient-to-br from-[#FFB5C5] via-[#FAF3E0] to-[#98D8D8]",
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
    backgroundClass: "bg-gradient-to-r from-[#98D8D8] to-[#FAF3E0] shadow-[inset_0_0_50px_rgba(255,181,197,0.2)]",
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
    backgroundClass: "bg-gradient-to-br from-[#98D8D8] via-[#FAF3E0] to-[#FFB5C5] shadow-[inset_0_0_60px_rgba(0,100,0,0.1)]",
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
    backgroundClass: "bg-gradient-to-t from-[#FAF3E0] to-[#98D8D8] shadow-[inset_0_0_40px_rgba(255,181,197,0.15)]",
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
    backgroundClass: "bg-gradient-to-br from-[#FFB5C5] via-[#FAF3E0] to-[#98D8D8] shadow-[inset_0_0_50px_rgba(255,223,186,0.3)]",
    icon: Sunrise,
    poem: "New day awakens\nFresh stories wait to unfold\nBeginnings bloom bright",
    author: "Dawn Dreamer",
    layout: [
      "grid-cols-6 gap-2",
      "col-span-4 aspect-[2/1] bg-white/40 shadow-sm",
      "col-span-2 aspect-square bg-white/40 shadow-sm",
      "col-span-6 aspect-[3/1] bg-white/40 shadow-sm"
    ]
  },
  {
    id: "cyber-dreams",
    name: "Cyber Dreams",
    style: "cyber",
    description: "Digital echoes in the neural network",
    backgroundClass: "bg-gradient-to-br from-[#98D8D8] to-[#243949] shadow-[inset_0_0_30px_rgba(0,255,255,0.1)]",
    icon: Cpu,
    poem: "Through circuits deep\nDigital dreams take their flight\nNeon thoughts ignite",
    author: "Neural Poet v2.0",
    layout: [
      "grid-cols-12 gap-3",
      "col-span-8 aspect-video bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.15)]",
      "col-span-4 aspect-square bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.15)]",
      "col-span-12 aspect-[4/1] bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.15)]"
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
              "relative overflow-hidden cursor-pointer transition-all duration-500 group",
              "hover:ring-1 hover:ring-murakami-pink/30",
              template.backgroundClass,
              isExpanded ? 
                "col-span-2 md:col-span-4 ring-2 ring-murakami-teal/30 scale-100" : 
                "hover:scale-105",
              !isVisible && "hidden",
              "transform-gpu"
            )}
            onClick={() => handleTemplateClick(template.id)}
          >
            <div 
              className={cn(
                "relative z-10 p-4",
                isExpanded ? "p-6" : "p-3",
                "transition-all duration-500"
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className={cn(
                  "transition-all duration-500",
                  isExpanded ? "h-6 w-6" : "h-4 w-4",
                  "opacity-80"
                )} />
                <h3 className={cn(
                  "font-serif transition-all duration-500",
                  isExpanded ? "text-xl" : "text-sm"
                )}>{template.name}</h3>
              </div>
              
              {isExpanded && (
                <div className="animate-fade-up">
                  <div className="prose prose-sm mt-4">
                    <p className="text-sm opacity-90 font-serif italic leading-relaxed">
                      "{template.poem}"
                    </p>
                    <p className="text-xs opacity-70 text-right mt-1">
                      — {template.author}
                    </p>
                  </div>

                  <div className={cn(
                    "mt-6 grid gap-3",
                    template.layout[0]
                  )}>
                    {template.layout.slice(1).map((layoutClass, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          layoutClass,
                          "transition-all duration-300 hover:opacity-80 rounded-lg"
                        )}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-2">
                <span className={cn(
                  "inline-block px-2 py-0.5 text-xs bg-white/20 backdrop-blur-sm rounded-full",
                  "transition-all duration-500",
                  isExpanded ? "opacity-90" : "opacity-60"
                )}>
                  {template.style}
                </span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />
              {template.style === "cyber" && (
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(152,216,216,0.1)_50%,transparent_75%)] bg-[length:4px_4px]" />
              )}
              {(template.style === "forest" || template.style === "meadow") && (
                <div className="absolute inset-0 bg-[url('/lovable-uploads/ca402feb-bcce-4d90-84d4-0e49c3566fce.png')] opacity-5 mix-blend-overlay" />
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};
