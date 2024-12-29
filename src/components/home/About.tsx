import React from 'react';
import { Trophy, Target, Users2 } from 'lucide-react';

const stats = [
  { icon: Trophy, label: 'Success Rate', value: '98%' },
  { icon: Target, label: 'Countries Served', value: '50+' },
  { icon: Users2, label: 'Happy Clients', value: '10,000+' },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-[#FFD700]">Us</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Since 1970, Billionaire Academy has been the trusted partner for
            individuals seeking to expand their global horizons. Our expertise in
            visa consultations and legal documentation has helped thousands achieve
            their international dreams.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 border border-[#FFD700] rounded-lg"
            >
              <stat.icon className="h-12 w-12 text-[#FFD700] mx-auto mb-4" />
              <div className="text-4xl font-bold text-[#FFD700] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;