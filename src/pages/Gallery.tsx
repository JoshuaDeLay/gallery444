
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { GalleryHeader } from "@/components/gallery/GalleryHeader";
import { CountdownTimer } from "@/components/gallery/CountdownTimer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Scroll } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [galleryName, setGalleryName] = useState("The Grand Gallery");

  return (
    <div className="min-h-screen bg-[#E6D5A7] pb-20 relative overflow-hidden">
      <Navigation />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
      
      <div className="container mx-auto px-4 min-h-[calc(100vh-8rem)]">
        <div className="max-w-4xl w-full mx-auto space-y-12 py-12">
          {/* Main Gallery Section */}
          <div className="backdrop-blur-sm bg-white/20 p-12 rounded-2xl shadow-lg border border-white/30 animate-fade-up">
            <GalleryHeader galleryName={galleryName} setGalleryName={setGalleryName} />
            <p className="font-serif text-gallery.accent/80 text-xl leading-relaxed max-w-xl mx-auto italic mt-4">
              A curated space where artistic roles converge to create meaningful experiences.
            </p>
            <CountdownTimer />
          </div>

          {/* Featured Communities */}
          <div className="space-y-6 animate-fade-up delay-200">
            <h2 className="font-serif text-2xl text-center text-gallery.accent mb-8">
              Featured Communities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'University of Southern California',
                  members: 234,
                  description: 'A creative hub for USC students and faculty.'
                },
                {
                  name: 'UCLEA Artist Collective',
                  members: 156,
                  description: 'Collaborative space for UCLEA members.'
                }
              ].map((community) => (
                <Card key={community.name} className="p-6 hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm border-white/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-5 h-5 text-gallery.accent" />
                    <h3 className="font-semibold text-lg">{community.name}</h3>
                  </div>
                  <p className="text-sm text-gallery.accent/70 mb-4">{community.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gallery.accent/60">{community.members} members</span>
                    <Button variant="outline" className="text-sm hover:bg-gallery.accent hover:text-white">
                      Join Community
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Role Contributions */}
          <div className="space-y-8 animate-fade-up delay-300">
            <h2 className="font-serif text-2xl text-center text-gallery.accent mb-8">
              How Roles Shape Our Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Writers & Poets",
                  contribution: "Craft narratives and verses that accompany visual works, adding layers of meaning and emotional depth to each piece."
                },
                {
                  icon: Scroll,
                  title: "Philosophers",
                  contribution: "Guide the thematic direction of galleries through thoughtful curation and meaningful context creation."
                },
                {
                  icon: Users,
                  title: "Visual Artists",
                  contribution: "Transform concepts into tangible expressions through various mediums, from traditional to digital art."
                }
              ].map((role) => (
                <Card key={role.title} className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <role.icon className="w-8 h-8 mb-4 text-gallery.accent" />
                  <h3 className="text-lg font-semibold mb-2">{role.title}</h3>
                  <p className="text-sm text-gallery.accent/70">{role.contribution}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Gallery;
