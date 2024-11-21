import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Users, TrendingUp, Award, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

const TeamPage = () => {
  // This would typically come from an API/backend
  const teamStats = {
    totalMembers: 12,
    activeMembers: 8,
    totalEarnings: 2500.00,
  };

  // Mock referral data - in real app this would come from backend
  const [referralLink] = useState(`https://yourdomain.com/ref/${crypto.randomUUID()}`);
  
  const teamMembers = [
    {
      name: "Alice Smith",
      joinDate: "2024-01-15",
      status: "Active",
      earnings: 850.00,
      level: 1,
      referredBy: null,
      referrals: 2,
    },
    {
      name: "Bob Johnson",
      joinDate: "2024-01-20",
      status: "Active",
      earnings: 650.00,
      level: 2,
      referredBy: "Alice Smith",
      referrals: 0,
    },
    {
      name: "Carol Williams",
      joinDate: "2024-02-01",
      status: "Inactive",
      earnings: 300.00,
      level: 2,
      referredBy: "Alice Smith",
      referrals: 1,
    },
  ];

  console.log("Rendering TeamPage with stats:", teamStats);
  console.log("Team members data:", teamMembers);

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      console.log("Referral link copied:", referralLink);
    } catch (err) {
      console.error("Failed to copy referral link:", err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          My Team Overview
        </h1>

        {/* Referral Link Card */}
        <Card className="bg-gray-900 border-purple-500/20 mb-8">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl flex items-center gap-2">
              <LinkIcon className="h-5 w-5 text-purple-400" />
              Your Referral Link
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 bg-gray-800 rounded-md px-3 py-2 text-sm"
              />
              <button
                onClick={copyReferralLink}
                className="px-4 py-2 bg-purple-500 rounded-md hover:bg-purple-600 transition-colors"
              >
                Copy Link
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Share this link to earn commissions from referrals
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-900 border-purple-500/20">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                Total Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold text-purple-400">
                {teamStats.totalMembers}
              </span>
              <p className="text-sm text-gray-400 mt-1">People in your network</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-purple-500/20">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-400" />
                Active Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold text-purple-400">
                {teamStats.activeMembers}
              </span>
              <p className="text-sm text-gray-400 mt-1">Currently active users</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-purple-500/20">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-400" />
                Team Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold text-purple-400">
                ${teamStats.totalEarnings.toFixed(2)}
              </span>
              <p className="text-sm text-gray-400 mt-1">Total team commissions</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-400" />
            Team Members
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4">Member</th>
                  <th className="text-left py-3 px-4">Join Date</th>
                  <th className="text-left py-3 px-4">Level</th>
                  <th className="text-left py-3 px-4">Referred By</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-right py-3 px-4">Earnings</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="py-3 px-4">{member.name}</td>
                    <td className="py-3 px-4">{member.joinDate}</td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-2 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400">
                        Level {member.level}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {member.referredBy || "-"}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs ${
                          member.status === "Active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {member.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      ${member.earnings.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamPage;