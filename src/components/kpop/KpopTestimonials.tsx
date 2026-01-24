
import React from 'react';
import TestimonialCard from '../shared/TestimonialCard';

const KpopTestimonials = () => {
  const testimonials = [
    {
      quote: "The K-pop themed filters and layouts work well for creating fun photo strips with friends.",
      author: "K-pop Fan",
      rating: 4,
      role: "Photo Booth User",
      style: "kpop" as const
    },
    {
      quote: "Simple interface and easy to use for creating quick photo booth memories at events.",
      author: "Event Attendee",
      rating: 4,
      role: "Event Guest",
      style: "kpop" as const
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">User Reviews</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What K-pop fans say about our photo booth
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

export default KpopTestimonials;
