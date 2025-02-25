
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { UserRole } from "@/integrations/supabase/customTypes";

interface CreateGroupFormProps {
  onCancel: () => void;
  onSuccess: () => void;
}

export const CreateGroupForm = ({ onCancel, onSuccess }: CreateGroupFormProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreateGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { data: group, error: groupError } = await supabase
        .from('mindfulness_groups')
        .insert([
          { name, description, owner_id: user.id }
        ])
        .select()
        .single();

      if (groupError) throw groupError;

      // Add the creator as a member with the writer role
      const { error: memberError } = await supabase
        .from('group_members')
        .insert([
          { 
            group_id: group.id, 
            user_id: user.id,
            role: 'writer' as UserRole 
          }
        ]);

      if (memberError) throw memberError;

      toast.success("Group created successfully!");
      onSuccess();
      setName("");
      setDescription("");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleCreateGroup} className="space-y-4 max-w-md mx-auto">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Group Name
          </label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter group name"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your group's purpose"
            className="min-h-[100px]"
          />
        </div>
        <div className="flex gap-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gallery-accent hover:bg-gallery-accent/90"
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Group
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
