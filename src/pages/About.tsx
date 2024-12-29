import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">About Erskinos</h1>
        <p className="text-xl text-gray-600">Blending Modern Fashion with Ghanaian Excellence</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Boutique Interior" 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-purple-800">Our Story</h2>
          <p className="text-gray-600">Founded in 2020, Erskinos has become synonymous with quality fashion that bridges contemporary style with Ghanaian heritage. Our boutique offers carefully curated collections that cater to the modern fashion enthusiast while maintaining our commitment to quality and authenticity.</p>
          <p className="text-gray-600">We take pride in offering a unique shopping experience that combines international trends with local craftsmanship, creating a space where style meets cultural appreciation.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <h3 className="text-xl font-semibold text-purple-900 mb-3">Quality First</h3>
          <p className="text-gray-600">We source only the finest materials and partner with skilled artisans to ensure exceptional quality in every piece.</p>
        </div>
        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <h3 className="text-xl font-semibold text-purple-900 mb-3">Sustainable Fashion</h3>
          <p className="text-gray-600">Committed to ethical practices and sustainable fashion choices that respect both tradition and innovation.</p>
        </div>
        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <h3 className="text-xl font-semibold text-purple-900 mb-3">Customer Focus</h3>
          <p className="text-gray-600">Dedicated to providing personalized service and ensuring customer satisfaction with every purchase.</p>
        </div>
      </div>
    </div>
  );
};

export default About;