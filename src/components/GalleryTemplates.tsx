
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { templates } from "@/data/templates";
import { TemplateCardContent } from "./gallery/TemplateCardContent";
import { ExpandedTemplate } from "./gallery/ExpandedTemplate";
import type { GalleryTemplate } from "@/types/gallery";

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
    <div className={cn(
      "grid gap-6 max-w-4xl mx-auto transition-all duration-500",
      expandedTemplate ? "grid-cols-1" : "grid-cols-2"
    )}>
      {templates.map((template: GalleryTemplate) => {
        const isHovered = hoveredTemplate === template.id;
        const isExpanded = expandedTemplate === template.id;
        
        if (expandedTemplate && expandedTemplate !== template.id) {
          return null;
        }
        
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
              isExpanded ? "h-[70vh]" : "aspect-square"
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
                    template.style === "magical" ?
                    "bg-[url('https://images.unsplash.com/photo-1582562124811-c09040d0a901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDg1ODQ5Mg&ixlib=rb-4.0.3&q=80&w=1080')]" :
                    "bg-[url('https://images.unsplash.com/photo-1604147495798-57beb5d6af73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDg1ODQ5Mg&ixlib=rb-4.0.3&q=80&w=1080')]"
                )}
              />
              
              {isExpanded ? (
                <ExpandedTemplate 
                  template={template}
                  onUseTemplate={handleUseTemplate}
                />
              ) : (
                <TemplateCardContent 
                  template={template}
                  isHovered={isHovered}
                />
              )}

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
