import { Gift } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const BonusArea = () => {
  const [bonusCode, setBonusCode] = useState("");
  const { toast } = useToast();

  const handleClaimBonus = () => {
    console.log("Attempting to claim bonus with code:", bonusCode);
    if (!bonusCode.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid bonus code",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically validate the bonus code with your backend
    toast({
      title: "Processing",
      description: "Validating your bonus code...",
    });
    
    // Reset the input after submission
    setBonusCode("");
  };

  return (
    <Card className="bg-zinc-900/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105 duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Gift className="h-5 w-5 text-purple-400" />
          Claim Bonus
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
              Claim Now
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-zinc-900/90 backdrop-blur-xl border border-purple-500/20">
            <div className="space-y-4">
              <h4 className="font-medium text-sm text-purple-400">Enter Bonus Code</h4>
              <Input
                type="text"
                placeholder="Enter your bonus code"
                value={bonusCode}
                onChange={(e) => setBonusCode(e.target.value)}
                className="bg-zinc-800/50 border-purple-500/20 focus:border-purple-500/40"
              />
              <Button 
                onClick={handleClaimBonus}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
              >
                Submit Code
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </CardContent>
    </Card>
  );
};