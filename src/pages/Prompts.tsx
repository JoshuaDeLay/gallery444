
import { Navigation } from "@/components/Navigation";
import { WeeklyPrompt } from "@/components/WeeklyPrompt";
import { BottomNav } from "@/components/BottomNav";
import { CommentWithVoice } from "@/components/CommentWithVoice";

const Prompts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-murakami.cream to-murakami.pink/20 pb-20">
      <Navigation />
      <div className="container mx-auto px-4 min-h-[calc(100vh-8rem)]">
        <div className="w-full max-w-3xl mx-auto space-y-12 py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-center mb-12 animate-fade-up text-murakami.wood
            [text-shadow:_2px_2px_4px_rgb(94_75_86_/_20%)]
            italic">
            Daily Reflections
          </h1>
          <WeeklyPrompt />
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-murakami.wood mb-6 italic">Community Reflections</h2>
            <CommentWithVoice />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Prompts;
