
import { GroupInvitation } from "@/components/GroupInvitation";

interface Profile {
  full_name: string | null;
  avatar_url: string | null;
}

interface GroupMember {
  user_id: string;
  profile: Profile;
}

interface GroupCardProps {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
  members: GroupMember[];
  isSelected: boolean;
  onClick: () => void;
  onInviteSent: () => void;
}

export const GroupCard = ({
  id,
  name,
  description,
  created_at,
  members,
  isSelected,
  onClick,
  onInviteSent
}: GroupCardProps) => {
  return (
    <div
      className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <h3 className="font-medium text-lg mb-2">{name}</h3>
      {description && (
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      )}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Members ({members.length})</h4>
        <div className="flex -space-x-2">
          {members.map((member) => (
            <img
              key={member.user_id}
              src={member.profile.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.user_id}`}
              alt={member.profile.full_name || "Member"}
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
        </div>
      </div>
      {isSelected && (
        <div className="mt-4 border-t pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Invite Members</h4>
          <GroupInvitation groupId={id} onInviteSent={onInviteSent} />
        </div>
      )}
      <div className="text-xs text-gray-500 mt-4">
        Created {new Date(created_at).toLocaleDateString()}
      </div>
    </div>
  );
};
