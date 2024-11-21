import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Gift, Wallet, Battery, ClipboardList, Lock, UserPlus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bonusCode, setBonusCode] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Initialize balance as 0 for new users
  const userBalance = 0;

  const handleClaimBonus = () => {
    console.log("Claiming bonus with code:", bonusCode);
    toast({
      title: "Bonus Code Submitted",
      description: `Your bonus code ${bonusCode} has been submitted.`,
    });
    setBonusCode("");
    setIsDialogOpen(false);
  };

  const features = [
    { 
      icon: Gift, 
      title: "Claim Bonus", 
      description: "Get your daily rewards",
      onClick: () => setIsDialogOpen(true)
    },
    { 
      icon: Wallet, 
      title: "Withdraw", 
      description: "Transfer to your bank",
      onClick: () => navigate("/withdraw")
    },
    { icon: Battery, title: "Recharge", description: "Add funds to your account" },
    { icon: ClipboardList, title: "Transactions", description: "View your history" },
    { icon: Lock, title: "Change Password", description: "Update your security" },
    { icon: UserPlus, title: "Refer Friends", description: "Earn rewards together" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-16 space-y-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold text-purple-400">Hi there!</h1>
          <p className="text-gray-300">Welcome to your profile page</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Card className="bg-zinc-900 border-purple-500/20 p-6 w-[300px]">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Your Balance</p>
              <p className="text-3xl font-bold text-white">
                ${userBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
              onClick={feature.onClick}
            >
              <Card className="bg-zinc-900/50 border-purple-500/10 hover:border-purple-500/30 p-6 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg text-purple-300 group-hover:text-purple-200">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-zinc-900 border-purple-500/20">
          <DialogHeader>
            <DialogTitle className="text-xl text-purple-400">Claim Your Bonus</DialogTitle>
            <DialogDescription className="text-gray-400">
              Enter your bonus code below to claim your rewards.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Input
              placeholder="Enter bonus code"
              value={bonusCode}
              onChange={(e) => setBonusCode(e.target.value)}
              className="bg-zinc-800 border-purple-500/20 text-white"
            />
            <Button 
              onClick={handleClaimBonus}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white"
            >
              Claim Bonus
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;