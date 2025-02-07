
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";

const Memories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-200 to-orange-200 pb-20">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="font-serif text-3xl md:text-4xl text-center mb-4">
          Your Gallery Memories
        </h1>
        <p className="text-center text-gallery-warm mb-12">
          Revisit your creative journey through past galleries and moments.
        </p>
      </div>
      <BottomNav />
    </div>
  );
};

export default Memories;
