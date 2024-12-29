import React from 'react';

interface LinkSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const linkSections: LinkSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'Visa Consultation', href: '#services' },
      { label: 'Legal Documents', href: '#services' },
      { label: 'Immigration Support', href: '#services' },
      { label: 'Business Services', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Leadership', href: '#executives' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Support Center', href: '#support' },
    ],
  },
];

export function FooterLinks() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      {linkSections.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold text-white mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-[#FFD700] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default FooterLinks;