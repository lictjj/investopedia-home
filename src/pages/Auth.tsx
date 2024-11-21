import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Auth = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^\+254[17]\d{8}$/;
    return phoneRegex.test(number);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Auth attempt with:", { phone, password });

    if (!validatePhoneNumber(phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid Kenyan phone number (+254XXXXXXXXX)",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "You have successfully logged in.",
    });
    navigate("/profile");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    if (value && !value.startsWith('+254')) {
      if (value.startsWith('0')) {
        value = '+254' + value.slice(1);
      } else if (value.startsWith('7') || value.startsWith('1')) {
        value = '+254' + value;
      }
    }
    
    setPhone(value);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      {[...Array(5)].map((_, index) => (
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
            left: `${index * 20}%`,
            top: `${20 + index * 10}%`,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, purple 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md p-8"
      >
        <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-purple-500/20">
          <Tabs defaultValue="login" className="space-y-6">
            <TabsList className="grid grid-cols-2 bg-zinc-800/50">
              <TabsTrigger value="login" className="data-[state=active]:bg-purple-600">Login</TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-purple-600">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="tel"
                    placeholder="+254 Phone Number"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                    className="bg-zinc-800/50 border-zinc-700 focus:border-purple-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-zinc-800/50 border-zinc-700 focus:border-purple-500 transition-colors"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
                >
                  Login
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="tel"
                    placeholder="+254 Phone Number"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                    className="bg-zinc-800/50 border-zinc-700 focus:border-purple-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-zinc-800/50 border-zinc-700 focus:border-purple-500 transition-colors"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
                >
                  Register
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;