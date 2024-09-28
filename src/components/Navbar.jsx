import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';  // Import Link for routing

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/narodita-logo.png" alt="Narodita" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900">Home</Link>
                <Link to="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900">Features</Link>
                {/* Changed 'Use Cases' to 'Workspace' */}
                <Link to="/workspace" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900">Workspace</Link>
                <Link to="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900">Pricing</Link>
                <Link to="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900">Contact</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
              Request Demo
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900">Home</Link>
            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900">Features</Link>
            {/* Updated the mobile menu to include Workspace */}
            <Link to="/workspace" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900">Workspace</Link>
            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900">Pricing</Link>
            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900">Contact</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <button className="block w-full text-center bg-white text-black px-4 py-2 rounded-md text-base font-medium hover:bg-gray-200 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
