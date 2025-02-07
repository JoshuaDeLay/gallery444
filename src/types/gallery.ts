
import { LucideIcon } from "lucide-react";

export type TemplateStyle = "minimal" | "magical" | "exclusive";

export interface GalleryTemplate {
  id: string;
  name: string;
  style: TemplateStyle;
  description: string;
  backgroundClass: string;
  icon: LucideIcon;
  poem?: string;
  author?: string;
  layout: string[];
}
