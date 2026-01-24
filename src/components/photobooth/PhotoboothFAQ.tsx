import React from 'react';
import FAQSchema from '@/components/landing/FAQSchema';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface PhotoboothFAQItem {
  question: string;
  answer: string;
}

interface PhotoboothFAQProps {
  title?: string;
  subtitle?: string;
  faqs?: PhotoboothFAQItem[];
  includeSchema?: boolean;
}

const defaultFaqs: PhotoboothFAQItem[] = [
  {
    question: 'What is Pica Pica Booth?',
    answer:
      'Pica Pica Booth is a virtual photo booth that lets you create photo strips with customizable frames, stickers, and effects directly in your browser.',
  },
  {
    question: 'How many photos can I take in one strip?',
    answer:
      'You can take up to 4 photos for a single photo strip. The most recent 4 photos will be displayed in your strip preview.',
  },
  {
    question: 'How do I save my photo strip?',
    answer:
      'After you take at least 3 photos, the download button becomes available. Tap “Download Strip” to save your photo strip to your device.',
  },
  {
    question: 'Can I customize the frame colors?',
    answer:
      'Yes. You can choose from multiple frame color options to match your aesthetic or event theme.',
  },
  {
    question: 'Can I add stickers to my photos?',
    answer:
      'Yes. Pick from our sticker collection and place them on your photo strip for a more personal, fun look.',
  },
];

const PhotoboothFAQ: React.FC<PhotoboothFAQProps> = ({
  title = 'Frequently Asked Questions',
  subtitle = 'Quick answers to common questions',
  faqs,
  includeSchema = true,
}) => {
  const effectiveFaqs = faqs?.length ? faqs : defaultFaqs;

  return (
    <section id="faq" className="py-16 bg-gray-50">
      {includeSchema ? <FAQSchema faqs={effectiveFaqs} /> : null}

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-pink-600">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-lg shadow-sm border border-gray-100"
          >
            {effectiveFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="px-6 text-pink-600 hover:text-pink-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PhotoboothFAQ;
