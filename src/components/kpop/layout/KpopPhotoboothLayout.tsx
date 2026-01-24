
import React from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import KpopSEOSection from '@/components/kpop/KpopSEOSection';
import KpopHeroSection from '@/components/kpop/sections/KpopHeroSection';
import MusicControlButton from '@/components/kpop/MusicControlButton';
import { useIsMobile } from '@/hooks/use-mobile';

interface KpopPhotoboothLayoutProps {
  children: React.ReactNode;
  bgColor: string;
  musicPlaying: boolean;
  toggleMusic: () => void;
  favoriteGroups: string[];
  toggleFavoriteGroup: (groupName: string) => void;
}

const KpopPhotoboothLayout: React.FC<KpopPhotoboothLayoutProps> = ({
  children,
  bgColor,
  musicPlaying,
  toggleMusic,
  favoriteGroups,
  toggleFavoriteGroup
}) => {
  const isMobile = useIsMobile();

  return (
    <div className={`min-h-screen flex flex-col ${bgColor}`}>
      <Header />
      
      <KpopHeroSection 
        favoriteGroups={favoriteGroups}
        toggleFavoriteGroup={toggleFavoriteGroup}
      />
      
      <MusicControlButton 
        musicPlaying={musicPlaying}
        toggleMusic={toggleMusic}
      />
      
      {children}
      
      <KpopSEOSection />
      <Footer />
    </div>
  );
};

export default KpopPhotoboothLayout;
