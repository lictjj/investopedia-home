import Navigation from "../components/Navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ProductCard } from "@/components/products/ProductCard";

const ProductsPage = () => {
  const handleBuyProduct = () => {
    console.log("Buy product clicked");
    toast.success("Purchase initiated! Please check your balance.");
  };

  const products = [
    {
      title: "Bitcoin Mining Machine",
      images: [
        {
          src: "/lovable-uploads/ef961a34-c01f-424f-9ad5-cc1b6c2ead8f.png",
          alt: "Mining Machine Front View"
        },
        {
          src: "/lovable-uploads/e944d620-cbf4-4415-ac1f-165c9d423310.png",
          alt: "Mining Machine Side View"
        }
      ],
      price: "KES 1,000.00",
      dailyIncome: "KES 200.00",
      totalIncome: "KES 6,000.00",
      cycle: "30 days",
      investLimit: "1"
    },
    {
      title: "MacroComputers",
      images: [
        {
          src: "/lovable-uploads/ebda3a3a-30b7-490e-bcdb-5a75d6ab02c7.png",
          alt: "MacroComputers Front View"
        },
        {
          src: "/lovable-uploads/3d833c1d-1588-4077-9afe-0f8ea5960012.png",
          alt: "MacroComputers Side View"
        }
      ],
      price: "KES 2,000.00",
      dailyIncome: "KES 300.00",
      totalIncome: "KES 9,000.00",
      cycle: "30 days",
      investLimit: "1"
    },
    {
      title: "Supercomps",
      images: [
        {
          src: "/lovable-uploads/82dfb1ff-a3f5-48d9-bc58-d3532397cc8d.png",
          alt: "Supercomps Front View"
        },
        {
          src: "/lovable-uploads/dbc4a0be-6101-4e5e-866f-0c9404c6aab5.png",
          alt: "Supercomps Side View"
        }
      ],
      price: "KES 3,500.00",
      dailyIncome: "KES 600.00",
      totalIncome: "KES 18,000.00",
      cycle: "30 days",
      investLimit: "1"
    },
    {
      title: "Quantumcomps",
      images: [
        {
          src: "/lovable-uploads/210b987f-1eb4-4afb-8358-9a875cad0ba0.png",
          alt: "Quantumcomps Front View"
        },
        {
          src: "/lovable-uploads/f2db8567-863e-4edf-b16a-7ed00f7f7219.png",
          alt: "Quantumcomps Side View"
        }
      ],
      price: "KES 9,000.00",
      dailyIncome: "KES 1,100.00",
      totalIncome: "KES 33,000.00",
      cycle: "30 days",
      investLimit: "2"
    }
  ];

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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    {...product}
                    onBuy={handleBuyProduct}
                  />
                ))}
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