import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function FooterSocial() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="text-gray-400 hover:text-[#FFD700] transition-colors"
          aria-label={social.label}
        >
          <social.icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}
export default FooterSocial;