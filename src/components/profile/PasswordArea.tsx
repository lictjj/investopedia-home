import { Key } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export const PasswordArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "New passwords do not match",
      });
      return;
    }

    if (newPassword.length < 6) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Password must be at least 6 characters long",
      });
      return;
    }

    // Here you would typically make an API call to update the password
    console.log("Password change requested", {
      currentPassword,
      newPassword,
    });

    toast({
      title: "Success",
      description: "Password updated successfully",
    });

    // Reset form and close dialog
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsOpen(false);
  };

  return (
    <>
      <Card className="bg-zinc-900/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105 duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Key className="h-5 w-5 text-purple-400" />
            Change Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => setIsOpen(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
          >
            Update Password
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-zinc-900/90 backdrop-blur-xl border border-purple-500/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-400">Change Password</DialogTitle>
          </DialogHeader>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="bg-zinc-800/50 border-purple-500/20 focus:border-purple-500/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="bg-zinc-800/50 border-purple-500/20 focus:border-purple-500/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-zinc-800/50 border-purple-500/20 focus:border-purple-500/40"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
            >
              Update Password
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};