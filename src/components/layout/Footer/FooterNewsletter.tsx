import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    setError('');
  };

  return (
    <div className="mb-8">
      <h3 className="font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          label=""
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          className="flex-1"
        />
        <Button type="submit" variant="primary" size="md">
          Subscribe
        </Button>
      </form>
    </div>
  );
}
export default FooterNewsletter;