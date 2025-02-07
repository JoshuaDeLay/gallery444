
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MessageSquare, Users, Image, DoorClosed, GalleryHorizontal, Circle } from "lucide-react";

export const BottomNav = () => {
  const location = useLocation();
  
  const navigation = [
    {
      name: "Prompts",
      href: "/prompts",
      icon: MessageSquare,
    },
    {
      name: "Social",
      href: "/social",
      icon: Users,
    },
    {
      name: "Templates",
      href: "/templates",
      icon: GalleryHorizontal,
    },
    {
      name: "Gallery",
      href: "/gallery",
      icon: DoorClosed,
    },
    {
      name: "Mindful",
      href: "/mindfulness",
      icon: Circle,
    },
    {
      name: "Memories",
      href: "/memories",
      icon: Image,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-md">
        <div className="flex justify-between px-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex flex-col items-center px-1 py-1.5 relative",
                  "text-sm font-medium transition-all duration-500",
                  isActive
                    ? "text-gallery-accent scale-105"
                    : "text-gallery-warm hover:text-gallery-accent hover:scale-102"
                )}
              >
                <Icon className={cn(
                  "h-5 w-5 transition-transform duration-500",
                  isActive && "animate-float"
                )} />
                <span className="mt-0.5 text-[10px]">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
