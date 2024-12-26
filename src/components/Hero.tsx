import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-purple-900 to-purple-700">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-xl">
          <h2 className="text-5xl font-bold mb-4">Elevate Your Style</h2>
          <p className="text-xl mb-8">Discover our curated collection of contemporary fashion blending modern aesthetics with Ghanaian elegance.</p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-semibold transform transition-transform hover:scale-105">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;