
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Minimize2, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleTemplateClick = (templateId: string) => {
    onSelectTemplate(templateId);
    setExpandedTemplate(expandedTemplate === templateId ? null : templateId);
  };

  const handleUseTemplate = (templateId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/templates/design?template=${templateId}`);
  };

  return (
    <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto transition-all duration-500">
      {templates.map((template) => {
        const Icon = template.icon;
        const isHovered = hoveredTemplate === template.id;
        const isExpanded = expandedTemplate === template.id;
        
        return (
          <Card
            key={template.id}
            className={cn(
              "relative overflow-hidden cursor-pointer transition-all duration-500",
              template.backgroundClass,
              "border-0 rounded-lg",
              template.style === "magical" && "magical-card",
              hoveredTemplate && hoveredTemplate !== template.id && "opacity-50",
              "group",
              isExpanded ? "col-span-2 h-[70vh]" : "aspect-square"
            )}
            onClick={() => handleTemplateClick(template.id)}
            onMouseEnter={() => setHoveredTemplate(template.id)}
            onMouseLeave={() => setHoveredTemplate(null)}
          >
            <div className={cn(
              "absolute inset-0 transition-all duration-500",
              isHovered ? "scale-105" : "scale-100"
            )}>
              <div
                className={cn(
                  "absolute inset-0 bg-center bg-cover bg-no-repeat opacity-10",
                  template.style === "minimal" ? 
                    "bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDg1ODQ5Mg&ixlib=rb-4.0.3&q=80&w=1080')]" : 
                    "bg-[url('https://images.unsplash.com/photo-1582562124811-c09040d0a901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDg1ODQ5Mg&ixlib=rb-4.0.3&q=80&w=1080')]"
                )}
              />
              
              {isExpanded ? (
                <div className="relative h-full p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Icon className={cn(
                        "h-6 w-6",
                        template.style === "minimal" ? "opacity-60" : "opacity-90"
                      )} />
                      <h3 className={cn(
                        "text-2xl",
                        template.style === "minimal" ? 
                          "font-mono tracking-tight" : 
                          "font-serif italic"
                      )}>
                        {template.name}
                      </h3>
                    </div>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUseTemplate(template.id);
                      }}
                      className={cn(
                        "transition-all duration-300",
                        template.style === "minimal" ?
                          "bg-black text-white hover:bg-gray-800" :
                          "bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      )}
                    >
                      Use Template
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  
                  <div className={cn(
                    "grid flex-1",
                    template.layout[0]
                  )}>
                    {/* Layout preview boxes */}
                    <div className={template.layout[1]} />
                    <div className={template.layout[2]} />
                    <div className={template.layout[3]} />
                  </div>
                </div>
              ) : (
                <div className={cn(
                  "relative h-full flex flex-col items-center justify-center p-6 text-center",
                  template.style === "minimal" ? "space-y-4" : "space-y-4"
                )}>
                  <Icon className={cn(
                    "transition-all duration-500",
                    isHovered ? "h-8 w-8" : "h-6 w-6",
                    template.style === "minimal" ? "opacity-60" : "opacity-90"
                  )} />
                  
                  <div>
                    <h3 className={cn(
                      "transition-all duration-500 mb-2",
                      isHovered ? "text-2xl" : "text-xl",
                      template.style === "minimal" ? 
                        "font-mono tracking-tight" : 
                        "font-serif italic"
                    )}>
                      {template.name}
                    </h3>
                    
                    <p className={cn(
                      "max-w-[200px] mx-auto transition-all duration-500",
                      template.style === "minimal" ? 
                        "text-gray-600 font-mono text-xs tracking-wide" : 
                        "text-gray-800 font-serif italic text-xs"
                    )}>
                      {template.description}
                    </p>
                  </div>

                  <div className={cn(
                    "transition-all duration-500",
                    isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    <p className={cn(
                      "text-xs whitespace-pre-line mb-1",
                      template.style === "minimal" ? 
                        "font-mono tracking-wide" : 
                        "font-serif italic"
                    )}>
                      "{template.poem}"
                    </p>
                    <p className="text-[10px] opacity-70">
                      — {template.author}
                    </p>
                  </div>
                </div>
              )}

              {/* Decorative elements */}
              {template.style === "magical" && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />
                  <div className="absolute inset-0 opacity-5 mix-blend-overlay" />
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
                </>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};
