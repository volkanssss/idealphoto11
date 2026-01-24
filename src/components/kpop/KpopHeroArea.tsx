
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Music, Star, Heart, Download, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KpopHeroArea: React.FC = () => {
  const scrollToPhotobooth = () => {
    const photoboothElement = document.getElementById('photobooth-area');
    if (photoboothElement) {
      photoboothElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const features = [
    { icon: Camera, text: "HD Photo Quality" },
    { icon: Music, text: "K-pop Background Music" },
    { icon: Heart, text: "Latest Idol Images" },
    { icon: Star, text: "Premium Filters" }
  ];

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-pink-400 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/3fc22a76-7d7a-4617-b0df-6998c07b60ea.png')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-300 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-300 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              ✨ Create K-pop Memories
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              K-pop Photo Booth | Create Photos with Your Favorite Idols
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Create amazing digital photos with your favorite K-pop idols. Customize with themed frames, effects, and share with friends.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button 
                onClick={scrollToPhotobooth}
                size="lg" 
                className="bg-white text-purple-600 hover:bg-white/90 shadow-lg transition-all hover:shadow-xl border-2 border-white"
              >
                <Camera className="mr-2 h-5 w-5" />
                Start Taking Photos
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                <Users className="mr-2 h-5 w-5" />
                Browse Idol Gallery
              </Button>
            </div>
          </motion.div>
          
          {/* Feature indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <feature.icon className="h-4 w-4 text-pink-200 mr-2" />
                <span className="text-white text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="mt-12 animate-bounce cursor-pointer" 
            onClick={scrollToPhotobooth}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <svg className="h-8 w-8 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default KpopHeroArea;
