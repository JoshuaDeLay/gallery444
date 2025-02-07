
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MessageSquare, Users, Image, DoorClosed, GalleryHorizontal } from "lucide-react";

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
      name: "Gallery Collection",
      href: "/gallery",
      icon: DoorClosed,
      timer: "5d 3h",
    },
    {
      name: "Templates",
      href: "/templates",
      icon: GalleryHorizontal,
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
        <div className="flex justify-around">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex flex-col items-center px-3 py-2 relative",
                  "text-sm font-medium transition-all duration-500",
                  isActive
                    ? "text-gallery-accent scale-110"
                    : "text-gallery-warm hover:text-gallery-accent hover:scale-105"
                )}
              >
                <Icon className={cn(
                  "h-6 w-6 transition-transform duration-500",
                  isActive && "animate-float"
                )} />
                <span className="mt-1 text-xs">{item.name}</span>
                {item.timer && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] px-2 py-0.5 rounded-full bg-gallery-accent/10 text-gallery-accent backdrop-blur-sm animate-float">
                    {item.timer}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
