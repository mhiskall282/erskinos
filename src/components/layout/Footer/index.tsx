import React from 'react';
import { Crown } from 'lucide-react';
import { FooterLinks } from './FooterLinks';
import { FooterNewsletter } from './FooterNewsletter';
import { FooterSocial } from './FooterSocial';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Logo and Description */}
          <div className="max-w-sm">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-[#FFD700]" />
              <span className="text-2xl font-bold">
                <span className="text-[#FFD700]">B</span>illionaire Academy
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering individuals with expert visa consultations and legal
              services since 1970. Your trusted partner in achieving international
              success.
            </p>
            <FooterSocial />
          </div>

          {/* Navigation Links */}
          <div className="flex-1 md:ml-12">
            <FooterLinks />
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-96">
            <FooterNewsletter />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Billionaire Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;