
import { LogOut, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface DesktopNavProps {
  links: { name: string; path: string }[];
  isAuthenticated: boolean | null;
}

export const DesktopNav = ({ links, isAuthenticated }: DesktopNavProps) => {
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

  return (
    <div className="hidden md:flex items-center gap-8">
      {isAuthenticated && links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="text-gray-600 hover:text-gallery-accent transition-colors"
        >
          {link.name}
        </Link>
      ))}
      {isAuthenticated ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={handleLogout}
          className="text-gray-600 hover:text-gallery-accent"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/login')}
          className="text-gray-600 hover:text-gallery-accent"
        >
          <LogIn className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};
