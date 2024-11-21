import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const validatePhoneNumber = (number: string) => {
    // Validate Kenyan phone number format (+254XXXXXXXXX)
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

    // In a real app, this would make an API call
    toast({
      title: "Success!",
      description: "You have successfully logged in.",
    });
    navigate("/profile");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Automatically add +254 prefix if not present
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
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 bg-zinc-900 border-zinc-800">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="tel"
                  placeholder="+254 Phone Number"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  className="bg-zinc-800 border-zinc-700"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-zinc-800 border-zinc-700"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500">
                Login
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="tel"
                  placeholder="+254 Phone Number"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  className="bg-zinc-800 border-zinc-700"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-zinc-800 border-zinc-700"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500">
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Auth;