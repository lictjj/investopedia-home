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
    title: "Commission-Free Trading",
    description: "Trade stocks and ETFs without any commission fees",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Bank-Level Security",
    description: "Your investments are protected with enterprise-grade security",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-sage/10 hover:bg-sage/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};