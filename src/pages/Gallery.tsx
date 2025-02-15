
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { GalleryHeader } from "@/components/gallery/GalleryHeader";
import { CountdownTimer } from "@/components/gallery/CountdownTimer";
import { toast } from "sonner";

const Gallery = () => {
  const [galleryName, setGalleryName] = useState("The Grand Gallery");

  useEffect(() => {
    const fetchGallerySettings = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('gallery_settings')
          .select('gallery_name')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) {
          console.error('Error fetching gallery settings:', error);
          return;
        }

        if (data) {
          setGalleryName(data.gallery_name);
        } else {
          const { error: insertError } = await supabase
            .from('gallery_settings')
            .insert({ 
              user_id: user.id,
            });

          if (insertError) {
            console.error('Error creating gallery settings:', insertError);
            toast.error("Failed to initialize gallery settings");
          }
        }
      }
    };

    fetchGallerySettings();
  }, []);

  return (
    <div className="min-h-screen bg-[#E6D5A7] pb-20 relative overflow-hidden">
      <Navigation />
      <div className="container mx-auto px-4 min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center relative">
        <div className="max-w-4xl w-full text-center space-y-8 backdrop-blur-sm bg-white/20 p-12 rounded-2xl shadow-lg border border-white/30 animate-fade-up">
          <GalleryHeader galleryName={galleryName} setGalleryName={setGalleryName} />
          <p className="font-serif text-gallery.accent/80 text-xl leading-relaxed max-w-xl mx-auto italic">
            Behind these doors lie extraordinary creations waiting to be unveiled.
          </p>
          <CountdownTimer />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Gallery;

