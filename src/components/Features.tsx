import { motion } from "framer-motion";
import { LineChart, Wallet, Shield } from "lucide-react";

const features = [
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Smart Portfolio Analysis",
    description: "AI-powered insights to optimize your investment strategy",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Our Philosophy",
    description: "We believe success in the hospitality, leisure, retail, consumer and luxury goods industries requires more than just traditional strategies; it demands innovation, insight and a deep understanding of the unique challenges and opportunities within these sectors. Our philosophy is rooted in a commitment to providing exceptional strategic guidance and financial advisory services that transcend the ordinary. We are dedicated to helping our clients unlock their full potential by fostering innovation, enhancing customer experiences and optimising financial performance.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Bank-Level Security",
    description: "Your investments are protected with enterprise-grade security",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-purple-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-purple-900/10 hover:bg-purple-900/20 transition-all duration-300 border border-purple-500/20 relative group"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
