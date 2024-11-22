import { motion } from "framer-motion";
import { Shield, Gem, Trophy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const About = () => {
  const aboutPoints = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed & Regulated",
      description: "We are committed to staying at the forefront of industry innovation by investing significantly in proprietary technology that revolutionises how businesses understand and engage with their customers. Our cutting-edge tool is meticulously designed to delve into the intricacies of consumer behaviour and consumption patterns, unlocking actionable insights to drive consumer growth and sustainable success.",
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
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="text-purple-400">{point.icon}</div>
                      <h3 className="text-xl font-semibold text-white text-left">
                        {point.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-300 pt-4">{point.description}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};