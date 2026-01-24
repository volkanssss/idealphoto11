import React from 'react';
import { Card } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
}

interface PhotoboothTestimonialsProps {
  type?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatarUrl,
}) => {
  const initials = author
    .split(' ')
    .map((name) => name[0])
    .join('');

  return (
    <Card className="p-6 h-full bg-white border border-gray-200 shadow-sm flex flex-col">
      <div className="flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="36"
          viewBox="0 0 45 36"
          className="mb-4 text-indigo-100 fill-indigo-300"
        >
          <path d="M13.415.043c-6.775 0-12.043 5.268-12.043 12.043s5.268 12.043 12.043 12.043S25.458 18.9 25.458 12.128 20.19.043 13.415.043zm0 22.271c-5.603 0-10.229-4.626-10.229-10.229S7.812 1.814 13.415 1.814s10.229 4.652 10.229 10.229-4.626 10.271-10.229 10.271z" />
        </svg>
        <p className="mb-4 text-gray-700">{quote}</p>
      </div>
      <div className="flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={author} />
          ) : (
            <AvatarFallback className="bg-indigo-500 text-white">
              {initials}
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <p className="font-medium text-gray-900">{author}</p>
          {role ? <p className="text-sm text-gray-500">{role}</p> : null}
        </div>
      </div>
    </Card>
  );
};

const testimonialsByType: Record<string, TestimonialProps[]> = {
  'pica-pica': [
    {
      quote:
        'PicaPica Photobooth is simple, fast, and the photo strips look great on social media. The download flow worked perfectly for me.',
      author: 'Mina K.',
      role: 'Creator',
    },
    {
      quote:
        'I loved how quickly I could retake shots and try different looks. PicaPica Photobooth feels like a real booth—without the wait.',
      author: 'Daniel R.',
      role: 'User',
    },
    {
      quote:
        'Great for quick memories with friends. The layouts and frames made my strip look polished.',
      author: 'Sofia L.',
      role: 'User',
    },
  ],
  selfie: [
    {
      quote:
        'The Selfie Photo Booth App helped me get a clean, bright selfie strip in minutes. Perfect for profile updates and stories.',
      author: 'Aylin T.',
      role: 'Student',
    },
    {
      quote:
        'I like that I can retake shots quickly until the angle is right. The Selfie Photo Booth App feels effortless.',
      author: 'Ethan P.',
      role: 'Creator',
    },
    {
      quote:
        'Filters are subtle and the final strip looks sharp. This Selfie Photo Booth is my go-to on mobile.',
      author: 'Noah S.',
      role: 'User',
    },
  ],
  party: [
    {
      quote:
        'Party Photo Booth was the highlight of our birthday. Everyone grabbed the link and made their own strip in seconds.',
      author: 'Lara B.',
      role: 'Host',
    },
    {
      quote:
        'Great for group shots—retakes are easy and the strip download is instant. Party Photo Booth made sharing simple.',
      author: 'Hugo M.',
      role: 'Guest',
    },
    {
      quote:
        'Fun frames + quick capture = perfect party memories. Party Photobooth is exactly what we needed.',
      author: 'Selin A.',
      role: 'User',
    },
  ],
  chinchin: [
    {
      quote:
        'Chinchinbooth has a playful vibe and the strip output looks really cute. I ended up making multiple versions.',
      author: 'Yuki N.',
      role: 'User',
    },
    {
      quote:
        'I tried Chinchinbooth on my phone and it worked smoothly. The experience is quick and fun.',
      author: 'Omar H.',
      role: 'User',
    },
    {
      quote:
        'If you like the ChinChin Photo Booth style, Chinchinbooth is a great web alternative with easy downloads.',
      author: 'Clara V.',
      role: 'Creator',
    },
  ],
  beautyplus: [
    {
      quote:
        'BeautyPlus Photo Booth gives my selfies a polished look fast. The filters are great when you want a clean, fresh finish.',
      author: 'Zeynep E.',
      role: 'User',
    },
    {
      quote:
        'I used BeautyPlus Photobooth before an event to get a consistent look across photos. Super handy and quick.',
      author: 'Mason C.',
      role: 'User',
    },
    {
      quote:
        'Simple UI, great results. BeautyPlus Photo Booth saved me time editing and the strip looks professional.',
      author: 'Isabella G.',
      role: 'Creator',
    },
  ],
  jepreto: [
    {
      quote:
        'Jepreto Photobooth is a clean web photo booth experience. I made a strip and downloaded it instantly—no setup.',
      author: 'Kerem D.',
      role: 'User',
    },
    {
      quote:
        'I was looking for a Jepreto.com-style web photo booth. This Jepreto Photobooth page delivered exactly the workflow I wanted.',
      author: 'Hannah W.',
      role: 'User',
    },
    {
      quote:
        'The layouts are the best part. Jepreto Photobooth made it easy to create a neat strip for my portfolio.',
      author: 'Leo F.',
      role: 'Designer',
    },
  ],
  default: [
    {
      quote:
        'Easy to use photo booth with good customization options. Enjoyed creating photo strips.',
      author: 'İdeal Photo User',
      role: 'User',
    },
    {
      quote:
        'The interface is straightforward and the photos came out well. Good experience.',
      author: 'İdeal Photo User',
      role: 'User',
    },
    {
      quote:
        'Nice filters and frames available. The download feature works smoothly.',
      author: 'İdeal Photo User',
      role: 'User',
    },
  ],
};

const headingsByType: Record<string, { title: string; subtitle: string }> = {
  selfie: {
    title: 'Selfie Photo Booth Reviews',
    subtitle: 'What people say about the Selfie Photo Booth App',
  },
  party: {
    title: 'Party Photo Booth Reviews',
    subtitle: 'Real feedback from parties, birthdays, and celebrations',
  },
  chinchin: {
    title: 'Chinchinbooth Reviews',
    subtitle: 'What creators say about the ChinChin Photo Booth style',
  },
  beautyplus: {
    title: 'BeautyPlus Photo Booth Reviews',
    subtitle: 'Why users love quick beauty filters and clean photo strips',
  },
  jepreto: {
    title: 'Jepreto Photobooth Reviews',
    subtitle: 'Feedback on our Jepreto.com-inspired web photo booth flow',
  },
  'pica-pica': {
    title: 'PicaPica Photobooth Reviews',
    subtitle: 'Hear from people who used the PicaPica booth experience',
  },
  default: {
    title: 'What Our Customers Say',
    subtitle: "Hear from people who've used our photo booth",
  },
};

const PhotoboothTestimonials: React.FC<PhotoboothTestimonialsProps> = ({
  type = 'default',
}) => {
  const key = testimonialsByType[type] ? type : 'default';
  const testimonials = testimonialsByType[key];
  const heading = headingsByType[key] ?? headingsByType.default;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">{heading.title}</h2>
        <p className="text-xl text-gray-600 text-center mb-12">{heading.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoboothTestimonials;
