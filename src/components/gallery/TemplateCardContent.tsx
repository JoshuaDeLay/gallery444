
import { cn } from "@/lib/utils";
import type { GalleryTemplate } from "@/types/gallery";

interface TemplateCardContentProps {
  template: GalleryTemplate;
  isHovered: boolean;
}

export const TemplateCardContent = ({ template, isHovered }: TemplateCardContentProps) => {
  const Icon = template.icon;
  
  return (
    <div className="relative h-full flex flex-col items-center justify-center">
      <Icon className={cn(
        "transition-all duration-500 mb-4",
        isHovered ? "h-12 w-12" : "h-8 w-8",
        template.style === "minimal" ? "opacity-60" : "opacity-90"
      )} />
      
      <h3 className={cn(
        "transition-all duration-500",
        isHovered ? "text-2xl" : "text-xl",
        template.style === "minimal" ? 
          "font-mono tracking-tight" : 
          "font-serif italic"
      )}>
        {template.name}
      </h3>
    </div>
  );
};
