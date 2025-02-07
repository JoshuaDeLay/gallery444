
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MessageSquare, Users, Image, DoorClosed } from "lucide-react";

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
      name: "Gallery",
      href: "/gallery",
      icon: DoorClosed,
      timer: "5d 3h", // This matches the timer from WeeklyPrompt
      isLocked: true,
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
                to={item.isLocked ? "#" : item.href}
                className={cn(
                  "flex flex-col items-center px-3 py-2 relative",
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-gallery-accent"
                    : "text-gallery-warm hover:text-gallery-accent",
                  item.isLocked && "cursor-not-allowed filter blur-[0.5px]"
                )}
                onClick={(e) => item.isLocked && e.preventDefault()}
              >
                <Icon className={cn(
                  "h-6 w-6",
                  item.isLocked && "animate-pulse"
                )} />
                <span className="mt-1 text-xs">{item.name}</span>
                {item.timer && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] px-2 py-0.5 rounded-full bg-gallery-accent/10 text-gallery-accent">
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

