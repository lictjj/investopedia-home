import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Profile = () => {
  // This would typically come from a real backend/state management
  const userBalance = 25000.00;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 flex flex-col items-center justify-center space-y-8">
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
      </div>
    </div>
  );
};

export default Profile;