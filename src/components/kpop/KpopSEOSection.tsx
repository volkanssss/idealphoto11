
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Camera, Heart, Download, Share2 } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const KpopSEOSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.section 
      className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-medium mb-4">
            ✨ Premium Feature
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            İdeal Photo's Ultimate K-pop Fan Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dream K-pop selfies made easy! Our platform lets you create virtual photos with authentic K-pop themed templates. Choose from exclusive filters, high-quality designs, and share-ready layouts that capture K-pop's vibrant style. Select your favorite theme and start creating!
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-medium">
                <Camera className="h-3 w-3 mr-1" /> Virtual K-pop photos
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-medium">
                <Heart className="h-3 w-3 mr-1" /> Idol photo booth
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                <Download className="h-3 w-3 mr-1" /> K-pop selfie maker
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                <Share2 className="h-3 w-3 mr-1" /> Share with friends
              </span>
            </div>
            
            <Collapsible 
              open={isOpen} 
              onOpenChange={setIsOpen} 
              className={cn(
                "rounded-lg border border-gray-200 bg-white transition-all overflow-hidden",
                isOpen ? "shadow-md" : ""
              )}
            >
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="w-full flex justify-between items-center py-3 px-4 hover:bg-gray-50"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-gray-700 font-medium">
                    {isOpen ? "Read less" : "Read more about our exclusive K-pop Photo Experience"}
                  </span>
                  <span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                    {isOpen ? <ChevronUp className="h-3 w-3 text-gray-600" /> : <ChevronDown className="h-3 w-3 text-gray-600" />}
                  </span>
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="p-6 text-gray-700 space-y-6 bg-gray-50 bg-opacity-50">
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-purple-500 pl-4">Authentic Visual Experience</h3>
                <p>
                  Our design team works closely with K-pop culture experts to ensure every visual element—from color palettes to typography—aligns with current aesthetic trends. This attention to detail creates a truly immersive experience that resonates with fans worldwide.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-purple-500 pl-4">Exclusive Selection</h3>
                <p>
                  Our platform features a constantly updated collection of images that reflect recent comebacks, concept changes, and group lineups. This dedication to staying current keeps the experience fresh and exciting for returning users.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-purple-500 pl-4">Fan-Focused Designs</h3>
                <p>
                  From photocard-inspired layouts to concert memory templates, each design option is crafted with fan activities in mind. These specialized templates allow users to create images that seamlessly integrate with their existing collections.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-purple-500 pl-4">K-pop Music Integration</h3>
                <p>
                  Exclusive to İdeal Photo's K-pop platform is our music integration feature, which allows users to add appropriate background music while creating their photos. This multisensory approach enhances the creative experience, allowing fans to immerse themselves in their favorite songs while designing their perfect photo memories. The synchronized experience of visual and audio elements creates a more engaging and authentic K-pop fan moment.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-purple-500 pl-4">Fan Community Features</h3>
                <p>
                  Our platform goes beyond simple photo creation by incorporating community elements that connect fans. Users can participate in themed photo challenges tied to comebacks and anniversaries, share their creations with other fans through our integrated gallery, and even collaborate on group photo projects. These social features transform the photo creation process into a shared experience that strengthens fan connections.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-purple-500 pl-4">K-pop Calendar Integration</h3>
                <p>
                  A standout feature of our K-pop Photo Booth is its integration with the K-pop calendar. The platform automatically highlights important dates such as idol birthdays, debut anniversaries, and comeback schedules, suggesting themed templates and special effects to celebrate these occasions. This thoughtful feature helps fans participate in fandom celebrations and commemorations with personalized photo content.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-purple-500 pl-4">Multilingual Support</h3>
                <p>
                  Recognizing the global nature of K-pop fandom, our platform offers comprehensive multilingual support, with interfaces available in Korean, English, Japanese, Chinese, Spanish, and more. This accessibility ensures that fans worldwide can enjoy the full functionality of our platform without language barriers, reflecting the international community that makes K-pop culture so vibrant.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default KpopSEOSection;
