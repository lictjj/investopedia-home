import { Users, Copy, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const ReferralArea = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <Card className="bg-zinc-900/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105 duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Users className="h-5 w-5 text-purple-400" />
            Refer Friends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => setIsOpen(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
          >
            Share Referral Link
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-zinc-900/95 border border-purple-500/20">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-400" />
              Your Referral Link
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-gray-400">
              Share this link with your friends. When they sign up using your link, they'll be added to your team as Level 1 members.
            </p>
            <div className="flex items-center gap-2 bg-zinc-800/50 p-3 rounded-lg">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 bg-transparent border-none focus:outline-none text-sm"
              />
              <Button
                size="sm"
                variant="ghost"
                onClick={copyReferralLink}
                className="flex items-center gap-2"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <div className="text-sm text-gray-400">
              <p className="font-semibold mb-2">Benefits:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Earn commissions from your referrals' investments</li>
                <li>Build your team and increase your earning potential</li>
                <li>Track your team's performance in the Team section</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};