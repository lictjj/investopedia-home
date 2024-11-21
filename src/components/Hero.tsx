import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  console.log("Hero component - Login status:", isLoggedIn);

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        {/* Animated background elements */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 blur-3xl"
            initial={{ opacity: 0.5 }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: index * 2,
            }}
            style={{
              width: `${300 + index * 100}px`,
              height: `${300 + index * 100}px`,
              left: `${index * 30}%`,
              top: `${20 + index * 10}%`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 bg-purple-900/30 rounded-full text-sm font-medium mb-6 text-pink-300"
          >
            Intelligent Investing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white"
          >
            Invest in Your Future with Confidence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Experience the future of investing with AI-powered insights and professional-grade tools.
          </motion.p>
          <Link to={isLoggedIn ? "/products" : "/auth"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Investing Now</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};