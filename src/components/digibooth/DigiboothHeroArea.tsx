
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Monitor, Wifi, Layers, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DigiboothHeroArea: React.FC = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-teal-500"></div>
      
      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-teal-300 opacity-30 blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-300 opacity-30 blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      
      {/* Digital grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              Professional Digital Solution
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
          >
            Digital Photo Booth | Professional Event Photo Booth Software
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            The premium digital photo booth experience for events, weddings, parties, and corporate gatherings.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Button 
              onClick={scrollToPhotobooth}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <span>Start Digital Experience</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg backdrop-blur-sm"
            >
              View Features
            </Button>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { icon: Monitor, text: "High Resolution Output" },
              { icon: Wifi, text: "Instant Cloud Sharing" },
              { icon: Layers, text: "Multiple Layouts" },
              { icon: Zap, text: "Fast Processing" }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                <feature.icon className="h-8 w-8 text-teal-200 mx-auto mb-3" />
                <p className="text-white text-sm font-medium">{feature.text}</p>
              </div>
            ))}
          </motion.div>
          
          {/* Technical spec line */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-6 mb-12"
          >
            <div className="backdrop-blur-sm bg-white/5 rounded-full px-4 py-1.5 text-xs text-white/70 border border-white/10">
              4K Resolution
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-full px-4 py-1.5 text-xs text-white/70 border border-white/10">
              AI Enhanced
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-full px-4 py-1.5 text-xs text-white/70 border border-white/10">
              Cloud Integrated
            </div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            variants={itemVariants} 
            className="animate-bounce cursor-pointer"
            onClick={scrollToPhotobooth}
          >
            <ChevronDown className="h-8 w-8 mx-auto text-white/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigiboothHeroArea;
