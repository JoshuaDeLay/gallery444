
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {templates.map((template) => {
        const Icon = template.icon;
        const isExpanded = expandedTemplate === template.id;
        const isVisible = !expandedTemplate || expandedTemplate === template.id;
        
        return (
          <Card
            key={template.id}
            className={cn(
              "relative overflow-hidden cursor-pointer transition-all duration-500 group",
              template.backgroundClass,
              isExpanded ? 
                "col-span-1 md:col-span-2 ring-2 ring-murakami-teal/30" : 
                "hover:scale-102 hover:shadow-lg",
              !isVisible && "hidden",
              template.style === "magical" && "magical-card",
              "transform-gpu"
            )}
            onClick={() => handleTemplateClick(template.id)}
          >
            <div 
              className={cn(
                "relative z-10",
                isExpanded ? "p-8" : "p-4",
                "transition-all duration-500"
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className={cn(
                  "transition-all duration-500",
                  isExpanded ? "h-7 w-7" : "h-5 w-5",
                  template.style === "minimal" ? "opacity-60" : "opacity-90"
                )} />
                <h3 className={cn(
                  "transition-all duration-500",
                  isExpanded ? "text-2xl" : "text-lg",
                  template.style === "minimal" ? "font-light" : "font-serif italic"
                )}>{template.name}</h3>
              </div>
              
              {isExpanded && (
                <div className="animate-fade-up animate-duration-500">
                  <div className={cn(
                    "mt-6 prose prose-sm",
                    template.style === "minimal" ? "prose-neutral" : "prose-pink"
                  )}>
                    <p className={cn(
                      "text-sm leading-relaxed whitespace-pre-line",
                      template.style === "minimal" ? 
                        "font-light tracking-wide" : 
                        "font-serif italic"
                    )}>
                      "{template.poem}"
                    </p>
                    <p className="text-xs opacity-70 text-right mt-2">
                      — {template.author}
                    </p>
                  </div>

                  <div className={cn(
                    "mt-8 grid gap-4",
                    template.layout[0]
                  )}>
                    {template.layout.slice(1).map((layoutClass, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          layoutClass,
                          "rounded-lg transition-all duration-300 hover:opacity-80",
                          template.style === "magical" && 
                            "border border-white/10 shadow-[0_0_15px_rgba(255,181,197,0.1)]"
                        )}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-3">
                <span className={cn(
                  "inline-block px-2 py-0.5 text-xs rounded-full",
                  template.style === "minimal" ? 
                    "bg-gray-100 text-gray-600" : 
                    "bg-white/20 backdrop-blur-sm text-gray-800",
                  "transition-all duration-500",
                  isExpanded ? "opacity-90" : "opacity-60"
                )}>
                  {template.style}
                </span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
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
