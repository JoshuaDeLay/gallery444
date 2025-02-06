import { ArrowRight, Image, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { WeeklyPrompt } from "@/components/WeeklyPrompt";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-gallery-accent mb-6 animate-fade-up">
            Create, Connect, Reflect
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-up">
            A mindful space for sharing creative expressions with your community.
            Respond to weekly prompts, create themed galleries, and connect through art.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-up">
            <Button asChild size="lg">
              <Link to="/create">
                Create Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gallery-soft/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start animate-fade-up">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <Image className="h-6 w-6 text-gallery-accent" />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Weekly Prompts</h3>
                <p className="text-gray-600">
                  Find inspiration through thoughtful prompts designed to spark
                  creativity and reflection.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start animate-fade-up">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <Users className="h-6 w-6 text-gallery-accent" />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Private Spaces</h3>
                <p className="text-gray-600">
                  Create intimate galleries to share with family, friends, or your
                  chosen community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Prompt Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <WeeklyPrompt />
        </div>
      </section>
    </div>
  );
};

export default Index;