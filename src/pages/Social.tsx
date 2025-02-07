
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";

const Social = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="font-serif text-3xl md:text-4xl text-center mb-4">
          Your Creative Circle
        </h1>
        <p className="text-center text-gallery-warm mb-12">
          Connect with fellow creators and share your visual stories.
        </p>
      </div>
      <BottomNav />
    </div>
  );
};

export default Social;
