import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Camera, Clock, Film } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const VintageSEOSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-amber-50 to-white py-16 md:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-amber-200/50" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-amber-200/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 text-amber-900">
            Little Vintage Photobooth App | Premium Digital Photo Experience
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-amber-800/90 mb-6 leading-relaxed text-center md:text-lg">
              Step into a world where classic photography meets digital innovation with Little Vintage Photobooth App. 
              Our meticulously crafted digital photo experience combines authentic vintage aesthetics with modern convenience, 
              offering professional-quality photographs enhanced with period-specific filters, classic frame designs, and 
              carefully aged paper effects that transport your memories through time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-amber-100">
                <Film className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Authentic Vintage Effects</h3>
                <p className="text-sm text-amber-700">Historically accurate filters and effects that perfectly capture the essence of different photographic eras.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-amber-100">
                <Camera className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Professional Quality</h3>
                <p className="text-sm text-amber-700">High-resolution output with carefully calibrated vintage effects for stunning results.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-amber-100">
                <Clock className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Instant Delivery</h3>
                <p className="text-sm text-amber-700">Modern convenience meets vintage charm with immediate digital delivery.</p>
              </div>
            </div>
            
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className={cn(
                "rounded-xl border border-amber-200 bg-white/90 backdrop-blur-sm transition-all",
                isOpen ? "mt-6" : "mt-2"
              )}
            >
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full flex justify-between items-center py-4 px-6 bg-white/50 hover:bg-amber-50 border-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-amber-900">{isOpen ? "Show less about vintage photography" : "Discover more about our vintage effects"}</span>
                  {isOpen ? <ChevronUp className="h-5 w-5 text-amber-600" /> : <ChevronDown className="h-5 w-5 text-amber-600" />}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="p-6 space-y-6 text-amber-800">
                <h3 className="text-2xl font-semibold text-amber-800 mt-6">The Enduring Appeal of Vintage Photography</h3>
                <p>
                  In our digital age of instant filters and perfect pixels, there's something uniquely captivating about the aesthetic of vintage photography. The subtle grain, slightly muted colors, and authentic imperfections tell stories that ultra-sharp modern images often cannot. Little Vintage Photobooth App harnesses this timeless appeal, offering carefully crafted filters and effects that authentically recreate the look and feel of photos from different eras – from the sepia-toned memories of the early 20th century to the vibrant polaroids of the 1970s. This connection to photographic history provides a sense of nostalgia and emotional depth that resonates with users across generations.
                </p>
                
                <h3 className="text-2xl font-semibold text-amber-800 mt-6">Classic Photo Booth Experience, Reimagined</h3>
                <p>
                  The traditional photo booth – those small curtained enclosures where friends would squeeze together for a strip of memorable shots – has been a beloved institution since its invention in the 1920s. Our Little Vintage Photobooth App reimagines this classic experience for the digital era, preserving the spontaneous joy and intimate atmosphere while eliminating the limitations of physical booths. Users can still create the classic vertical photo strips that have become iconic, complete with the characteristic white borders and vintage styling, but with enhanced creative control and without the space constraints or waiting times of traditional booths.
                </p>
                
                <h3 className="text-2xl font-semibold text-amber-800 mt-6">Period-Authentic Filter Collection</h3>
                <p>
                  What sets our vintage photo booth apart is our extensive collection of historically accurate filters developed through careful study of photographic processes throughout history. From daguerreotype and tin type effects that capture the distinctive look of 19th-century photography to Kodachrome-inspired filters that perfectly replicate the signature look of this beloved film stock, our app offers more than simply "old-looking" effects. Each filter is designed to authentically represent specific photographic technologies and time periods, allowing users to match their images to particular eras or styles that resonate with their aesthetic preferences or event themes.
                </p>
                
                <h3 className="text-2xl font-semibold text-amber-800 mt-6">Wedding Photography Enhancement</h3>
                <p>
                  Weddings and vintage aesthetics share a natural affinity, with many couples drawn to the romantic, timeless quality that classic photography styles bring to their special day. Our Little Vintage Photobooth App serves as the perfect complement to professional wedding photography, offering guests an interactive experience that produces keepsakes aligned with the event's visual theme. With customizable frames that can incorporate wedding dates, monograms, or thematic elements, couples can provide their guests with personalized photo souvenirs that double as meaningful mementos of the celebration while maintaining a cohesive visual identity throughout all aspects of their wedding documentation.
                </p>
                
                <h3 className="text-2xl font-semibold text-amber-800 mt-6">Corporate Event Branding with Retro Flair</h3>
                <p>
                  For corporate events, our vintage photo booth offers a unique branding opportunity that stands out from conventional promotional activities. Companies can customize our classic frames and backgrounds with their logos and brand colors, creating promotional photos that employees or clients will actually want to keep and share. The distinctive vintage aesthetic ensures these branded photos won't be perceived as ordinary advertising materials, but rather as charming keepsakes that happen to reinforce brand awareness. This subtle approach to corporate communication often achieves greater reach and retention than more direct promotional efforts, especially at trade shows, product launches, or company celebrations.
                </p>
                
                <h3 className="text-2xl font-semibold text-amber-800 mt-6">Technical Excellence Behind the Nostalgia</h3>
                <p>
                  While our app embraces vintage aesthetics, the technology powering it is thoroughly modern. Advanced image processing algorithms ensure that our vintage effects render consistently across different lighting conditions and camera qualities. Our real-time preview feature allows users to see exactly how their vintage transformation will look before capturing the image, enabling adjustments to achieve the desired effect. Additionally, our background removal technology allows for seamless integration of subjects into historic or themed backgrounds, creating immersive vintage scenes that would be impossible with traditional photo booths or even with physical vintage cameras.
                </p>
                
                <h3 className="text-2xl font-semibold text-amber-800 mt-6">Sustainable Alternative to Traditional Photo Booths</h3>
                <p>
                  Environmental consciousness is increasingly important for event planning, and our digital vintage photo booth offers significant sustainability advantages. By eliminating the need for chemical processing, paper, and disposable cameras often associated with traditional photo booths, we provide an eco-friendly alternative that doesn't compromise on quality or experience. Users can choose to keep their photos entirely digital – sharing them electronically to reduce resource consumption – or selectively print only their favorite images using eco-friendly printing options. This approach aligns with the values of environmentally conscious consumers and event planners while still delivering the vintage aesthetic they desire.
                </p>
                
                <h3 className="text-2xl font-semibold text-amber-800 mt-6">Educational Value Through Photographic History</h3>
                <p>
                  Beyond entertainment and aesthetics, our Little Vintage Photobooth App contains subtle educational elements that introduce users to the rich history of photography. Each filter includes optional information about the photographic process it emulates, the time period it was prevalent, and interesting historical facts about photography's evolution. This educational component makes our app valuable for schools, museums, and cultural institutions looking to engage visitors with interactive exhibits about visual media history. The ability to experience firsthand how photography has changed over time creates a more meaningful connection to this art form's historical development.
                </p>
                
                <h3 className="text-2xl font-semibold text-amber-800 mt-6">Accessibility and Ease of Use</h3>
                <p>
                  Despite the sophistication of our vintage effects, we've designed Little Vintage Photobooth App to be remarkably user-friendly. The intuitive interface requires no photography knowledge to produce beautiful results, making it accessible to guests of all ages and technical abilities. The step-by-step guided process ensures everyone can successfully create and customize their vintage photos without frustration or complicated instructions. This accessibility is particularly valuable for events with diverse attendees, ensuring that everyone can participate equally in the photo experience regardless of their familiarity with photography concepts or digital technology.
                </p>
                
                <h3 className="text-2xl font-semibold text-amber-800 mt-6">Integration with Social Media and Digital Platforms</h3>
                <p>
                  While our app celebrates vintage aesthetics, it seamlessly integrates with contemporary sharing platforms. Users can instantly share their vintage-styled creations across all major social media networks with a single tap, extend their reach through custom event hashtags, or save high-resolution copies to their personal devices. This fusion of nostalgic visuals with modern distribution creates a unique juxtaposition that often generates increased engagement online. The distinctive vintage look helps photos stand out in cluttered social media feeds, driving higher interaction rates and making your event content more memorable in digital spaces.
                </p>
                
                <h3 className="text-2xl font-semibold text-amber-800 mt-6">Psychological Appeal of Vintage Imagery</h3>
                <p>
                  The popularity of vintage photography styles isn't merely aesthetic – it's deeply psychological. Research suggests that vintage imagery triggers nostalgia, which has been shown to increase feelings of social connectedness, improve mood, and even enhance perceptions of meaning in life. By offering authentic vintage photo experiences, our app taps into these psychological benefits, creating not just visually appealing images but emotionally resonant ones. Events that incorporate our vintage photo booth often report higher guest satisfaction and more positive associations with the experience, demonstrating the emotional power of well-executed nostalgic elements in contemporary settings.
                </p>
                
                <h3 className="text-2xl font-semibold text-amber-800 mt-6">Conclusion: Where Past and Present Create Timeless Memories</h3>
                <p>
                  Little Vintage Photobooth App stands at the fascinating intersection of historical appreciation and cutting-edge technology. By honoring the rich tradition of photography while embracing the possibilities of digital innovation, we've created a photo experience that offers the best of both worlds. Whether you're planning a wedding with classic elegance, a corporate event with distinctive branding needs, or simply want to explore the aesthetic possibilities of vintage photography styles, our online photo booth provides the perfect blend of nostalgia and convenience. In a world where digital images are increasingly ephemeral, our vintage-inspired creations stand out as meaningful keepsakes that capture not just faces, but feelings, stories, and connections across time.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VintageSEOSection;
