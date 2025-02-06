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
}

const templates: GalleryTemplate[] = [
  {
    id: "minimal-white",
    name: "White Space",
    style: "minimal",
    description: "Clean, minimal layout with focus on the artwork",
    backgroundClass: "bg-white",
    icon: Minimize2,
  },
  {
    id: "brutalist-concrete",
    name: "Concrete",
    style: "brutalist",
    description: "Raw, brutalist aesthetic with bold typography",
    backgroundClass: "bg-gallery-accent",
    icon: Box,
  },
  {
    id: "classic-frame",
    name: "Classic Frame",
    style: "classic",
    description: "Traditional gallery layout with elegant frames",
    backgroundClass: "bg-gallery-soft",
    icon: Frame,
  },
  {
    id: "modern-gradient",
    name: "Modern Flow",
    style: "modern",
    description: "Contemporary design with subtle gradients",
    backgroundClass: "bg-gradient-to-r from-gallery-soft to-white",
    icon: Layers,
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
              "p-6 flex flex-col gap-2",
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
            <p className="text-sm text-gallery-warm">{template.description}</p>
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