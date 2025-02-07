
import { cn } from "@/lib/utils";
import type { GalleryTemplate } from "@/types/gallery";

interface TemplateLayoutProps {
  template: GalleryTemplate;
}

export const TemplateLayout = ({ template }: TemplateLayoutProps) => {
  return (
    <div className={cn("grid flex-1", template.layout[0])}>
      <div className={template.layout[1]} />
      <div className={template.layout[2]} />
      <div className={template.layout[3]} />
    </div>
  );
};
