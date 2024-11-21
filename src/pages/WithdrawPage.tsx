import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const WithdrawPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState("");
  
  // This would typically come from a real backend/state management
  const userBalance = 25000.00;
  const FEE_PERCENTAGE = 15;

  const calculateFee = (amount: number) => {
    return (amount * FEE_PERCENTAGE) / 100;
  };

  const calculateFinalAmount = (amount: number) => {
    return amount - calculateFee(amount);
  };

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Attempting withdrawal with amount:", amount, "and password verification");
    
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to withdraw",
        variant: "destructive",
      });
      return;
    }

    if (!password) {
      toast({
        title: "Password Required",
        description: "Please enter your password to proceed with the withdrawal",
        variant: "destructive",
      });
      return;
    }

    const withdrawAmount = parseFloat(amount);
    if (withdrawAmount > userBalance) {
      toast({
        title: "Insufficient Balance",
        description: "You don't have enough funds for this withdrawal",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically verify the password with your backend
    // For now, we'll simulate a successful verification
    toast({
      title: "Withdrawal Initiated",
      description: `Your withdrawal request for $${amount} has been submitted. After ${FEE_PERCENTAGE}% fee, you will receive $${calculateFinalAmount(withdrawAmount).toFixed(2)}.`,
    });
    setAmount("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto space-y-8 pt-16"
      >
        <Button
          variant="ghost"
          className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
          onClick={() => navigate("/profile")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Profile
        </Button>

        <Card className="bg-zinc-900/50 border-purple-500/20 p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-purple-400">Withdraw Funds</h1>
            <p className="text-gray-400">Available Balance: ${userBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
          </div>

          <form onSubmit={handleWithdraw} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="amount" className="text-sm text-gray-300">
                Withdrawal Amount
              </label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount to withdraw"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-zinc-800 border-purple-500/20 text-white"
                step="0.01"
                min="0"
                max={userBalance}
              />
              {amount && parseFloat(amount) > 0 && (
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-gray-400">
                    Withdrawal Fee ({FEE_PERCENTAGE}%): ${calculateFee(parseFloat(amount)).toFixed(2)}
                  </p>
                  <p className="text-purple-400 font-semibold">
                    You will receive: ${calculateFinalAmount(parseFloat(amount)).toFixed(2)}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-gray-300">
                Confirm Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-zinc-800 border-purple-500/20 text-white"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white"
            >
              Withdraw Funds
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default WithdrawPage;