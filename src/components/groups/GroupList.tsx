
import { Loader2, Users } from "lucide-react";
import { GroupCard } from "./GroupCard";
import { MindfulnessGroup } from "@/types/groups";

interface GroupListProps {
  groups: MindfulnessGroup[] | undefined;
  isLoading: boolean;
  selectedGroupId: string | null;
  onGroupClick: (groupId: string) => void;
  onInviteSent: () => void;
}

export const GroupList = ({
  groups,
  isLoading,
  selectedGroupId,
  onGroupClick,
  onInviteSent
}: GroupListProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gallery-accent" />
      </div>
    );
  }

  if (!groups || groups.length === 0) {
    return (
      <div className="text-center py-8">
        <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-1">No groups yet</h3>
        <p className="text-gray-500">Create your first mindfulness group to get started</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <GroupCard
          key={group.id}
          {...group}
          isSelected={selectedGroupId === group.id}
          onClick={() => onGroupClick(group.id)}
          onInviteSent={onInviteSent}
        />
      ))}
    </div>
  );
};
