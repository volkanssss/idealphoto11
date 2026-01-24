
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Camera, Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const WeddingHeroArea = () => {
  const scrollToPhotobooth = () => {
    const photoboothSection = document.getElementById('photobooth-area');
    if (photoboothSection) {
      photoboothSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-white"></div>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/a1660f2b-1189-47b0-9d3c-9423b25df5e3.png')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-100 opacity-40 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-rose-100 opacity-40 blur-3xl animate-pulse" style={{
        animationDelay: '1s',
        animationDuration: '7s'
      }}></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <Heart className="h-16 w-16 mx-auto mb-8 text-pink-400" fill="currentColor" />
          </motion.div>
          
          <h1 
            className="text-4xl md:text-6xl font-serif mb-6 text-gray-800"
          >
            Wedding Photo Booth | Elegant Photo Memories for Your Special Day
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-light mb-8 text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Capture your special day with beautiful photo layouts and elegant frames
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            variants={itemVariants}
          >
            <Button 
              className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToPhotobooth}
            >
              <Camera className="mr-2 h-5 w-5" /> 
              Start Capturing
            </Button>
            
            <Button 
              variant="outline" 
              className="border-pink-300 text-pink-500 hover:bg-pink-50 px-8 py-6 text-lg rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <Download className="mr-2 h-5 w-5" /> 
              View Examples
            </Button>
          </motion.div>
          
          {/* Feature badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={itemVariants}
          >
            <div className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 border border-gray-100">
              High Resolution Photos
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 border border-gray-100">
              Elegant Frames
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 border border-gray-100">
              Customizable Layouts
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 border border-gray-100">
              Instant Sharing
            </div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="animate-bounce cursor-pointer"
            onClick={scrollToPhotobooth}
            variants={itemVariants}
          >
            <ChevronDown className="h-8 w-8 mx-auto text-gray-400" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default WeddingHeroArea;
