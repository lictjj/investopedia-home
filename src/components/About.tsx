import { motion } from "framer-motion";
import { Shield, Gem, Trophy } from "lucide-react";

export const About = () => {
  const aboutPoints = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed & Regulated",
      description: "Operating under strict financial regulations to protect your investments",
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Premium Service",
      description: "Dedicated support team available to assist you with your investment needs",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Market Leaders",
      description: "Trusted by thousands of investors across Kenya with proven track record",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-blue-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            About Sonder Limited
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading investment platform in Kenya, combining cutting-edge technology with financial expertise to help you grow your wealth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-blue-900/10 border border-blue-500/20 hover:bg-blue-900/20 transition-all duration-300"
            >
              <div className="mb-6 text-purple-400">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">{point.title}</h3>
              <p className="text-gray-300">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};