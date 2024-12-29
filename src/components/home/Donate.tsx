import React, { useState } from 'react';
import { Heart, DollarSign, Trophy } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const donationTiers = [
  {
    icon: Heart,
    name: 'Supporter',
    amount: 100,
    benefits: ['Recognition on our website', 'Quarterly newsletter'],
  },
  {
    icon: DollarSign,
    name: 'Partner',
    amount: 500,
    benefits: [
      'Recognition on our website',
      'Monthly newsletter',
      'Exclusive webinar access',
    ],
  },
  {
    icon: Trophy,
    name: 'Champion',
    amount: 1000,
    benefits: [
      'Recognition on our website',
      'Weekly newsletter',
      'VIP event access',
      'One-on-one consultation',
    ],
  },
];

export function Donate() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleDonate = (tierName: string) => {
    setSelectedTier(tierName);
    // Handle donation logic here
    console.log(`Selected tier: ${tierName}`);
  };

  return (
    <section id="donate" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-gray-600">
            Your contribution helps us continue providing vital services and support
            to aspiring individuals worldwide.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {donationTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`p-8 text-center transition-transform hover:scale-105 ${
                selectedTier === tier.name ? 'ring-2 ring-[#FFD700]' : ''
              }`}
            >
              <tier.icon className="h-12 w-12 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
              <div className="text-3xl font-bold text-[#FFD700] mb-6">
                ${tier.amount}
              </div>
              <ul className="text-gray-600 space-y-3 mb-8">
                {tier.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <Button
                variant={selectedTier === tier.name ? 'primary' : 'outline'}
                className="w-full"
                onClick={() => handleDonate(tier.name)}
              >
                {selectedTier === tier.name ? 'Selected' : 'Donate Now'}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Donate;