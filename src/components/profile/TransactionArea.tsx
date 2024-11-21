import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

// Mock transaction data - in a real app this would come from your backend
const mockTransactions = [
  {
    id: 1,
    date: "2024-03-15 14:30",
    type: "Recharge",
    amount: 1000,
    status: "Completed"
  },
  {
    id: 2,
    date: "2024-03-14 16:45",
    type: "Withdraw",
    amount: -500,
    status: "Completed"
  },
  {
    id: 3,
    date: "2024-03-13 09:15",
    type: "Recharge",
    amount: 2000,
    status: "Completed"
  }
];

export const TransactionArea = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="bg-zinc-900/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105 duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <FileText className="h-5 w-5 text-purple-400" />
            Transaction History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => setIsOpen(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
          >
            View Transactions
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl bg-zinc-900/90 backdrop-blur-xl border border-purple-500/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-400">Transaction History</DialogTitle>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-purple-500/20">
                  <TableHead className="text-purple-400">Date</TableHead>
                  <TableHead className="text-purple-400">Type</TableHead>
                  <TableHead className="text-purple-400">Amount</TableHead>
                  <TableHead className="text-purple-400">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTransactions.map((transaction) => (
                  <TableRow key={transaction.id} className="border-purple-500/20">
                    <TableCell className="text-gray-300">{transaction.date}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        transaction.type === 'Recharge' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {transaction.type}
                      </span>
                    </TableCell>
                    <TableCell className={`font-medium ${
                      transaction.type === 'Recharge' 
                        ? 'text-green-400' 
                        : 'text-red-400'
                    }`}>
                      KSH {Math.abs(transaction.amount).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400">
                        {transaction.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};