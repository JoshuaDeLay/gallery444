
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MessageSquare, Users, DoorClosed, Circle, Palette } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { name: "Home", path: "/" },
    { name: "Weekly Prompts", path: "/prompts" },
    { name: "Create Gallery", path: "/create" },
    { name: "Groups", path: "/groups" },
    { name: "Role", path: "/role" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl text-gallery-accent">
          Gallery
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-600 hover:text-gallery-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg text-gray-600 hover:text-gallery-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

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
    },
    {
      name: "Mindful",
      href: "/mindfulness",
      icon: Circle,
    },
    {
      name: "Role",
      href: "/role",
      icon: Palette,
    }
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
                  "flex flex-col items-center px-1 py-1.5 relative",
                  "text-sm font-medium transition-all duration-500",
                  isActive
                    ? "text-gallery-accent scale-110"
                    : "text-gallery-warm hover:text-gallery-accent hover:scale-105"
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
