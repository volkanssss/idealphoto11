
import React from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { motion } from 'framer-motion';

interface PhotoboothLayoutProps {
  children: React.ReactNode;
  bgColor?: string;
  type?: 'pica-pica' | 'digibooth' | 'kpop' | 'vintage' | 'wedding';
}

const getGradientByType = (type?: string) => {
  switch (type) {
    case 'pica-pica':
      return 'bg-gradient-to-r from-pink-50 to-yellow-50';
    case 'digibooth':
      return 'bg-gradient-to-b from-blue-50 via-indigo-50 to-violet-50';
    case 'kpop':
      return 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100 via-pink-50 to-fuchsia-50';
    case 'vintage':
      return 'bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-amber-50 via-yellow-50 to-orange-50';
    case 'wedding':
      return 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-50 via-pink-50 to-white';
    default:
      return 'bg-gradient-to-r from-violet-50 to-fuchsia-50';
  }
};

const PhotoboothLayout: React.FC<PhotoboothLayoutProps> = ({ 
  children,
  bgColor,
  type = 'digibooth'
}) => {
  const gradientBg = getGradientByType(type);
  
  return (
    <div className={`min-h-screen flex flex-col ${bgColor || gradientBg} pattern-grid-lg pattern-white pattern-bg-transparent pattern-opacity-10 pattern-size-4`}>
      <Header />
      
      <motion.div
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {children}
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default PhotoboothLayout;
