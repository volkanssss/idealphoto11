import React, { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Camera, Heart, Star } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export type PhotoboothSEOSectionDetail = {
  title: string;
  text: string;
};

export type PhotoboothSEOHighlight = {
  title: string;
  description: string;
};

interface PhotoboothSEOSectionProps {
  heading?: string;
  intro?: string;
  learnMoreLabel?: string;
  highlights?: PhotoboothSEOHighlight[];
  details?: PhotoboothSEOSectionDetail[];
}

const defaultHighlights: PhotoboothSEOHighlight[] = [
  {
    title: 'Professional Quality',
    description: 'Studio-grade photo quality with advanced image processing.',
  },
  {
    title: 'Creative Freedom',
    description: 'Endless customization options with filters and effects.',
  },
  {
    title: 'Instant Sharing',
    description: 'Share your memories instantly on any platform.',
  },
];

const defaultDetails: PhotoboothSEOSectionDetail[] = [
  {
    title: 'The Evolution of Photo Booths: From Analog to Digital',
    text: "Photo booths have come a long way since their invention in the early 20th century. What started as simple black-and-white strip photos has evolved into a sophisticated digital experience. Pica Pica Booth represents the cutting edge of this evolution, combining modern camera access with creative digital elements to help you create high-quality, personalized photo memories.",
  },
  {
    title: 'Why Choose Pica Pica Booth',
    text: 'Our digital photobooth experience stands out by offering flexible customization options without physical constraints. Choose frames, filters, and stickers, then download your strip in seconds.',
  },
  {
    title: 'Perfect for Every Occasion',
    text: 'Whether you’re celebrating a birthday, hosting an online meetup, or just capturing daily moments, a virtual photo booth makes it easy to create shareable photo strips that feel special.',
  },
  {
    title: 'Conclusion: Create Lasting Memories',
    text: 'In the end, what matters most is the memory. Pica Pica Booth helps you turn quick snapshots into keepsakes you can save, share, and revisit anytime.',
  },
];

const PhotoboothSEOSection: React.FC<PhotoboothSEOSectionProps> = ({
  heading = 'Pica Pica Photo Booth | Premium Digital Photo Experience',
  intro =
    'Transform ordinary moments into extraordinary memories with Pica Pica Photo Booth. Our digital photo experience combines professional-quality capture with playful creativity—perfect for quick selfies, group shots, and shareable photo strips.',
  learnMoreLabel = 'Learn more about Pica Pica Photo Booth',
  highlights = defaultHighlights,
  details,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const effectiveDetails = useMemo(
    () => (details?.length ? details : defaultDetails),
    [details]
  );

  return (
    <section className="relative bg-gradient-to-b from-rose-50 to-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/d361608b-226a-46b1-9c86-864028b3363c.png')] bg-cover bg-center opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 text-rose-900">
            {heading}
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-rose-800/90 mb-6 leading-relaxed text-center md:text-lg">
              {intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-rose-100">
                <Camera className="w-8 h-8 text-rose-600 mb-3" />
                <h3 className="text-lg font-semibold text-rose-900 mb-2">
                  {highlights[0].title}
                </h3>
                <p className="text-sm text-rose-700">{highlights[0].description}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-rose-100">
                <Star className="w-8 h-8 text-rose-600 mb-3" />
                <h3 className="text-lg font-semibold text-rose-900 mb-2">
                  {highlights[1].title}
                </h3>
                <p className="text-sm text-rose-700">{highlights[1].description}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-rose-100">
                <Heart className="w-8 h-8 text-rose-600 mb-3" />
                <h3 className="text-lg font-semibold text-rose-900 mb-2">
                  {highlights[2].title}
                </h3>
                <p className="text-sm text-rose-700">{highlights[2].description}</p>
              </div>
            </div>

            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className={cn(
                'rounded-xl border border-rose-200 bg-white/90 backdrop-blur-sm transition-all',
                isOpen ? 'mt-6' : 'mt-2'
              )}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full flex justify-between items-center py-4 px-6 bg-white/50 hover:bg-rose-50 border-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-rose-900">
                    {isOpen ? 'Show less details' : learnMoreLabel}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-rose-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-rose-600" />
                  )}
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className="p-6 space-y-8 text-rose-800">
                {effectiveDetails.map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-2xl font-semibold text-gray-800 mt-2">
                      {item.title}
                    </h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoboothSEOSection;
