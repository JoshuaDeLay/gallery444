
import { Navigation } from "@/components/Navigation";
import { WeeklyPrompt } from "@/components/WeeklyPrompt";
import { BottomNav } from "@/components/BottomNav";
import { ArtisticRole } from "@/components/ArtisticRole";
import { Palette, Layout, Brain, PenTool, ScrollText, Globe } from 'lucide-react';

const Prompts = () => {
  // Define roles with their explanations
  const roles = [
    {
      title: "Painter",
      icon: Palette,
      description: "Captures the mood through color, form, and texture",
      gradient: "from-[#fec6a1] to-[#fee2d4]"
    },
    {
      title: "Designer",
      icon: Layout,
      description: "Shapes the experience, structuring space and composition",
      gradient: "from-[#98d8d8] to-[#c1e8e8]"
    },
    {
      title: "Philosopher",
      icon: Brain,
      description: "Asks questions, explores the meaning behind the moment",
      gradient: "from-[#9b87f5] to-[#b8a9f7]"
    },
    {
      title: "Writer",
      icon: PenTool,
      description: "Translates emotions into narrative and text",
      gradient: "from-[#f1f1f1] to-[#ffffff]"
    },
    {
      title: "Poet",
      icon: ScrollText,
      description: "Distills the essence of an idea into rhythmic expression",
      gradient: "from-[#fde1d3] to-[#fef0e8]"
    },
    {
      title: "All Roles",
      icon: Globe,
      description: "Blends multiple forms of expression into one voice",
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
              <div
                key={role.title}
                className={`
                  p-6 rounded-xl backdrop-blur-sm
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
            ))}
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            <WeeklyPrompt />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Prompts;
