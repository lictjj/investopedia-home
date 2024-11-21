import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link as LinkIcon } from "lucide-react";
import { useState } from "react";

export const ReferralLinkCard = () => {
  const [referralLink] = useState(`https://yourdomain.com/ref/${crypto.randomUUID()}`);

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      console.log("Referral link copied:", referralLink);
    } catch (err) {
      console.error("Failed to copy referral link:", err);
    }
  };

  return (
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
  );
};