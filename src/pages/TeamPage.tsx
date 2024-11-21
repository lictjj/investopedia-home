import Navigation from "@/components/Navigation";
import { ReferralLinkCard } from "@/components/team/ReferralLinkCard";
import { TeamStatsCards } from "@/components/team/TeamStatsCards";
import { TeamMembersTable } from "@/components/team/TeamMembersTable";
import { TeamMember } from "@/types/team";

const TeamPage = () => {
  // Initialize with 0 members and 0 balance for new users
  const teamStats = {
    totalMembers: 0,
    activeMembers: 0,
    totalEarnings: 0,
  };

  // Empty array for new users, will be populated as they get referrals
  const teamMembers: TeamMember[] = [];

  console.log("Rendering TeamPage with stats:", teamStats);
  console.log("Team members data:", teamMembers);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          My Team Overview
        </h1>

        <ReferralLinkCard />
        <TeamStatsCards {...teamStats} />
        <TeamMembersTable members={teamMembers} />
      </main>
    </div>
  );
};

export default TeamPage;