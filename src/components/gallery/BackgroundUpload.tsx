
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface BackgroundUploadProps {
  onBackgroundChange: (url: string) => void;
}

export const BackgroundUpload = ({ onBackgroundChange }: BackgroundUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);

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

      onBackgroundChange(imageUrl.publicUrl);
      toast.success("Background image updated successfully");
    } catch (error) {
      console.error('Error uploading background:', error);
      toast.error("Failed to upload background image");
    } finally {
      setIsUploading(false);
    }
  };

  return (
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
  );
};
