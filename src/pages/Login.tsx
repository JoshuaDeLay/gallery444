
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();

  const handleSimpleAccess = () => {
    toast.success("Welcome to Gallery!");
    navigate("/gallery");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gallery-accent/10 via-white to-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 backdrop-blur-sm bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-gallery-accent">
              Welcome to Gallery
            </h2>
            <p className="mt-2 text-gray-600">
              Explore your creative journey
            </p>
          </div>
          
          <div className="mt-8 space-y-6">
            <Button
              onClick={handleSimpleAccess}
              className="w-full bg-gallery-accent hover:bg-gallery-accent/90 text-white"
            >
              Enter Gallery
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-gray-500">
                No sign up required. Click to enter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
