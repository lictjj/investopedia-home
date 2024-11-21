import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import Profile from "./pages/Profile";
import WithdrawPage from "./pages/WithdrawPage";
import TeamPage from "./pages/TeamPage";
import Auth from "./pages/Auth";
import AddFundsPage from "./pages/AddFundsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/withdraw" element={<WithdrawPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/add-funds" element={<AddFundsPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;