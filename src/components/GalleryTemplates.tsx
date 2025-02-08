
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
<<<<<<< Updated upstream
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { templates } from "@/data/templates";
import { TemplateCardContent } from "./gallery/TemplateCardContent";
import { ExpandedTemplate } from "./gallery/ExpandedTemplate";
import type { GalleryTemplate } from "@/types/gallery";
=======
import { Minimize2, Box, Frame, Layers } from "lucide-react";
import { FC } from 'react';
import { GalleryProps, Season } from '@/types';

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
>>>>>>> Stashed changes

interface GalleryTemplatesProps {
  season: Season;
  onSelect: (templateId: string) => void;
  selectedTemplate?: string;
}

<<<<<<< Updated upstream
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

=======
export const GalleryTemplates: FC<GalleryTemplatesProps> = ({
  season,
  onSelect,
  selectedTemplate
}) => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            onClick={() => handleTemplateClick(template.id)}
            onMouseEnter={() => setHoveredTemplate(template.id)}
            onMouseLeave={() => setHoveredTemplate(null)}
=======
            onClick={() => onSelect(template.id)}
>>>>>>> Stashed changes
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
