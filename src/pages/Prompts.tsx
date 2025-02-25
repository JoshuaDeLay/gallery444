
import { MessageSquare, MessageCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Prompt {
  id: string;
  title: string;
  description: string;
  created_at: string;
  responses?: number;
}

const Prompts = () => {
  const { data: prompts, isLoading } = useQuery({
    queryKey: ['prompts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('mindfulness_prompts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast.error('Failed to load prompts');
        throw error;
      }

      return data as Prompt[];
    }
  });

  const renderPromptList = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gallery-accent" />
        </div>
      );
    }

    if (!prompts?.length) {
      return (
        <div className="text-center py-8 text-gray-500">
          No prompts available at the moment
        </div>
      );
    }

    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {prompts.map((prompt) => (
          <div
            key={prompt.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2 text-gallery-accent">
              {prompt.title}
            </h3>
            <p className="text-gray-600 mb-4">{prompt.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MessageCircle className="h-4 w-4" />
                <span>{prompt.responses || 0} responses</span>
              </div>
              <div className="text-sm text-gray-400">
                {new Date(prompt.created_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-serif text-gallery-accent mb-2">
          Daily Mindfulness Prompts
        </h1>
        <p className="text-gray-600">
          Explore and respond to our collection of mindfulness prompts
        </p>
      </div>
      {renderPromptList()}
    </div>
  );
};

export default Prompts;
