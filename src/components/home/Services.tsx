import React from 'react';
import { FileText, Users, Calendar } from 'lucide-react';
import { User } from 'lucide-react';


const services = [
  {
    icon: User,
    title: 'Visa Consultations',
    description:
      'Expert guidance through visa applications and immigration processes.',
  },
  {
    icon: FileText,
    title: 'Legal Documents',
    description:
      'Processing of passports, birth certificates, and marriage certificates.',
  },
  {
    icon: Users,
    title: 'Professional Guidance',
    description:
      'One-on-one consulting sessions with experienced immigration professionals.',
  },
  {
    icon: Calendar,
    title: 'Event Hosting',
    description:
      'Conferences and workshops focused on international opportunities.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your international documentation and
            consultation needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;