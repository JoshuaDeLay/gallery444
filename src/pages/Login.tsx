
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
  const [username, setUsername] = useState("");
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
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate('/gallery');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const validateForm = () => {
    if (!email || !password) {
      toast.error("Please fill in all required fields");
      return false;
    }
    if (isSignUp && !username) {
      toast.error("Username is required for registration");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      if (isSignUp) {
        // Sign up process
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin + '/gallery',
            data: {
              username: username
            }
          }
        });

        if (signUpError) {
          toast.error(signUpError.message);
        } else {
          toast.success("Account created! Please check your email to confirm your account.");
        }
      } else {
        // Sign in process
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (signInError) {
          toast.error(signInError.message);
        } else {
          toast.success("Welcome back!");
          navigate("/gallery");
        }
      }
    } catch (error) {
      toast.error("An error occurred during authentication");
      console.error("Auth error:", error);
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
            <h2 className="font-serif text-3xl text-gallery.accent/90 animate-float">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="mt-2 text-gallery.accent/70">
              {isSignUp ? "Sign up to start creating" : "Sign in to access your gallery"}
            </p>
          </div>
          <form onSubmit={handleAuth} className="mt-8 space-y-6">
            <div className="space-y-4">
              {isSignUp && (
                <div>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="bg-white/50 border-white/30 text-gallery.accent placeholder:text-gallery.accent/50"
                  />
                </div>
              )}
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/50 border-white/30 text-gallery.accent placeholder:text-gallery.accent/50"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white/50 border-white/30 text-gallery.accent placeholder:text-gallery.accent/50"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gallery.accent hover:bg-gallery.accent/90 text-white"
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
                className="text-gallery.accent font-medium hover:underline text-sm"
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
