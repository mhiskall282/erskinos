import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-black text-white pt-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
          alt="Office background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Your Gateway to{' '}
            <span className="text-[#FFD700]">Global Opportunities</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Expert visa consultations, legal document processing, and professional
            guidance to help you achieve your international aspirations.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-[#FFD700] text-black rounded-full font-semibold hover:bg-[#E5C100] transition-colors flex items-center"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#services"
              className="px-8 py-3 border-2 border-[#FFD700] text-[#FFD700] rounded-full font-semibold hover:bg-[#FFD700] hover:text-black transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;