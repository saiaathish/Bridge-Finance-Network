export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string | null;
          full_name: string | null;
          role: string | null;
          tier: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id: string;
          email?: string | null;
          full_name?: string | null;
          role?: string | null;
          tier?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          email?: string | null;
          full_name?: string | null;
          role?: string | null;
          tier?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      registration_codes: {
        Row: {
          id: string;
          code: string;
          tier: string | null;
          is_used: boolean | null;
          used_by: string | null;
          expires_at: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          code: string;
          tier?: string | null;
          is_used?: boolean | null;
          used_by?: string | null;
          expires_at?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          code?: string;
          tier?: string | null;
          is_used?: boolean | null;
          used_by?: string | null;
          expires_at?: string | null;
          created_at?: string | null;
        };
        Relationships: [];
      };
      tier_history: {
        Row: {
          id: string;
          user_id: string;
          previous_tier: string | null;
          new_tier: string | null;
          changed_by: string | null;
          reason: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          previous_tier?: string | null;
          new_tier?: string | null;
          changed_by?: string | null;
          reason?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          previous_tier?: string | null;
          new_tier?: string | null;
          changed_by?: string | null;
          reason?: string | null;
          created_at?: string | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
