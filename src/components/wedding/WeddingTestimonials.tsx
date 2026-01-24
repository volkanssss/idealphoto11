
import React from 'react';
import TestimonialCard from '../shared/TestimonialCard';
import { Heart } from 'lucide-react';

const WeddingTestimonials = () => {
  const testimonials = [
    {
      quote: "The wedding photobooth was easy to use and our guests enjoyed taking photos. The filters worked well for our event.",
      author: "İdeal Photo User",
      rating: 5,
      style: "vintage" as const
    },
    {
      quote: "The elegant design and photo quality made this a great addition to our celebration.",
      author: "İdeal Photo User",
      rating: 5,
      style: "vintage" as const
    },
    {
      quote: "Simple interface and nice templates. Good experience overall.",
      author: "İdeal Photo User",
      rating: 4,
      style: "vintage" as const
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-light mb-4 text-gray-800">What Couples Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from couples who used our Wedding Photobooth for their special day
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                rating={testimonial.rating}
                style={testimonial.style}
              />
              <div className="absolute top-4 right-4">
                <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center">
                  <Heart className="h-4 w-4 text-pink-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingTestimonials;
