import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link as LinkIcon, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const ReferralLinkCard = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  // In a real app, this would come from the user's profile
  const userId = crypto.randomUUID();
  const referralLink = `${window.location.origin}/auth?ref=${userId}`;

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      toast({
        title: "Success",
        description: "Referral link copied to clipboard!",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy referral link:", err);
      toast({
        title: "Error",
        description: "Failed to copy referral link",
        variant: "destructive",
      });
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
            className="px-4 py-2 bg-purple-500 rounded-md hover:bg-purple-600 transition-colors flex items-center gap-2"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Share this link to earn commissions from referrals
        </p>
      </CardContent>
    </Card>
  );
};