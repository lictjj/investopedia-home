import { Home, ShoppingBag, Users, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/products" className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors">
              <ShoppingBag size={20} />
              <span>Purchased Products</span>
            </Link>
            <Link to="/team" className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors">
              <Users size={20} />
              <span>My Team</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors">
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