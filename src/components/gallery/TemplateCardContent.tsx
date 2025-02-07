
import { cn } from "@/lib/utils";
import type { GalleryTemplate } from "@/types/gallery";

interface TemplateCardContentProps {
  template: GalleryTemplate;
  isHovered: boolean;
}

export const TemplateCardContent = ({ template, isHovered }: TemplateCardContentProps) => {
  const Icon = template.icon;
  
  return (
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
  );
};
