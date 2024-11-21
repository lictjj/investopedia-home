import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const CTA = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/auth", { state: { defaultTab: "register" } });
  };

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Investing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of investors who trust us with their financial future.
          </p>
          <motion.button
            onClick={handleCreateAccount}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg hover:shadow-purple-500/25"
          >
            Create Free Account
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};