import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Wallet } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { UserDashboard } from "@/components/profile/UserDashboard";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Users, Package } from "lucide-react";

const Profile = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const userBalance = 0; // This would typically come from your backend

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
    toast({
      title: "Status Updated",
      description: `User status has been updated to ${newStatus}`,
    });
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
            <div className="space-y-2">
              <h2 className="text-2xl text-purple-400 mb-2">Hi there! 👋</h2>
              <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                {isAdmin ? "Admin Dashboard" : "Your Profile"}
              </h1>
              {!isAdmin && (
                <div className="flex items-center gap-2 text-xl">
                  <Wallet className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">Balance:</span>
                  <span className="font-bold text-purple-400">KSH {userBalance.toLocaleString()}</span>
                </div>
              )}
            </div>
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
            <UserDashboard />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;