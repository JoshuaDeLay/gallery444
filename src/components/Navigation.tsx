
import { Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Navigation = () => {
  const navigate = useNavigate();
  const links = [
    { name: "Home", path: "/" },
    { name: "Weekly Prompts", path: "/prompts" },
    { name: "Create Gallery", path: "/create" },
  ];

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Successfully logged out!");
        navigate("/login");
      }
    } catch (error) {
      toast.error("An error occurred during logout");
    }
  };

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
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="text-gray-600 hover:text-gallery-accent"
          >
            <LogOut className="h-5 w-5" />
          </Button>
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
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="text-lg text-gray-600 hover:text-gallery-accent transition-colors justify-start"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
