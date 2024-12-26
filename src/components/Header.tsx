import React from 'react';
import { ShoppingBag, Menu, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-purple-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-wider">ERSKINOS</h1>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#" className="hover:text-purple-200 transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-purple-200 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-purple-200 transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-purple-200 transition-colors" />
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-purple-200 transition-colors" />
            <Menu className="w-5 h-5 md:hidden cursor-pointer hover:text-purple-200 transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;