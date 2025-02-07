import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Minimize2, Box, Frame, Layers, Snowflake, Mountain, Wind, Camera } from "lucide-react";
import { useState } from "react";

export type TemplateStyle = "minimal" | "brutalist" | "classic" | "modern" | "nordic" | "alpine" | "frost" | "polar";

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
    id: "minimal-white",
    name: "White Space",
    style: "minimal",
    description: "Inspired by e.e. cummings' minimalist poetry",
    backgroundClass: "bg-white",
    icon: Minimize2,
    poem: "l(a\n\nle\naf\nfa\n\nll\n\ns)\none\nl\niness",
    author: "e.e. cummings",
    layout: [
      "grid-cols-1 gap-8",
      "aspect-[3/4] bg-gallery-soft/20",
      "aspect-square bg-gallery-soft/20",
      "aspect-[4/3] bg-gallery-soft/20"
    ]
  },
  {
    id: "brutalist-concrete",
    name: "Concrete",
    style: "brutalist",
    description: "Raw typography meets architectural forms",
    backgroundClass: "bg-gallery-accent",
    icon: Box,
    poem: "The city rises\nConcrete and steel\nAgainst the morning light",
    author: "Contemporary Verse",
    layout: [
      "grid-cols-2 gap-2",
      "col-span-2 aspect-[2/1] bg-white/10",
      "aspect-square bg-white/10",
      "aspect-square bg-white/10"
    ]
  },
  {
    id: "classic-frame",
    name: "Classic Frame",
    style: "classic",
    description: "Inspired by William Wordsworth's nature poetry",
    backgroundClass: "bg-gallery-soft",
    icon: Frame,
    poem: "I wandered lonely as a cloud\nThat floats on high o'er vales and hills",
    author: "William Wordsworth",
    layout: [
      "grid-cols-3 gap-4",
      "col-span-2 aspect-[2/1] bg-white border-2 border-gallery-accent/20",
      "aspect-[3/4] bg-white border-2 border-gallery-accent/20",
      "col-span-3 aspect-[3/1] bg-white border-2 border-gallery-accent/20"
    ]
  },
  {
    id: "modern-gradient",
    name: "Modern Flow",
    style: "modern",
    description: "Contemporary poetry meets fluid design",
    backgroundClass: "bg-gradient-to-r from-gallery-soft to-white",
    icon: Layers,
    poem: "Digital rivers flow\nPixels cascade through time's stream\nModern art evolves",
    author: "Digital Haiku",
    layout: [
      "grid-cols-12 gap-4",
      "col-span-8 aspect-video bg-gradient-to-r from-gallery-soft/40 to-white",
      "col-span-4 aspect-square bg-gradient-to-l from-gallery-soft/40 to-white",
      "col-span-12 aspect-[4/1] bg-gradient-to-t from-gallery-soft/40 to-white"
    ]
  },
  {
    id: "nordic-frost",
    name: "Nordic Frost",
    style: "nordic",
    description: "Scandinavian simplicity meets winter's embrace",
    backgroundClass: "bg-gradient-to-br from-white via-blue-50 to-blue-100",
    icon: Snowflake,
    poem: "Silent fjords whisper\nNorthern lights dance overhead\nWinter's pure essence",
    author: "Nordic Verse",
    layout: [
      "grid-cols-3 gap-3",
      "col-span-2 aspect-[2/1] bg-blue-50/40 border border-blue-100",
      "aspect-square bg-blue-50/40 border border-blue-100",
      "col-span-3 aspect-[3/1] bg-blue-50/40 border border-blue-100"
    ]
  },
  {
    id: "alpine-heights",
    name: "Alpine Heights",
    style: "alpine",
    description: "Capturing the majesty of mountain winters",
    backgroundClass: "bg-gradient-to-r from-slate-100 to-slate-200",
    icon: Mountain,
    poem: "Mountains touch the sky\nSnow-capped peaks in morning light\nNature's cathedral",
    author: "Mountain Poet",
    layout: [
      "grid-cols-2 gap-4",
      "aspect-[16/9] bg-white/80 shadow-inner",
      "aspect-square bg-white/80 shadow-inner",
      "col-span-2 aspect-[2/1] bg-white/80 shadow-inner"
    ]
  },
  {
    id: "frost-minimalist",
    name: "Frost Pattern",
    style: "frost",
    description: "Inspired by crystalline frost patterns",
    backgroundClass: "bg-gradient-to-bl from-white via-blue-50 to-white",
    icon: Wind,
    poem: "Crystal lattice forms\nNature's geometric art\nFrost writes on windows",
    author: "Winter Observer",
    layout: [
      "grid-cols-12 gap-2",
      "col-span-7 aspect-video bg-gradient-to-r from-white to-blue-50 border border-blue-100/50",
      "col-span-5 aspect-square bg-gradient-to-l from-white to-blue-50 border border-blue-100/50",
      "col-span-12 aspect-[5/1] bg-gradient-to-t from-white to-blue-50 border border-blue-100/50"
    ]
  },
  {
    id: "polar-night",
    name: "Polar Night",
    style: "polar",
    description: "Ethereal beauty of the arctic night",
    backgroundClass: "bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900",
    icon: Camera,
    poem: "In darkness profound\nAurora paints the black sky\nStars dance with colors",
    author: "Arctic Dreams",
    layout: [
      "grid-cols-6 gap-3",
      "col-span-4 aspect-video bg-white/5 border border-white/10",
      "col-span-2 aspect-square bg-white/5 border border-white/10",
      "col-span-6 aspect-[4/1] bg-white/5 border border-white/10"
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
