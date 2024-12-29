import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ERSKINOS</h3>
            <p className="text-purple-200">Elevating style with a perfect blend of contemporary fashion and Ghanaian elegance.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-purple-200 transition-colors" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-purple-200 transition-colors" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-purple-200 transition-colors" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-purple-200">&copy; {new Date().getFullYear()} Erskinos. All rights reserved.</p>
            <p className="text-purple-200 mt-2 md:mt-0">Powered by <span className="font-semibold">Blacks Tech Africa</span> 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;