
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Upload } from "lucide-react";
import { toast } from "sonner";

const Gallery = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 3,
    minutes: 0,
    seconds: 0
  });
  const [galleryName, setGalleryName] = useState("The Grand Gallery");
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const fetchGallerySettings = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('gallery_settings')
          .select('gallery_name, background_image')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) {
          console.error('Error fetching gallery settings:', error);
          return;
        }

        if (data) {
          setGalleryName(data.gallery_name);
          setEditedName(data.gallery_name);
          if (data.background_image) {
            const { data: imageUrl } = supabase.storage
              .from('gallery_images')
              .getPublicUrl(data.background_image);
            setBackgroundImage(imageUrl.publicUrl);
          }
        } else {
          const { error: insertError } = await supabase
            .from('gallery_settings')
            .insert({ user_id: user.id });

          if (insertError) {
            console.error('Error creating gallery settings:', insertError);
          }
        }
      }
    };

    fetchGallerySettings();

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSave = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast.error("You must be logged in to update gallery settings");
      return;
    }

    const { error } = await supabase
      .from('gallery_settings')
      .update({ gallery_name: editedName })
      .eq('user_id', user.id);

    if (error) {
      console.error('Error updating gallery name:', error);
      toast.error("Failed to update gallery name");
      return;
    }

    setGalleryName(editedName);
    setIsEditing(false);
    toast.success("Gallery name updated successfully");
  };

  const handleBackgroundUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("You must be logged in to upload images");
        return;
      }

      const fileExt = file.name.split('.').pop();
      const filePath = `${crypto.randomUUID()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('gallery_images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { error: updateError } = await supabase
        .from('gallery_settings')
        .update({ background_image: filePath })
        .eq('user_id', user.id);

      if (updateError) {
        throw updateError;
      }

      const { data: imageUrl } = supabase.storage
        .from('gallery_images')
        .getPublicUrl(filePath);

      setBackgroundImage(imageUrl.publicUrl);
      toast.success("Background image updated successfully");
    } catch (error) {
      console.error('Error uploading background:', error);
      toast.error("Failed to upload background image");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gallery.soft via-murakami.cream to-murakami.teal/20 pb-20 relative overflow-hidden">
      {/* Artistic door background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-full h-full opacity-90 bg-cover bg-center transform transition-transform duration-1000 hover:scale-105"
          style={{ 
            backgroundImage: `url(${backgroundImage || '/lovable-uploads/7efa2f9c-52e4-474d-a4bd-61252fa24863.png'})`,
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: '50% 30%' 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-murakami.teal/30 via-transparent to-murakami.pink/30" />
        <div className="absolute w-96 h-96 bg-murakami.cream/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-murakami.teal/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" />
      </div>
      
      <Navigation />
      <div className="container mx-auto px-4 min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center relative">
        <div className="max-w-4xl w-full text-center space-y-8 backdrop-blur-sm bg-white/20 p-12 rounded-2xl shadow-lg border border-white/30 animate-fade-up">
          <div className="flex items-center justify-center gap-3">
            {isEditing ? (
              <div className="flex items-center gap-2">
                <Input
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="max-w-xs bg-white/60 border-white/40 text-gallery.accent/90"
                />
                <Button
                  onClick={handleSave}
                  className="bg-gallery.accent/90 hover:bg-gallery.accent text-white"
                >
                  Save
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setIsEditing(false);
                    setEditedName(galleryName);
                  }}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <>
                <h1 className="font-serif text-5xl text-gallery.accent/90 drop-shadow-sm tracking-wider italic">
                  {galleryName}
                </h1>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEditing(true)}
                  className="hover:bg-white/20"
                >
                  <Pencil className="h-4 w-4 text-gallery.accent/70" />
                </Button>
              </>
            )}
          </div>

          <div className="flex justify-center">
            <label htmlFor="background-upload">
              <Button 
                variant="outline" 
                className="bg-white/40 hover:bg-white/60"
                disabled={isUploading}
              >
                <Upload className="h-4 w-4 mr-2" />
                {isUploading ? 'Uploading...' : 'Change Background'}
              </Button>
            </label>
            <input
              id="background-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleBackgroundUpload}
              disabled={isUploading}
            />
          </div>

          <p className="font-serif text-gallery.accent/80 text-xl leading-relaxed max-w-xl mx-auto italic">
            Behind these doors lie extraordinary creations waiting to be unveiled.
          </p>

          <div className="grid grid-cols-4 gap-6 max-w-xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/40 shadow-sm flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-white/50">
                  <span className="text-3xl font-light text-gallery.accent font-serif tracking-widest transition-all duration-300 group-hover:scale-110">
                    {value.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className="text-gallery.accent/70 capitalize font-serif italic text-sm tracking-wide">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Gallery;

