
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { DesktopNav } from "./Navigation/DesktopNav";
import { MobileNav } from "./Navigation/MobileNav";

export const Navigation = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  
  const links = [
    { name: "Home", path: "/" },
    { name: "Weekly Prompts", path: "/prompts" },
    { name: "Create Gallery", path: "/create" },
    { name: "Groups", path: "/groups" },
  ];

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Don't show navigation links on login page
  const shouldShowNavLinks = location.pathname !== '/login';

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl text-gallery-accent">
          Gallery
        </Link>

        <DesktopNav 
          links={links}
          isAuthenticated={isAuthenticated}
        />

        <MobileNav
          links={links}
          isAuthenticated={isAuthenticated}
          shouldShowNavLinks={shouldShowNavLinks}
        />
      </div>
    </nav>
  );
};

export { BottomNav } from "@/components/Navigation/BottomNav";
