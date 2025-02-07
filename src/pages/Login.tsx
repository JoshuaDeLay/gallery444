
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/gallery');
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/gallery');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin + '/gallery'
          }
        });

        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Check your email to confirm your account!");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Successfully logged in!");
          navigate("/gallery");
        }
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gallery.soft via-murakami.cream to-murakami.teal/20">
      <Navigation />
      <div className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 backdrop-blur-sm bg-white/10 p-8 rounded-2xl shadow-lg border border-white/20">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-gallery.accent/90">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="mt-2 text-gallery.accent/70">
              {isSignUp ? "Sign up to start creating" : "Sign in to access your gallery"}
            </p>
          </div>
          <form onSubmit={handleAuth} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/50 border-white/30"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white/50 border-white/30"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gallery.accent hover:bg-gallery.accent/90"
              disabled={isLoading}
            >
              {isLoading 
                ? (isSignUp ? "Creating account..." : "Signing in...") 
                : (isSignUp ? "Sign up" : "Sign in")}
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-gallery.accent hover:underline text-sm"
              >
                {isSignUp 
                  ? "Already have an account? Sign in" 
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
