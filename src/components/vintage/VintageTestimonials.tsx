
import React from 'react';
import TestimonialCard from '../shared/TestimonialCard';

const VintageTestimonials = () => {
  const testimonials = [
    {
      quote: "The vintage filters create a nice nostalgic effect. Simple to use.",
      author: "İdeal Photo User",
      rating: 5,
      role: "User",
      style: "vintage" as const
    },
    {
      quote: "Good selection of vintage styles. The sepia filter works particularly well.",
      author: "İdeal Photo User",
      rating: 5,
      role: "User",
      style: "vintage" as const
    }
  ];
  
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-light mb-4 text-amber-900">User Reviews</h2>
          <p className="text-lg text-amber-800/80 max-w-3xl mx-auto">
            Hear what people say about our vintage photo experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VintageTestimonials;
