
import { Navigation } from "@/components/Navigation";
import { WeeklyPrompt } from "@/components/WeeklyPrompt";
import { BottomNav } from "@/components/BottomNav";
import { CommentWithVoice } from "@/components/CommentWithVoice";

const Prompts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-murakami.cream to-white pb-20">
      <Navigation />
      <div className="container mx-auto px-4 min-h-[calc(100vh-8rem)]">
        <div className="w-full max-w-4xl mx-auto space-y-8 py-8">
          <h1 className="font-serif text-2xl md:text-3xl text-center mb-8 animate-fade-up text-murakami.wood
            italic tracking-wide">
            Daily Reflections
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <WeeklyPrompt />
            <div className="space-y-4">
              <h2 className="font-serif text-xl text-murakami.wood italic tracking-wide">
                Community Reflections
              </h2>
              <CommentWithVoice />
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Prompts;
