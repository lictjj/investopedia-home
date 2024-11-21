export interface TeamMember {
  name: string;
  joinDate: string;
  status: "Active" | "Inactive";
  earnings: number;
  level: number;
  referredBy: string | null;
  referrals: number;
}

export interface TeamStats {
  totalMembers: number;
  activeMembers: number;
  totalEarnings: number;
}