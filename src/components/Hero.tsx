import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sage/20 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 bg-sage/30 rounded-full text-sm font-medium mb-6">
            Intelligent Investing
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Invest in Your Future with Confidence
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Experience the future of investing with AI-powered insights and professional-grade tools.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg"
          >
            Start Investing Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};