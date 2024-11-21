import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Gift, Wallet, Battery, ClipboardList, Lock, UserPlus } from "lucide-react";

const Profile = () => {
  // This would typically come from a real backend/state management
  const userBalance = 25000.00;

  const features = [
    { icon: Gift, title: "Claim Bonus", description: "Get your daily rewards" },
    { icon: Wallet, title: "Withdraw", description: "Transfer to your bank" },
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
    </div>
  );
};

export default Profile;