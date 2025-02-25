
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
}

export interface MindfulnessGroup {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
  owner_id: string;
  invite_code: string | null;
}

export interface GroupInvitation {
  id: string;
  group_id: string;
  invitee_email: string;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
}

export interface GallerySettings {
  id: string;
  user_id: string;
  gallery_name: string;
  created_at: string;
  updated_at: string;
}

export interface MindfulnessReminder {
  id: string;
  sender_id: string;
  recipient_id: string;
  message: string;
  created_at: string;
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
        Row: MindfulnessGroup;
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          created_at?: string;
          owner_id: string;
          invite_code?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          created_at?: string;
          owner_id?: string;
          invite_code?: string | null;
        };
      };
      group_members: {
        Row: GroupMember;
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
      group_invitations: {
        Row: GroupInvitation;
        Insert: {
          id?: string;
          group_id: string;
          invitee_email: string;
          status?: 'pending' | 'accepted' | 'rejected';
          created_at?: string;
        };
        Update: {
          id?: string;
          group_id?: string;
          invitee_email?: string;
          status?: 'pending' | 'accepted' | 'rejected';
          created_at?: string;
        };
      };
      gallery_settings: {
        Row: GallerySettings;
        Insert: {
          id?: string;
          user_id: string;
          gallery_name: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          gallery_name?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      mindfulness_reminders: {
        Row: MindfulnessReminder;
        Insert: {
          id?: string;
          sender_id: string;
          recipient_id: string;
          message: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          sender_id?: string;
          recipient_id?: string;
          message?: string;
          created_at?: string;
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
