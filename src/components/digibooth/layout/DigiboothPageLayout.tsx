
import React from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import DigiboothHeroArea from '@/components/digibooth/DigiboothHeroArea';
import DigiboothSEOSection from '@/components/digibooth/DigiboothSEOSection';
import { useIsMobile } from '@/hooks/use-mobile';

interface DigiboothPageLayoutProps {
  children: React.ReactNode;
}

const DigiboothPageLayout: React.FC<DigiboothPageLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-indigo-50 to-violet-50">
      <Header />
      <DigiboothHeroArea />
      
      {children}
      
      <DigiboothSEOSection />
      <Footer />
    </div>
  );
};

export default DigiboothPageLayout;
