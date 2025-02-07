
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mic, Play, Square } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Comment {
  id: string;
  text: string;
  audioUrl?: string;
}

export const CommentWithVoice = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const { toast } = useToast();

  const handleAddComment = () => {
    if (!newComment.trim()) {
      toast({
        title: "Comment cannot be empty",
        variant: "destructive",
      });
      return;
    }

    const comment: Comment = {
      id: Date.now().toString(),
      text: newComment,
    };

    setComments((prev) => [...prev, comment]);
    setNewComment("");
    
    toast({
      title: "Comment added successfully",
    });
  };

  const handleTextToSpeech = async (text: string) => {
    try {
      const voice_id = "EXAVITQu4vr4xnSDxMaL"; // Sarah voice
      const response = await fetch("https://api.elevenlabs.io/v1/text-to-speech/" + voice_id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": import.meta.env.VITE_ELEVEN_LABS_API_KEY || "",
        },
        body: JSON.stringify({
          text,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to convert text to speech");
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      setComments(prevComments => 
        prevComments.map(comment => 
          comment.text === text ? { ...comment, audioUrl } : comment
        )
      );
    } catch (error) {
      toast({
        title: "Error converting text to speech",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Textarea
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[120px] text-murakami.wood bg-white/80 border-murakami.wood/20"
        />
        <div className="flex justify-end gap-2">
          <Button
            onClick={handleAddComment}
            className="bg-murakami.wood text-white hover:bg-murakami.wood/90"
          >
            Add Comment
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white/80 p-6 rounded-lg shadow-lg space-y-4"
          >
            <p className="text-murakami.wood">{comment.text}</p>
            <div className="flex justify-end gap-2">
              {!comment.audioUrl ? (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleTextToSpeech(comment.text)}
                  className="hover:bg-murakami.wood/10"
                >
                  <Mic className="h-4 w-4" />
                </Button>
              ) : (
                <audio
                  controls
                  src={comment.audioUrl}
                  className="h-8 w-full max-w-[200px]"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
