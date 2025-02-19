
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Heart, Users } from "lucide-react";

const Social = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-murakami-cream to-white pb-20">
      <Navigation />
      <div className="container mx-auto px-4 pt-16">
        <h1 className="font-serif text-3xl md:text-4xl text-center mb-4">
          Your Creative Circle
        </h1>
        <p className="text-center text-gallery-warm mb-12">
          Connect with fellow creators and share your visual stories.
        </p>

        {/* Community Galleries Section */}
        <div className="mt-16 space-y-6">
          <h2 className="font-serif text-2xl text-center text-murakami.wood mb-8">
            Community Galleries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Nostalgia Through Time',
                creator: 'Visual Arts Department',
                votes: 127,
                description: 'A collection exploring memories through various mediums'
              },
              {
                name: 'Urban Perspectives',
                creator: 'Architecture Studio',
                votes: 143,
                description: 'Contemporary interpretations of city life and spaces'
              }
            ].map((gallery) => (
              <Card key={gallery.name} className="p-6 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold text-lg">{gallery.name}</h3>
                  <p className="text-sm text-murakami.wood/70">{gallery.description}</p>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="text-murakami.wood/60">{gallery.creator}</span>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-pink-500" />
                      <span>{gallery.votes} votes</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Social;
