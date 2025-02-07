
import { cn } from "@/lib/utils";
import type { GalleryTemplate } from "@/types/gallery";
import { ThreeDViewer } from "./ThreeDViewer";

interface TemplateLayoutProps {
  template: GalleryTemplate;
}

export const TemplateLayout = ({ template }: TemplateLayoutProps) => {
  if (template.id === "3d-gallery") {
    return (
      <div className={cn("grid flex-1", template.layout[0])}>
        <div className={template.layout[1]}>
          <ThreeDViewer className="w-full h-full" />
        </div>
        <div className={template.layout[2]} />
        <div className={template.layout[3]} />
      </div>
    );
  }

  return (
    <div className={cn("grid flex-1", template.layout[0])}>
      <div className={template.layout[1]} />
      <div className={template.layout[2]} />
      <div className={template.layout[3]} />
    </div>
  );
};
