import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Award } from "lucide-react";

interface TeamStatsProps {
  totalMembers: number;
  activeMembers: number;
  totalEarnings: number;
}

export const TeamStatsCards = ({ totalMembers, activeMembers, totalEarnings }: TeamStatsProps) => {
  return (
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
            {totalMembers}
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
            {activeMembers}
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
            ${totalEarnings.toFixed(2)}
          </span>
          <p className="text-sm text-gray-400 mt-1">Total team commissions</p>
        </CardContent>
      </Card>
    </div>
  );
};