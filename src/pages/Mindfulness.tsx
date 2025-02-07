
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Circle, Heart, Lotus } from "lucide-react";

// Mock data for example profiles
const exampleProfiles = [
  { id: 1, name: "Sarah M.", avatar: "/placeholder.svg" },
  { id: 2, name: "John D.", avatar: "/placeholder.svg" },
  { id: 3, name: "Emma W.", avatar: "/placeholder.svg" },
  { id: 4, name: "Michael R.", avatar: "/placeholder.svg" },
  { id: 5, name: "Lisa K.", avatar: "/placeholder.svg" },
];

const Mindfulness = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProfiles, setSelectedProfiles] = useState<number[]>([]);

  const handleSendReminder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("You must be logged in to send reminders");
        return;
      }

      // Create mindfulness reminders for each selected profile
      for (const profileId of selectedProfiles) {
        const { error } = await supabase
          .from('mindfulness_reminders')
          .insert({
            sender_id: user.id,
            recipient_id: profileId.toString(), // In real app, this would be the actual user ID
            message,
            type: 'breath'
          });

        if (error) {
          console.error('Error sending reminder:', error);
          toast.error("Failed to send reminder");
          return;
        }
      }

      toast.success("Mindfulness reminders sent!");
      setMessage("");
      setSelectedProfiles([]);
    } catch (error) {
      console.error('Error:', error);
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleProfile = (profileId: number) => {
    setSelectedProfiles(prev => 
      prev.includes(profileId)
        ? prev.filter(id => id !== profileId)
        : [...prev, profileId]
    );
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif text-gallery-accent mb-8">Mindfulness Circle</h1>
        
        <div className="max-w-md mx-auto space-y-8">
          {/* Circle of Profiles */}
          <div className="relative w-64 h-64 mx-auto">
            {exampleProfiles.map((profile, index) => {
              const angle = (index * 2 * Math.PI) / exampleProfiles.length;
              const radius = 100; // Adjust this value to change circle size
              const left = radius * Math.cos(angle - Math.PI/2) + radius;
              const top = radius * Math.sin(angle - Math.PI/2) + radius;

              return (
                <div
                  key={profile.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform ${
                    selectedProfiles.includes(profile.id) ? 'scale-110 ring-2 ring-gallery-accent rounded-full' : ''
                  }`}
                  style={{
                    left: `${left}px`,
                    top: `${top}px`,
                  }}
                  onClick={() => toggleProfile(profile.id)}
                >
                  <Avatar className="w-12 h-12 cursor-pointer hover:scale-105 transition-transform">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
              );
            })}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Lotus className="w-8 h-8 text-gallery-accent" />
            </div>
          </div>

          <form onSubmit={handleSendReminder} className="space-y-4">
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gallery-warm mb-1">
                Mindfulness Message
              </label>
              <Input
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Take a deep breath and observe..."
                required
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading || selectedProfiles.length === 0}
              className="w-full bg-gallery-accent hover:bg-gallery-accent/90 text-white"
            >
              {isLoading ? "Sending..." : `Send to ${selectedProfiles.length} ${selectedProfiles.length === 1 ? 'person' : 'people'}`}
            </Button>
          </form>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Mindfulness;
