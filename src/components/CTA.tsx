import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Start Investing?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of investors who trust us with their financial future.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg"
          >
            Create Free Account
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};