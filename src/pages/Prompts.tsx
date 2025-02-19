
import { Navigation } from "@/components/Navigation";
import { WeeklyPrompt } from "@/components/WeeklyPrompt";
import { BottomNav } from "@/components/BottomNav";
import { ArtisticRole } from "@/components/ArtisticRole";
import { Palette, Layout, Brain, PenTool, ScrollText, Globe, Users, Heart } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Prompts = () => {
  const roles = [
    {
      title: "Painter",
      icon: Palette,
      description: "Captures the mood through color, form, and texture",
      longDescription: "As a Painter in our creative community, you'll translate emotions and experiences into visual poetry. Using color, texture, and form, you'll create pieces that speak to the soul of each prompt. Your work forms the visual foundation of our gallery collections, bringing abstract concepts to life through artistic expression.",
      gradient: "from-[#fec6a1] to-[#fee2d4]",
      contribution: "Creates the visual heart of gallery collections"
    },
    {
      title: "Designer",
      icon: Layout,
      description: "Shapes the experience, structuring space and composition",
      longDescription: "Designers in our community focus on the architecture of experience. You'll work with space, composition, and visual hierarchy to create meaningful interactions. Your designs determine how viewers experience and navigate through the gallery, creating intuitive and engaging spatial narratives.",
      gradient: "from-[#98d8d8] to-[#c1e8e8]",
      contribution: "Crafts the gallery's spatial experience"
    },
    {
      title: "Philosopher",
      icon: Brain,
      description: "Curates weekly prompts, explores deeper meanings",
      longDescription: "As a Philosopher, you'll guide the community's exploration by crafting and choosing weekly prompts that inspire meaningful reflection. Your role shapes the conceptual framework of our galleries, ensuring each collection tells a coherent and thought-provoking story.",
      gradient: "from-[#9b87f5] to-[#b8a9f7]",
      contribution: "Develops the gallery's thematic direction"
    },
    {
      title: "Writer",
      icon: PenTool,
      description: "Translates emotions into narrative and text",
      longDescription: "Writers in our community craft narratives that bridge the gap between experience and understanding. Your words provide context and depth to visual works, creating a richer gallery experience that engages both the eye and mind.",
      gradient: "from-[#f1f1f1] to-[#ffffff]",
      contribution: "Adds narrative depth to visual works"
    },
    {
      title: "Poet",
      icon: ScrollText,
      description: "Distills the essence of an idea into rhythmic expression",
      longDescription: "As a Poet, you'll work with the musicality of language to create concentrated expressions of emotion and insight. Your verses add another layer of meaning to gallery pieces, creating moments of reflection and emotional resonance.",
      gradient: "from-[#fde1d3] to-[#fef0e8]",
      contribution: "Enhances emotional impact through verse"
    },
    {
      title: "All Roles",
      icon: Globe,
      description: "Blends multiple forms of expression into one voice",
      longDescription: "Those who choose to embrace all roles become multidisciplinary artists, weaving together different forms of expression. You'll create comprehensive gallery experiences that seamlessly integrate visual, spatial, and textual elements.",
      gradient: "from-[#1eaedb] to-[#45bde3]",
      contribution: "Creates holistic gallery experiences"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-murakami-cream to-white pb-20">
      <Navigation />
      <div className="container mx-auto px-4 min-h-[calc(100vh-8rem)]">
        <div className="w-full max-w-4xl mx-auto space-y-8 py-8">
          <h1 className="font-serif text-2xl md:text-3xl text-center mb-6 animate-fade-up text-murakami.wood
            [text-shadow:_2px_2px_4px_rgb(94_75_86_/_20%)]
            italic">
            Daily Reflections
          </h1>
          
          <div className="grid md:grid-cols-1 gap-8">
            <WeeklyPrompt />
          </div>

          <div className="mb-8 animate-fade-up">
            <ArtisticRole />
          </div>

          {/* Artistic Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {roles.map((role, index) => (
              <Dialog key={role.title}>
                <DialogTrigger asChild>
                  <div
                    className={`
                      p-6 rounded-xl backdrop-blur-sm cursor-pointer
                      bg-gradient-to-br ${role.gradient}
                      ${role.title === 'All Roles' ? 'md:col-span-2 lg:col-span-3' : ''}
                      hover:shadow-lg transition-shadow duration-300
                    `}
                  >
                    <div className="flex items-center space-x-4">
                      <role.icon className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-semibold">{role.title}</h3>
                        <p className="text-sm mt-1 opacity-80">{role.description}</p>
                        <p className="text-xs mt-2 font-medium text-gallery-accent">
                          {role.contribution}
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <role.icon className="w-6 h-6" />
                      <span>{role.title}</span>
                    </DialogTitle>
                    <DialogDescription className="mt-4 text-base leading-relaxed">
                      {role.longDescription}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Prompts;
