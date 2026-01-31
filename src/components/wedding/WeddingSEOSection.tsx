
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Camera, Heart, Download, Share2 } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const WeddingSEOSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.section 
      className="bg-gradient-to-b from-rose-50 to-white py-16 md:py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-4">
            ✨ Perfect for Your Big Day
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
            The Ultimate Wedding Photo Booth Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-rose-100">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Elevate your wedding celebration with our premium virtual wedding photo booth. Designed to capture the joy, romance, and fun of your special day, our platform offers elegant templates, beautiful filters, and instant sharing capabilities that your guests will love. No expensive equipment needed—just pure joy and lasting memories.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-medium">
                <Camera className="h-3 w-3 mr-1" /> Virtual Wedding Booth
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-medium">
                <Heart className="h-3 w-3 mr-1" /> Romantic Filters
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-medium">
                <Download className="h-3 w-3 mr-1" /> Instant Keepsakes
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                <Share2 className="h-3 w-3 mr-1" /> Guest Book Ready
              </span>
            </div>
            
            <Collapsible 
              open={isOpen} 
              onOpenChange={setIsOpen} 
              className={cn(
                "rounded-lg border border-rose-100 bg-white transition-all overflow-hidden",
                isOpen ? "shadow-md" : ""
              )}
            >
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="w-full flex justify-between items-center py-3 px-4 hover:bg-rose-50 text-rose-700"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="font-medium">
                    {isOpen ? "Read less" : "Read more about Wedding Photo Booth features"}
                  </span>
                  <span className="h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center">
                    {isOpen ? <ChevronUp className="h-3 w-3 text-rose-600" /> : <ChevronDown className="h-3 w-3 text-rose-600" />}
                  </span>
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="p-6 text-gray-700 space-y-6 bg-rose-50/30">
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-rose-500 pl-4">Digital Guest Book Evolution</h3>
                <p>
                  Modern weddings are embracing digital solutions that complement traditional elements. Our virtual photo booth serves as an interactive digital guest book, allowing friends and family to snap candid moments, add personal messages, and instantly contribute to a collective digital album. It's the perfect modern twist on a classic tradition, ensuring you capture every smile and well-wish from your loved ones.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-rose-500 pl-4">Elegant Customization</h3>
                <p>
                  We understand that every wedding has a unique theme and color palette. Our platform offers sophisticated customization options, from classic floral borders to minimalist modern frames. Whether your wedding style is rustic chic, black-tie formal, or bohemian romance, you can tailor the photo booth experience to seamlessly match your decor and aesthetic.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-rose-500 pl-4">Connect Distant Loved Ones</h3>
                <p>
                  In today's global world, not every loved one can make it to the venue. Our virtual wedding photo booth bridges the distance, allowing remote guests to participate in the celebration. By simply sharing a link, friends and family from across the globe can take photos "with" you, creating a truly inclusive celebration that transcends geographical boundaries.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-rose-500 pl-4">High-Resolution Memories</h3>
                <p>
                  Unlike ephemeral social media snaps, images created with our platform are rendered in high resolution, suitable for printing. You can easily compile these digital memories into a physical wedding album, print them as thank-you cards, or display them in a digital frame in your home. The quality ensures that your wedding day memories remain crisp and beautiful for years to come.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-rose-500 pl-4">Privacy and Ease of Use</h3>
                <p>
                  We prioritize your privacy and your guests' convenience. Our browser-based solution requires no app downloads or complex registrations. Guests simply click, snap, and celebrate. All processing happens locally on the device, ensuring that personal photos remain private until shared. It's a hassle-free, secure, and delightful addition to your wedding entertainment.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WeddingSEOSection;
