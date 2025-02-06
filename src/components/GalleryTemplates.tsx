import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Minimize2, Box, Frame, Layers } from "lucide-react";

export type TemplateStyle = "minimal" | "brutalist" | "classic" | "modern";

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
];

interface GalleryTemplatesProps {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

export const GalleryTemplates = ({
  selectedTemplate,
  onSelectTemplate,
}: GalleryTemplatesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {templates.map((template) => {
        const Icon = template.icon;
        return (
          <Card
            key={template.id}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:scale-105",
              "p-6 flex flex-col gap-4",
              selectedTemplate === template.id
                ? "ring-2 ring-gallery-accent"
                : "hover:ring-1 hover:ring-gallery-warm",
              template.backgroundClass
            )}
            onClick={() => onSelectTemplate(template.id)}
          >
            <div className="flex items-center gap-3">
              <Icon className="h-6 w-6" />
              <h3 className="font-serif text-xl">{template.name}</h3>
            </div>
            
            <div className="prose prose-sm">
              <p className="text-sm text-gallery-warm font-serif italic">
                "{template.poem}"
              </p>
              <p className="text-xs text-gallery-warm text-right">
                — {template.author}
              </p>
            </div>

            <div className={cn(
              "mt-4 grid",
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

            <div className="mt-2">
              <span className="inline-block px-2 py-1 text-xs bg-white/80 rounded">
                {template.style}
              </span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};