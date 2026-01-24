
import React from 'react';
import { Film, Clock, Camera, Aperture, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const VintageHeroArea: React.FC = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-700 via-amber-600 to-yellow-600 text-white py-24 md:py-32">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png')] bg-cover bg-center opacity-10"></div>
      
      {/* Film strip decorative elements */}
      <div className="absolute top-0 left-0 w-full h-12 bg-black flex">
        {Array(20).fill(0).map((_, i) => (
          <div key={i} className="h-full w-12 border-r-4 border-amber-700"></div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-black flex">
        {Array(20).fill(0).map((_, i) => (
          <div key={i} className="h-full w-12 border-r-4 border-amber-700"></div>
        ))}
      </div>
      
      <motion.div 
        className="container mx-auto px-4 text-center mt-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="flex justify-center mb-6"
          variants={itemVariants}
        >
          <div className="h-20 w-20 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
            <Film className="h-10 w-10 text-white" />
          </div>
        </motion.div>
        
        <h1 
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-serif"
        >
          Little Vintage Photo Booth | Retro Photo Booth with Classic Filters
        </h1>
        
        <motion.p 
          className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-10"
          variants={itemVariants}
        >
          Capture timeless memories with our retro-inspired photo booth experience.
          <span className="block text-amber-200 mt-2">Authentic vintage filters • Classic frames • Nostalgic effects</span>
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Button
            onClick={scrollToPhotobooth}
            size="lg"
            className="bg-white text-amber-700 hover:bg-amber-100 px-8 py-6 mb-12 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Camera className="h-5 w-5 mr-2" />
            Try Vintage Booth
          </Button>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
          variants={itemVariants}
        >
          {[
            { icon: Film, text: "Film Grain Effect" },
            { icon: Clock, text: "Time-Aged Photos" },
            { icon: Camera, text: "Classic Camera Styles" },
            { icon: Aperture, text: "Authentic Filters" }
          ].map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
              <feature.icon className="h-8 w-8 text-amber-300 mb-2" />
              <p className="text-white text-sm">{feature.text}</p>
            </div>
          ))}
        </motion.div>
        
        {/* Decorative year stamps */}
        <motion.div 
          className="flex justify-center gap-6 mb-6 text-amber-200 font-mono text-sm"
          variants={itemVariants}
        >
          <span>1950</span>
          <span>1960</span>
          <span>1970</span>
          <span>1980</span>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="animate-bounce cursor-pointer"
          onClick={scrollToPhotobooth}
          variants={itemVariants}
        >
          <ChevronDown className="h-8 w-8 mx-auto text-amber-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VintageHeroArea;
