import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-purple-800 z-50">
      <div className="flex justify-end p-4">
        <button onClick={onClose}>
          <X className="w-6 h-6 text-white" />
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link 
              to="/" 
              className="block text-white text-xl py-2"
              onClick={onClose}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="block text-white text-xl py-2"
              onClick={onClose}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="block text-white text-xl py-2"
              onClick={onClose}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;