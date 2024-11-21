import Navigation from "../components/Navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold mb-8">Purchased Products</h1>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-purple-900/20 border border-purple-500/20">
            <TabsTrigger value="all" className="data-[state=active]:bg-purple-500">
              All Products
            </TabsTrigger>
            <TabsTrigger value="purchased" className="data-[state=active]:bg-purple-500">
              Purchased Products
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="text-gray-400">
              All Products content coming soon...
            </div>
          </TabsContent>
          
          <TabsContent value="purchased" className="mt-6">
            <div className="text-gray-400">
              Purchased Products content coming soon...
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductsPage;