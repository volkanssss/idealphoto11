
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PhotoboothLayout from '@/components/photobooth/PhotoboothLayout';
import KpopHeroArea from '@/components/kpop/KpopHeroArea';
import KpopPhotoBoothTabs from '@/components/kpop/sections/KpopPhotoBoothTabs';
import KpopFeatures from '@/components/kpop/KpopFeatures';
import KpopTestimonials from '@/components/kpop/KpopTestimonials';
import KpopPricing from '@/components/kpop/KpopPricing';
import KpopCTA from '@/components/kpop/KpopCTA';
import KpopSEOSection from '@/components/kpop/KpopSEOSection';
import useKpopState from '@/hooks/useKpopState';
import { downloadPhotoStrip } from '@/utils/downloadPhotoStrip';
import { toast } from 'sonner';
import { FrameTheme } from '@/components/digibooth/BorderStyleSelector';

const kpopStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "K-pop Photo Booth - İdeal Photo",
  "applicationCategory": "PhotoApplication",
  "description": "Create stunning K-pop inspired photo booth pictures with your favorite idol themes, filters, and backgrounds. Perfect for K-pop fans worldwide.",
  "url": "https://idealphotovercel.com/kpop-photobooth",
  "screenshot": "https://idealphotovercel.com/og-image.png",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const KpopPhotobooth = () => {
  const {
    capturedPhotos,
    isCapturing,
    selectedFilter,
    filterAdjustments,
    countdownTime,
    frameColor,
    selectedSticker,
    showControls,
    selectedIdols,
    handlePhotoCaptured,
    handleTakePhoto,
    handleRetakePhoto,
    handleFilterChange,
    handleFilterAdjustmentChange,
    handleCountdownChange,
    setFrameColor,
    setSelectedSticker,
    handleSelectIdols
  } = useKpopState();
  
  const [activeTab, setActiveTab] = useState('camera');
  const [currentTemplate, setCurrentTemplate] = useState('classic');
  const [frameTheme, setFrameTheme] = useState<FrameTheme>('default');
  
  const changeTemplate = (template: string) => {
    setCurrentTemplate(template);
    toast.success(`Template changed to ${template}`);
  };

  return (
    <>
      <Helmet>
        <title>K-pop Photo Booth | Create Idol-Inspired Photos | İdeal Photo</title>
        <meta name="description" content="Create stunning K-pop photo booth pictures with idol themes, stickers, and backgrounds. Perfect for ARMY, ONCE, BLINK, and all K-pop fans. Start creating now!" />
        <meta name="keywords" content="kpop photo booth, idol photo booth, bts photo booth, blackpink photo booth, twice photo booth, stray kids photo booth, kpop stickers, idol backgrounds" />
        <link rel="canonical" href="https://idealphotovercel.com/kpop-photobooth" />
        <script type="application/ld+json">
          {JSON.stringify(kpopStructuredData)}
        </script>
      </Helmet>
      
      <PhotoboothLayout type="kpop">
        <KpopHeroArea />
        
        <main className="container mx-auto px-4 py-8">
          <KpopPhotoBoothTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            currentTemplate={currentTemplate}
            changeTemplate={changeTemplate}
            isCapturing={isCapturing}
            showControls={showControls}
            selectedFilter={selectedFilter}
            filterAdjustments={filterAdjustments}
            countdownTime={countdownTime}
            capturedPhotos={capturedPhotos}
            frameColor={frameColor}
            setFrameColor={setFrameColor}
            selectedSticker={selectedSticker}
            setSelectedSticker={setSelectedSticker}
            handlePhotoCaptured={handlePhotoCaptured}
            handleTakePhoto={handleTakePhoto}
            handleRetakePhoto={handleRetakePhoto}
            handleFilterChange={handleFilterChange}
            handleFilterAdjustmentChange={handleFilterAdjustmentChange}
            handleCountdownChange={handleCountdownChange}
            selectedIdols={selectedIdols}
            handleSelectIdols={handleSelectIdols}
            frameTheme={frameTheme}
            setFrameTheme={setFrameTheme}
          />
        </main>
        
        <KpopFeatures />
        <KpopTestimonials />
        <KpopPricing />
        <KpopCTA />
        <KpopSEOSection />
      </PhotoboothLayout>
    </>
  );
};

export default KpopPhotobooth;
