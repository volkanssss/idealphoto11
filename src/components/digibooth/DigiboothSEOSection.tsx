
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

const DigiboothSEOSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">İdeal Photo's Professional Digibooth Platform</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our digital photo solution creates stunning, professional-quality photo strips and memories. The platform combines cutting-edge technology with intuitive controls, making it perfect for events, weddings, corporate functions, and personal celebrations. Experience unmatched customization with signature frame designs, professional-grade filters, and real-time editing capabilities.
          </p>
          
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className={cn("rounded-md border border-gray-200 bg-white shadow-sm transition-all", isOpen ? "mt-6" : "mt-2")}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full flex justify-between items-center py-2 px-4 bg-white" onClick={() => setIsOpen(!isOpen)}>
                <span>{isOpen ? "Read less" : "Read more about our exclusive Digibooth technology"}</span>
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="p-6 text-gray-700 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Advanced Image Processing</h3>
              <p>
                Our proprietary real-time image processing engine delivers superior image quality with minimal processing time. Each photo is enhanced using adaptive lighting algorithms that automatically adjust for various environmental conditions, ensuring perfect photos every time.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Custom Branded Experiences</h3>
              <p>
                For businesses and event planners, our platform offers extensive branding opportunities. Complete integration of your brand elements is possible—from custom frames featuring your logo to branded filters that enhance your visual identity. This level of personalization makes it the preferred choice for marketing activations and branded experiences.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Advanced Border Styling</h3>
              <p>
                Our exclusive border styling system allows users to apply multiple border styles, adjust border widths with pixel-perfect precision, and select from a curated collection of thematic frame designs. This system allows for thousands of unique combinations, ensuring distinctive photos.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Seamless Cloud Integration</h3>
              <p>
                Digibooth features seamless cloud integration that enables instant access to your photos across all devices. Our secure cloud storage ensures your memories are safely preserved, while our sharing technology makes it effortless to distribute your photos to guests and participants. This infrastructure supports larger events with hundreds or even thousands of participants, maintaining high performance even under heavy usage.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Real-Time Background Removal Technology</h3>
              <p>
                Unique to İdeal Photo's Digibooth is our advanced real-time background removal technology. Unlike competing applications that offer basic or delayed background removal, our system processes images instantly, allowing users to replace backgrounds on the fly. This technology uses proprietary AI algorithms trained specifically for photobooth environments, resulting in cleaner edges and more natural-looking composite images than what's possible with general-purpose photo editing tools.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Motion-Sensing Capture Innovation</h3>
              <p>
                For a truly hands-free experience, Digibooth incorporates motion-sensing capture technology that detects when subjects are positioned optimally. This innovative feature allows guests to trigger photos with simple gestures, eliminating the need for physical button presses and creating a more interactive experience. Our system recognizes multiple participants and adapts framing automatically, ensuring everyone is perfectly positioned in group shots.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Event Analytics Dashboard</h3>
              <p>
                For event organizers, our Digibooth provides valuable insights through a comprehensive analytics dashboard. Track engagement metrics, monitor sharing activity, and analyze participant demographics to measure the success of your event. These analytics tools are exclusive to İdeal Photo's platform and offer actionable data that can inform future event planning and marketing strategies.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Conclusion: The Ultimate Photo Experience</h3>
              <p>
                İdeal Photo's Digibooth represents the culmination of years of development and refinement in digital photo technology. By combining intuitive controls with powerful customization options and professional-quality output, we've created a platform that delivers exceptional photo experiences for any occasion. Whether you're preserving memories from a special celebration or creating branded content for your business, our Digibooth technology ensures results that exceed expectations.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default DigiboothSEOSection;
