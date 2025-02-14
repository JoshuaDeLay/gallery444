
import { Navigation } from "@/components/Navigation";
import { WeeklyPrompt } from "@/components/WeeklyPrompt";
import { BottomNav } from "@/components/BottomNav";
import { ArtisticRole } from "@/components/ArtisticRole";
import { Palette, Layout, Brain, PenTool, ScrollText, Globe, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Prompts = () => {
  // Define roles with their explanations
  const roles = [
    {
      title: "Painter",
      icon: Palette,
      description: "Captures the mood through color, form, and texture",
      longDescription: "As a Painter in our creative community, you'll translate emotions and experiences into visual poetry. Using color, texture, and form, you'll create pieces that speak to the soul of each prompt. Whether working in traditional or digital mediums, your role is to capture the ineffable qualities of moments and memories.",
      gradient: "from-[#fec6a1] to-[#fee2d4]"
    },
    {
      title: "Designer",
      icon: Layout,
      description: "Shapes the experience, structuring space and composition",
      longDescription: "Designers in our community focus on the architecture of experience. You'll work with space, composition, and visual hierarchy to create meaningful interactions. Your designs will help others navigate through emotions and ideas with clarity and purpose.",
      gradient: "from-[#98d8d8] to-[#c1e8e8]"
    },
    {
      title: "Philosopher",
      icon: Brain,
      description: "Asks questions, explores the meaning behind the moment",
      longDescription: "As a Philosopher, you'll dive deep into the underlying meanings and connections within each prompt. Your role is to question, to wonder, and to help others see familiar things in new ways. Through contemplation and discourse, you'll help uncover hidden truths.",
      gradient: "from-[#9b87f5] to-[#b8a9f7]"
    },
    {
      title: "Writer",
      icon: PenTool,
      description: "Translates emotions into narrative and text",
      longDescription: "Writers in our community craft narratives that bridge the gap between experience and understanding. Your words will give voice to unspoken thoughts and feelings, creating stories that resonate with universal truths while maintaining personal intimacy.",
      gradient: "from-[#f1f1f1] to-[#ffffff]"
    },
    {
      title: "Poet",
      icon: ScrollText,
      description: "Distills the essence of an idea into rhythmic expression",
      longDescription: "As a Poet, you'll work with the musicality of language to create concentrated expressions of emotion and insight. Your role is to find the perfect words and rhythms that capture the essence of a moment or feeling, creating verses that linger in the mind.",
      gradient: "from-[#fde1d3] to-[#fef0e8]"
    },
    {
      title: "All Roles",
      icon: Globe,
      description: "Blends multiple forms of expression into one voice",
      longDescription: "Those who choose to embrace all roles become multidisciplinary artists, weaving together different forms of expression. You'll have the freedom to move between mediums, combining approaches to create rich, layered responses to each prompt.",
      gradient: "from-[#1eaedb] to-[#45bde3]"
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

          <div className="grid md:grid-cols-1 gap-8">
            <WeeklyPrompt />
          </div>

          {/* Public Gallery Section */}
          <div className="mt-16 space-y-6">
            <h2 className="font-serif text-2xl text-center text-murakami.wood mb-8">
              Public Galleries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Writers Circle', 'Visual Artists', 'Mixed Media Explorers'].map((community) => (
                <Card key={community} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-5 h-5 text-murakami.wood" />
                    <h3 className="font-semibold text-lg">{community}</h3>
                  </div>
                  <p className="text-sm text-murakami.wood/70 mb-4">
                    Join fellow creators in exploring and sharing interpretations of our weekly prompts.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Gallery
                  </Button>
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

export default Prompts;
