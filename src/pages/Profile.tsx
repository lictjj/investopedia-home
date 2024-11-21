import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Users, Package, LogOut } from "lucide-react";

const Profile = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bonusCode, setBonusCode] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Check for login and admin status
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const userBalance = 0;

  // Mock data for admin dashboard
  const mockUsers = [
    { 
      id: 1, 
      phone: "+254712345678", 
      joinDate: "2024-02-20",
      products: ["Investment Plan A", "Investment Plan B"],
      totalInvestment: 5000,
      status: "active"
    },
    { 
      id: 2, 
      phone: "+254787654321", 
      joinDate: "2024-02-19",
      products: ["Investment Plan C"],
      totalInvestment: 2000,
      status: "active"
    }
  ];

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out.",
    });
    navigate("/auth");
  };

  const handleUserStatusChange = (userId: number, newStatus: string) => {
    // In a real app, this would update the user's status in the backend
    toast({
      title: "Status Updated",
      description: `User status has been updated to ${newStatus}`,
    });
  };

  const handleClaimBonus = () => {
    toast({
      title: "Bonus Claimed!",
      description: `Successfully claimed bonus with code: ${bonusCode}`,
    });
    setBonusCode("");
    setIsDialogOpen(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-16 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl font-bold text-purple-400">Welcome!</h1>
            <p className="text-gray-300 text-lg">Please log in or register to access your profile</p>
            <Button 
              onClick={() => navigate("/auth")}
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-lg text-lg"
            >
              Login / Register
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              {isAdmin ? "Admin Dashboard" : "Your Profile"}
            </h1>
            <Button
              onClick={handleSignOut}
              variant="destructive"
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
          
          {isAdmin ? (
            <div className="space-y-8">
              <div className="bg-zinc-900/50 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-purple-400" />
                  <h2 className="text-xl font-semibold">Registered Users</h2>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Phone Number</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>Total Investment</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-2">
                            {user.products.map((product, index) => (
                              <span 
                                key={index}
                                className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400"
                              >
                                <Package className="h-3 w-3" />
                                {product}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>${user.totalInvestment.toLocaleString()}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                          }`}>
                            {user.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleUserStatusChange(user.id, user.status === 'active' ? 'suspended' : 'active')}
                            className="text-xs"
                          >
                            {user.status === 'active' ? 'Suspend' : 'Activate'}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-zinc-900/50 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <h3 className="text-lg font-medium text-gray-200 mb-2">Current Balance</h3>
                <p className="text-2xl font-bold text-purple-400 mb-4">${userBalance}</p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">View Details</Button>
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <h3 className="text-lg font-medium text-gray-200 mb-2">Bonus Section</h3>
                <p className="text-2xl font-bold text-purple-400 mb-4">Claim your bonus below</p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600" onClick={() => setIsDialogOpen(true)}>Open</Button>
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <h3 className="text-lg font-medium text-gray-200 mb-2">Settings</h3>
                <p className="text-2xl font-bold text-purple-400 mb-4">Manage your preferences</p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">Go to Settings</Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Bonus Code</DialogTitle>
            <DialogDescription>
              Enter your bonus code to claim your reward
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Enter code"
              value={bonusCode}
              onChange={(e) => setBonusCode(e.target.value)}
            />
            <Button onClick={handleClaimBonus}>Claim Bonus</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;