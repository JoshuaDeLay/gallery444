
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Plus, Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { GroupInvitation } from "@/components/GroupInvitation";

interface Profile {
  full_name: string | null;
  avatar_url: string | null;
}

interface GroupMember {
  user_id: string;
  profile: Profile;
}

interface MindfulnessGroup {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
  owner_id: string;
  members: GroupMember[];
}

const Groups = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);

  const { data: groups, isLoading, refetch } = useQuery({
    queryKey: ['mindfulness-groups'],
    queryFn: async () => {
      // First, fetch the groups
      const { data: groupsData, error: groupsError } = await supabase
        .from('mindfulness_groups')
        .select('*')
        .order('created_at', { ascending: false });

      if (groupsError) throw groupsError;

      // Then, for each group, fetch its members and their profiles
      const groupsWithMembers = await Promise.all(groupsData.map(async (group) => {
        const { data: membersData, error: membersError } = await supabase
          .from('mindfulness_group_members')
          .select('user_id')
          .eq('group_id', group.id);

        if (membersError) throw membersError;

        const members = await Promise.all(membersData.map(async (member) => {
          const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('full_name, avatar_url')
            .eq('id', member.user_id)
            .single();

          if (profileError) throw profileError;

          return {
            user_id: member.user_id,
            profile: profileData
          };
        }));

        return {
          ...group,
          members
        };
      }));

      return groupsWithMembers as MindfulnessGroup[];
    }
  });

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

      const { error: memberError } = await supabase
        .from('mindfulness_group_members')
        .insert([
          { group_id: group.id, user_id: user.id }
        ]);

      if (memberError) throw memberError;

      toast.success("Group created successfully!");
      setIsCreating(false);
      setName("");
      setDescription("");
      refetch();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGroupClick = (groupId: string) => {
    if (selectedGroupId === groupId) {
      setSelectedGroupId(null);
    } else {
      setSelectedGroupId(groupId);
    }
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif text-gallery-accent">Mindfulness Groups</h1>
          <Button
            onClick={() => setIsCreating(true)}
            className="bg-gallery-accent hover:bg-gallery-accent/90"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Group
          </Button>
        </div>

        {isCreating && (
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
                  onClick={() => setIsCreating(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-gallery-accent" />
          </div>
        ) : groups?.length === 0 ? (
          <div className="text-center py-8">
            <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">No groups yet</h3>
            <p className="text-gray-500">Create your first mindfulness group to get started</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {groups?.map((group) => (
              <div
                key={group.id}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleGroupClick(group.id)}
              >
                <h3 className="font-medium text-lg mb-2">{group.name}</h3>
                {group.description && (
                  <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                )}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Members ({group.members.length})</h4>
                  <div className="flex -space-x-2">
                    {group.members.map((member) => (
                      <img
                        key={member.user_id}
                        src={member.profile.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.user_id}`}
                        alt={member.profile.full_name || "Member"}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
                {selectedGroupId === group.id && (
                  <div className="mt-4 border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Invite Members</h4>
                    <GroupInvitation groupId={group.id} onInviteSent={refetch} />
                  </div>
                )}
                <div className="text-xs text-gray-500 mt-4">
                  Created {new Date(group.created_at).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
};

export default Groups;
