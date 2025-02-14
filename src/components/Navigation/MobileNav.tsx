
import { Menu, LogOut, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface MobileNavProps {
  links: { name: string; path: string }[];
  isAuthenticated: boolean | null;
  shouldShowNavLinks: boolean;
}

export const MobileNav = ({ links, isAuthenticated, shouldShowNavLinks }: MobileNavProps) => {
  const navigate = useNavigate();

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

  if (!shouldShowNavLinks) return null;

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-4 mt-8">
          {isAuthenticated && links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-lg text-gray-600 hover:text-gallery-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="text-lg text-gray-600 hover:text-gallery-accent transition-colors justify-start"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </Button>
          ) : (
            <Button
              variant="ghost"
              onClick={() => navigate('/login')}
              className="text-lg text-gray-600 hover:text-gallery-accent transition-colors justify-start"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Login
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
