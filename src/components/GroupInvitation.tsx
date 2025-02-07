
import { useState } from "react";
import { PlusCircle, Mail, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface GroupInvitationProps {
  groupId: string;
  onInviteSent: () => void;
}

export const GroupInvitation = ({ groupId, onInviteSent }: GroupInvitationProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('group_invitations')
        .insert([
          { group_id: groupId, invitee_email: email }
        ]);

      if (error) throw error;
      
      toast.success("Invitation sent successfully!");
      setEmail("");
      onInviteSent();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleInvite} className="flex gap-2">
      <Input
        type="email"
        placeholder="Enter email to invite"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
        required
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            <PlusCircle className="h-4 w-4 mr-2" />
            Invite
          </>
        )}
      </Button>
    </form>
  );
};
