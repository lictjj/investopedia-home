import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

const AddFundsPage = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto pt-16">
        <Button
          variant="ghost"
          className="mb-6 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
          onClick={() => navigate("/profile")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Profile
        </Button>

        <Card className="bg-zinc-900/50 backdrop-blur-xl border border-purple-500/20 p-6">
          <h1 className="text-2xl font-bold text-purple-400 mb-6">Add Funds</h1>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
            {amounts.map((amount) => (
              <Button
                key={amount}
                onClick={() => handleAmountSelect(amount)}
                variant="outline"
                className={`bg-zinc-800/50 border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 ${
                  selectedAmount === amount ? "bg-purple-500/20 border-purple-500" : ""
                }`}
              >
                KSH {amount.toLocaleString()}
              </Button>
            ))}
          </div>

          {selectedAmount && (
            <Alert className="bg-purple-500/10 border border-purple-500/20">
              <AlertDescription className="space-y-4">
                <h3 className="font-semibold text-purple-400">Recharge Instructions</h3>
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
        </Card>
      </div>
    </div>
  );
};

export default AddFundsPage;