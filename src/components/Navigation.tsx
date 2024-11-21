import { Home, ShoppingBag, Users, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl mx-auto rounded-xl bg-blue-900/30 backdrop-blur-md border border-blue-500/20 shadow-lg shadow-blue-500/10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/products" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
              <ShoppingBag size={20} />
              <span>Purchased Products</span>
            </Link>
            <Link to="/team" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
              <Users size={20} />
              <span>My Team</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
              <User size={20} />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;