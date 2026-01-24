
import React from 'react';
import TestimonialCard from '../shared/TestimonialCard';

const DigiboothTestimonials = () => {
  const testimonials = [
    {
      quote: "The photo booth interface is user-friendly. Good range of customization options available.",
      author: "İdeal Photo User",
      rating: 5,
      role: "User"
    },
    {
      quote: "Easy setup and straightforward to use. The filters work well.",
      author: "İdeal Photo User",
      rating: 5,
      role: "User"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">User Reviews</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real experiences from Digibooth users
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

export default DigiboothTestimonials;
