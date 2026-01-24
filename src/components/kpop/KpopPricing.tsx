
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KpopPricing: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-4">Free K-pop Photo Booth</h2>
        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
          All features are currently free to use. Create unlimited K-pop photo strips with filters, frames, and effects at no cost.
        </p>
        <p className="text-center text-gray-500">Premium plans with enhanced features coming soon.</p>
      </div>
    </section>
  );
};

export default KpopPricing;
