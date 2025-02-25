
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Plus } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { CreateGroupForm } from "@/components/groups/CreateGroupForm";
import { GroupList } from "@/components/groups/GroupList";
import { MindfulnessGroup } from "@/types/groups";

const Groups = () => {
  const [isCreating, setIsCreating] = useState(false);
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

      // Then, for each group, fetch its members
      const groupsWithMembers = await Promise.all(groupsData.map(async (group) => {
        const { data: membersData, error: membersError } = await supabase
          .from('group_members')
          .select('user_id, role')
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
            role: member.role,
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
          <CreateGroupForm
            onCancel={() => setIsCreating(false)}
            onSuccess={() => {
              setIsCreating(false);
              refetch();
            }}
          />
        )}

        <GroupList
          groups={groups}
          isLoading={isLoading}
          selectedGroupId={selectedGroupId}
          onGroupClick={handleGroupClick}
          onInviteSent={refetch}
        />
      </main>
      <BottomNav />
    </div>
  );
};

export default Groups;
