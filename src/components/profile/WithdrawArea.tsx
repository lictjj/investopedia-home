import { ArrowDownLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const WithdrawArea = () => {
  const navigate = useNavigate();
  
  return (
    <Card className="bg-zinc-900/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105 duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <ArrowDownLeft className="h-5 w-5 text-purple-400" />
          Withdraw
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={() => navigate("/withdraw")}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
        >
          Withdraw Funds
        </Button>
      </CardContent>
    </Card>
  );
};