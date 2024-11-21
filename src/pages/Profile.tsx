import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold text-purple-400">Hi there!</h1>
          <p className="text-gray-300">Welcome to your profile page</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;