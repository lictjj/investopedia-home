import { Home, ShoppingBag, Users, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Toggle menu:", !isOpen);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl mx-auto rounded-xl bg-blue-900/30 backdrop-blur-md border border-blue-500/20 shadow-lg shadow-blue-500/10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
              <Home size={20} />
              <span>Sonder Limited</span>
            </Link>
            <button
              onClick={toggleMenu}
              className="ml-4 p-2 rounded-md text-white hover:text-blue-400 transition-colors md:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
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

        {/* Mobile Navigation */}
        <div
          className={`${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } md:hidden absolute top-16 left-0 w-full bg-blue-900/95 backdrop-blur-md border-t border-blue-500/20 rounded-b-xl transition-all duration-300 ease-in-out`}
        >
          <div className="px-4 py-2 space-y-4">
            <Link
              to="/products"
              className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingBag size={20} />
              <span>Purchased Products</span>
            </Link>
            <Link
              to="/team"
              className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              <Users size={20} />
              <span>My Team</span>
            </Link>
            <Link
              to="/profile"
              className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
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