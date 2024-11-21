import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Profile = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bonusCode, setBonusCode] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Check for login and admin status
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const userBalance = 0;

  const handleClaimBonus = () => {
    toast({
      title: "Bonus Claimed!",
      description: `Successfully claimed bonus with code: ${bonusCode}`,
    });
    setBonusCode("");
    setIsDialogOpen(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-16 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl font-bold text-purple-400">Welcome!</h1>
            <p className="text-gray-300 text-lg">Please log in or register to access your profile</p>
            <Button 
              onClick={() => navigate("/auth")}
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-lg text-lg"
            >
              Login / Register
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  const features = [
    { 
      title: isAdmin ? "Admin Dashboard" : "Current Balance",
      value: isAdmin ? "Admin Access" : `$${userBalance}`,
      action: "View Details",
      onClick: () => console.log("View balance details"),
    },
    { 
      title: "Bonus Section",
      value: "Claim your bonus below",
      action: "Open",
      onClick: () => setIsDialogOpen(true),
    },
    { 
      title: "Settings",
      value: "Manage your preferences",
      action: "Go to Settings",
      onClick: () => console.log("Navigating to settings"),
    },
    { 
      title: "Logout",
      value: "Sign out of your account",
      action: "Logout",
      onClick: () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("isAdmin");
        navigate("/auth");
      },
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            {isAdmin ? "Admin Profile" : "Your Profile"}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <h3 className="text-lg font-medium text-gray-200 mb-2">{feature.title}</h3>
                <p className="text-2xl font-bold text-purple-400 mb-4">{feature.value}</p>
                <Button
                  onClick={feature.onClick}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                >
                  {feature.action}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Bonus Code</DialogTitle>
            <DialogDescription>
              Enter your bonus code to claim your reward
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Enter code"
              value={bonusCode}
              onChange={(e) => setBonusCode(e.target.value)}
            />
            <Button onClick={handleClaimBonus}>Claim Bonus</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
