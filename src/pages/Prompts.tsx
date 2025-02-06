import { Navigation } from "@/components/Navigation";
import { WeeklyPrompt } from "@/components/WeeklyPrompt";

const Prompts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="font-serif text-3xl md:text-4xl text-center mb-12">
          Weekly Prompts
        </h1>
        <WeeklyPrompt />
      </div>
    </div>
  );
};

export default Prompts;