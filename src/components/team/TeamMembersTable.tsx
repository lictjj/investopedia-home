import { Users } from "lucide-react";
import { TeamMember } from "@/types/team";

interface TeamMembersTableProps {
  members: TeamMember[];
}

export const TeamMembersTable = ({ members }: TeamMembersTableProps) => {
  return (
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
            {members.map((member, index) => (
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
  );
};