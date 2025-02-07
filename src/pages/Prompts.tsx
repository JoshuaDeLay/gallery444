
import { Navigation } from "@/components/Navigation";
import { WeeklyPrompt } from "@/components/WeeklyPrompt";
import { BottomNav } from "@/components/BottomNav";

const Prompts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] pb-20">
      <Navigation />
      <div className="container mx-auto px-4 min-h-[calc(100vh-8rem)] flex items-center justify-center">
        <div className="w-full max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl text-center mb-12 animate-fade-up text-[#403E43]
            [text-shadow:_1px_1px_2px_rgb(0_0_0_/_10%)]">
            Daily Reflections
          </h1>
          <WeeklyPrompt />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Prompts;
