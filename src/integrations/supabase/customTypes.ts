
export type UserRole = 'writer' | 'painter' | 'photographer' | 'philosopher';

export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
}

export interface GroupMember {
  id: string;
  group_id: string;
  user_id: string;
  role: UserRole;
  joined_at: string;
  profile: Profile;
}

export interface MindfulnessGroup {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
  owner_id: string;
  invite_code: string;
  members: GroupMember[];
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: {
          id: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
        };
      };
      mindfulness_groups: {
        Row: Omit<MindfulnessGroup, 'members'>;
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          created_at?: string;
          owner_id: string;
          invite_code?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          created_at?: string;
          owner_id?: string;
          invite_code?: string;
        };
      };
      group_members: {
        Row: Omit<GroupMember, 'profile'>;
        Insert: {
          id?: string;
          group_id: string;
          user_id: string;
          role: UserRole;
          joined_at?: string;
        };
        Update: {
          id?: string;
          group_id?: string;
          user_id?: string;
          role?: UserRole;
          joined_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      random_role: {
        Args: Record<PropertyKey, never>;
        Returns: UserRole;
      };
    };
    Enums: {
      user_role: UserRole;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
