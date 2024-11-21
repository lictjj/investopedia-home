import { motion } from "framer-motion";

const stats = [
  { value: "$2.5B+", label: "Assets Managed" },
  { value: "99.9%", label: "Uptime" },
  { value: "250K+", label: "Active Users" },
];

export const Stats = () => {
  return (
    <section className="py-24 bg-purple-900/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                {stat.value}
              </h2>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};