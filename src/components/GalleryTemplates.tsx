
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Minimize2, Sparkles } from "lucide-react";
import { useState } from "react";

export type TemplateStyle = "minimal" | "magical";

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
    id: "minimal-essence",
    name: "Minimal Essence",
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
    name: "Magical Whispers",
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
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 h-[70vh] gap-0">
      {templates.map((template) => {
        const Icon = template.icon;
        const isHovered = hoveredTemplate === template.id;
        
        return (
          <Card
            key={template.id}
            className={cn(
              "relative overflow-hidden cursor-pointer transition-all duration-500",
              template.backgroundClass,
              "border-0 rounded-none",
              template.style === "magical" && "magical-card",
              hoveredTemplate && hoveredTemplate !== template.id && "opacity-50",
              "group"
            )}
            onClick={() => onSelectTemplate(template.id)}
            onMouseEnter={() => setHoveredTemplate(template.id)}
            onMouseLeave={() => setHoveredTemplate(null)}
          >
            <div className={cn(
              "absolute inset-0 transition-transform duration-500",
              isHovered ? "scale-105" : "scale-100"
            )}>
              <div className={cn(
                "relative h-full flex flex-col items-center justify-center p-8 text-center",
                template.style === "minimal" ? "space-y-6" : "space-y-8"
              )}>
                <Icon className={cn(
                  "transition-all duration-500",
                  isHovered ? "h-16 w-16" : "h-12 w-12",
                  template.style === "minimal" ? "opacity-60" : "opacity-90"
                )} />
                
                <div>
                  <h3 className={cn(
                    "transition-all duration-500 mb-3",
                    isHovered ? "text-4xl" : "text-3xl",
                    template.style === "minimal" ? "font-light" : "font-serif italic"
                  )}>
                    {template.name}
                  </h3>
                  
                  <p className={cn(
                    "max-w-md mx-auto transition-all duration-500",
                    template.style === "minimal" ? 
                      "text-gray-600 font-light" : 
                      "text-gray-800 font-serif italic"
                  )}>
                    {template.description}
                  </p>
                </div>

                <div className={cn(
                  "transition-all duration-500",
                  isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  <p className={cn(
                    "text-sm whitespace-pre-line mb-2",
                    template.style === "minimal" ? 
                      "font-light tracking-wide" : 
                      "font-serif italic"
                  )}>
                    "{template.poem}"
                  </p>
                  <p className="text-xs opacity-70">
                    — {template.author}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              {template.style === "magical" && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />
                  <div className="absolute inset-0 bg-[url('/lovable-uploads/ca402feb-bcce-4d90-84d4-0e49c3566fce.png')] opacity-5 mix-blend-overlay" />
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] animate-pulse" />
                </>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};
