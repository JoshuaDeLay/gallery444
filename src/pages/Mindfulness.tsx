
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Mindfulness = () => {
  const [message, setMessage] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendReminder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Get current user's ID
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("You must be logged in to send reminders");
        return;
      }

      // Create the mindfulness reminder directly with recipient email
      const { error } = await supabase
        .from('mindfulness_reminders')
        .insert({
          sender_id: user.id,
          recipient_id: recipientEmail, // Store email directly as recipient
          message,
          type: 'breath'
        });

      if (error) {
        console.error('Error sending reminder:', error);
        toast.error("Failed to send reminder");
      } else {
        toast.success("Mindfulness reminder sent!");
        setMessage("");
        setRecipientEmail("");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif text-gallery-accent mb-8">Mindfulness Check-in</h1>
        
        <div className="max-w-md mx-auto space-y-6">
          <form onSubmit={handleSendReminder} className="space-y-4">
            <div>
              <label htmlFor="recipient" className="block text-sm font-medium text-gallery-warm mb-1">
                Recipient Email
              </label>
              <Input
                id="recipient"
                type="email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                placeholder="Enter recipient's email"
                required
                className="w-full"
              />
            </div>
            
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
              disabled={isLoading}
              className="w-full bg-gallery-accent hover:bg-gallery-accent/90 text-white"
            >
              {isLoading ? "Sending..." : "Send Reminder"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Mindfulness;
