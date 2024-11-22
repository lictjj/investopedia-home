import Navigation from "../components/Navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductsPage = () => {
  const handleBuyProduct = () => {
    console.log("Buy product clicked");
    toast.success("Purchase initiated! Please check your balance.");
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-[200px] h-[200px] rounded-full bg-purple-500/5"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Grid lines */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #purple 1px, transparent 1px),
            linear-gradient(to bottom, #purple 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Glowing orbs */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute w-[100px] h-[100px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          Purchased Products
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-purple-900/20 border border-purple-500/20 backdrop-blur-lg">
              <TabsTrigger value="all" className="data-[state=active]:bg-purple-500">
                All Products
              </TabsTrigger>
              <TabsTrigger value="purchased" className="data-[state=active]:bg-purple-500">
                Purchased Products
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <Card className="bg-purple-900/10 backdrop-blur-lg border border-purple-500/20 max-w-sm mx-auto w-full sm:w-auto">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-400">Mining Machine Package</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Carousel className="w-full">
                        <CarouselContent>
                          <CarouselItem>
                            <img 
                              src="/lovable-uploads/ef961a34-c01f-424f-9ad5-cc1b6c2ead8f.png"
                              alt="Mining Machine Front View"
                              className="rounded-lg w-full h-48 object-cover"
                            />
                          </CarouselItem>
                          <CarouselItem>
                            <img 
                              src="/lovable-uploads/e944d620-cbf4-4415-ac1f-165c9d423310.png"
                              alt="Mining Machine Side View"
                              className="rounded-lg w-full h-48 object-cover"
                            />
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                      <div className="space-y-2 text-gray-300">
                        <p className="flex justify-between">
                          <span>Price:</span>
                          <span className="text-purple-400">KES 1,000.00</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Daily Income:</span>
                          <span className="text-purple-400">KES 200.00</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Total Income:</span>
                          <span className="text-purple-400">KES 6,000.00</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Cycle:</span>
                          <span className="text-purple-400">30 days</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Invest Limit:</span>
                          <span className="text-purple-400">1</span>
                        </p>
                      </div>
                      <Button 
                        onClick={handleBuyProduct}
                        className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="purchased" className="mt-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-lg bg-purple-900/10 backdrop-blur-lg border border-purple-500/20"
              >
                <div className="text-gray-400">
                  Purchased Products content coming soon...
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;