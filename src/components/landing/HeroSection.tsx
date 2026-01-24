
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Instagram, Music, Camera, ArrowRight, Star, Check, ChevronDown } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut"
      }
    }
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] via-[#D946EF] to-[#EC4899] opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/3fc22a76-7d7a-4617-b0df-6998c07b60ea.png')] bg-cover bg-center opacity-10"></div>

      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-pink-300 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-violet-300 opacity-20 blur-3xl animate-pulse" style={{
        animationDelay: '1s',
        animationDuration: '7s'
      }}></div>
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-300 opacity-20 blur-3xl animate-pulse" style={{
        animationDelay: '0.5s',
        animationDuration: '8s'
      }}></div>

      <div className="container mx-auto px-4 md:px-6 py-28 md:py-36 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="text-center md:text-left">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                <span>FREE K-pop Idol Photobooth - ENHYPEN, NCT & More!</span>
              </div>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Free K-pop Photo Booth Online<br />
              <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">Photobooth with ENHYPEN, NCT, BTS & More Idols</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto md:mx-0"
              variants={itemVariants}
            >
              Create stunning K-pop photobooth pictures online for free with your favorite K-pop idols - ENHYPEN, NCT Dream, BTS, BLACKPINK. Professional photo strips, filters & instant download. No registration needed.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
              variants={itemVariants}
            >
              <Link to="/kpop-photobooth/" aria-label="Start creating photos">
                <Button size="lg" className="w-full sm:w-auto bg-white text-[#8B5CF6] hover:bg-white/90 shadow-lg transition-all hover:shadow-xl">
                  Start Creating Now
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToHowItWorks}
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10"
                aria-label="Learn how the photo booth works"
              >
                See How It Works
              </Button>
            </motion.div>

            {/* Feature indicators with icons */}
            <motion.div
              className="mt-10 flex flex-wrap justify-center md:justify-start gap-3"
              variants={itemVariants}
            >
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Heart className="h-5 w-5 text-pink-300 mr-2" fill="currentColor" />
                <span className="text-white text-sm">Photo Frames</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Instagram className="h-5 w-5 text-pink-300 mr-2" />
                <span className="text-white text-sm">Easy Sharing</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Music className="h-5 w-5 text-pink-300 mr-2" />
                <span className="text-white text-sm">Creative Styles</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Camera className="h-5 w-5 text-pink-300 mr-2" />
                <span className="text-white text-sm">4 Booth Styles</span>
              </div>
            </motion.div>

            {/* Premium badge */}
            <motion.div
              className="mt-12 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20"
              variants={itemVariants}
            >
              <div className="h-8 w-8 bg-gradient-to-br from-amber-400 to-pink-400 rounded-full flex items-center justify-center">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white text-sm font-medium">Premium Experience</p>
                <p className="text-white/70 text-xs">High quality photos with endless customization</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden md:block"
            variants={itemVariants}
          >
            {/* 3D Floating Photo Strips */}
            <div className="relative w-full h-[500px]">
              <motion.div
                className="absolute top-0 right-0 w-64 shadow-xl rounded-lg transform rotate-6 z-30 overflow-hidden"
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
              >
                <img alt="K-pop photo strip example" className="w-full h-auto rounded-lg" src="/lovable-uploads/3fc22a76-7d7a-4617-b0df-6998c07b60ea.png" />
              </motion.div>

              <motion.div
                className="absolute top-20 right-20 w-64 shadow-xl rounded-lg transform -rotate-3 z-20 overflow-hidden"
                initial={{ y: 0 }}
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
              >
                <img alt="K-pop idol sample" className="w-full h-auto rounded-lg" src="/lovable-uploads/95c01b04-2c56-4d10-8223-831f4995f862.png" />
              </motion.div>

              <motion.div
                className="absolute top-40 right-40 w-64 shadow-xl rounded-lg transform rotate-12 z-10 overflow-hidden"
                initial={{ y: 0 }}
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
              >
                <img alt="K-pop idol sample" className="w-full h-auto rounded-lg" src="/lovable-uploads/036b7ff5-1d94-44f6-982f-2306826a8053.png" />
              </motion.div>

              {/* Enhanced decorative elements */}
              <motion.div
                className="absolute bottom-20 left-10 h-20 w-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 opacity-80"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
              />

              <motion.div
                className="absolute top-10 left-20 h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 opacity-80"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 1 }}
              />

              {/* Added floating buttons */}
              <motion.div
                className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg transform rotate-3 z-40"
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-purple-600 text-sm font-medium">Try Wedding Booth</p>
                  <ArrowRight className="h-4 w-4 text-purple-600" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.button
          onClick={scrollToHowItWorks}
          className="text-white/70 hover:text-white focus:outline-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </motion.button>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#f9fafb" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
