import { Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

export const RechargeArea = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const amounts = [1000, 2000, 3500, 6000, 10000, 15000, 25000, 30000, 50000, 80000, 100000];

  const handleAmountSelect = (amount: number) => {
    console.log("Selected recharge amount:", amount);
    setSelectedAmount(amount);
    toast({
      title: "Amount Selected",
      description: `Processing recharge of $${amount.toLocaleString()}...`,
    });
  };

  return (
    <Card className="bg-zinc-900/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105 duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Upload className="h-5 w-5 text-purple-400" />
          Recharge
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
              Add Funds
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-zinc-900/90 backdrop-blur-xl border border-purple-500/20">
            <div className="grid grid-cols-2 gap-2 p-2">
              {amounts.map((amount) => (
                <Button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  variant="outline"
                  className="bg-zinc-800/50 border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40"
                >
                  ${amount.toLocaleString()}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {selectedAmount && (
          <Alert className="bg-purple-500/10 border border-purple-500/20">
            <AlertDescription className="space-y-4">
              <h3 className="font-semibold text-purple-400">Recharge Notes</h3>
              <ol className="list-decimal pl-4 space-y-2 text-sm">
                <li>Follow the steps carefully below to recharge properly.</li>
                <li>You can recharge a minimum of KES 1000.00</li>
                <li>Paybill-542542</li>
                <li>Acc no-03803871616150</li>
                <li>Please, wait 1-30 minutes after completing the recharge</li>
              </ol>
              <p className="text-sm text-purple-400 font-medium">
                Selected Amount: ${selectedAmount.toLocaleString()}
              </p>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};