
export interface Profile {
  full_name: string | null;
  avatar_url: string | null;
}

export interface GroupMember {
  user_id: string;
  profile: Profile;
}

export interface MindfulnessGroup {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
  owner_id: string;
  members: GroupMember[];
}
