
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { GalleryTemplate } from "@/types/gallery";
import { TemplateLayout } from "./TemplateLayout";

interface ExpandedTemplateProps {
  template: GalleryTemplate;
  onUseTemplate: (templateId: string, e: React.MouseEvent) => void;
}

export const ExpandedTemplate = ({ template, onUseTemplate }: ExpandedTemplateProps) => {
  const Icon = template.icon;

  return (
    <div className="relative h-full p-8 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Icon className={cn(
            "h-6 w-6",
            template.style === "minimal" ? "opacity-60" : 
            template.style === "exclusive" ? "text-[#1EAEDB]" : "opacity-90"
          )} />
          <h3 className={cn(
            "text-2xl",
            template.style === "minimal" ? 
              "font-mono tracking-tight" : 
              template.style === "exclusive" ?
              "font-serif uppercase tracking-wider" :
              "font-serif italic"
          )}>
            {template.name}
          </h3>
        </div>
        <Button
          onClick={(e) => onUseTemplate(template.id, e)}
          className={cn(
            "transition-all duration-300",
            template.style === "minimal" ?
              "bg-black text-white hover:bg-gray-800" :
              template.style === "exclusive" ?
              "bg-[#1EAEDB] text-white hover:bg-[#0FA0CE]" :
              "bg-white/20 backdrop-blur-sm hover:bg-white/30"
          )}
        >
          Use Template
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
      
      <TemplateLayout template={template} />
    </div>
  );
};
