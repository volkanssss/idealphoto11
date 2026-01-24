import React, { useState, useEffect } from 'react';
import SEOHead from '@/components/landing/SEOHead';
import { toast } from 'sonner';
import PhotoboothLayout from '@/components/photobooth/PhotoboothLayout';
import HeroArea from '@/components/photobooth/HeroArea';
import PhotoboothFAQ from '@/components/photobooth/PhotoboothFAQ';
import PhotoboothSEOSection from '@/components/photobooth/PhotoboothSEOSection';
import TipsBanner from '@/components/photobooth/TipsBanner';
import PhotoboothTabs from '@/components/photobooth/PhotoboothTabs';
import PhotoboothFeatures from '@/components/photobooth/PhotoboothFeatures';
import PhotoboothTestimonials from '@/components/photobooth/PhotoboothTestimonials';
import usePhotoboothState from '@/hooks/usePhotoboothState';
import { downloadPhotoStrip } from '@/utils/downloadPhotoStrip';
import { FilterType } from '@/components/photobooth/FilterSelector';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import { motion } from 'framer-motion';

const selfieStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Selfie Photo Booth App",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online selfie photo booth app with filters, frames and instant sharing. Take perfect selfies with professional photo booth effects.",
  "screenshot": "https://idealphotovercel.com/selfie-preview.png",
  "softwareVersion": "2.1",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "2847"
  }
};

const SelfiePhotobooth = () => {
  const {
    capturedPhotos,
    isCapturing,
    bgColor,
    selectedFilter,
    countdownTime,
    frameColor,
    selectedSticker,
    showControls,
    isDownloading,
    setIsDownloading,
    handlePhotoCaptured,
    handleTakePhoto,
    handleRetakePhoto,
    handleTakeNewPhotos,
    handleFilterChange,
    handleCountdownChange,
    setFrameColor,
    setSelectedSticker
  } = usePhotoboothState();
  
  const [activeTab, setActiveTab] = useState('capture');
  const [showTips, setShowTips] = useState(true);
  const [layoutMode, setLayoutMode] = useState('classic');
  
  const handleDownloadStrip = async () => {
    if (capturedPhotos.length < 3) {
      toast.error('Please take at least 3 photos first');
      return;
    }
    
    downloadPhotoStrip(setIsDownloading);
    console.log('Download completed:', new Date().toISOString());
  };
  
  const handleSharePhotos = () => {
    if (capturedPhotos.length === 0) {
      toast.error('Please take some photos first');
      return;
    }
    
    if (navigator.share) {
      navigator.share({
        title: 'My Selfie Photos',
        text: 'Check out these awesome selfies I took with the Selfie Photo Booth!',
        url: 'https://idealphotovercel.com/selfie-photobooth'
      })
      .then(() => toast.success('Photos shared successfully!'))
      .catch((error) => {
        console.error('Error sharing:', error);
        toast.error('Failed to share photos');
      });
    } else {
      toast.info('Copy this link to share: https://idealphotovercel.com/selfie-photobooth');
    }
  };
  
  const toggleLayoutMode = () => {
    const modes = ['classic', 'modern', 'fun'];
    const currentIndex = modes.indexOf(layoutMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setLayoutMode(modes[nextIndex]);
    toast.success(`Layout changed to ${modes[nextIndex]} mode`);
  };
  
  useEffect(() => {
    if (capturedPhotos.length >= 4 && activeTab === 'capture') {
      setActiveTab('preview');
      toast.success('Photo session complete! Now customize your selfies');
    }
  }, [capturedPhotos.length, activeTab]);
  
  useEffect(() => {
    if (showTips) {
      const timer = setTimeout(() => {
        setShowTips(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showTips]);

  return (
    <>
      <SEOHead
        title="Selfie Photo Booth App | Free Online Selfie Photo Booth"
        description="Take perfect selfies with our free online selfie photo booth! Professional filters, fun frames, instant sharing. Create amazing selfie strips in seconds - No download required!"
        canonicalPath="/selfie-photobooth"
        keywords="selfie photo booth, online selfie booth, selfie app, free selfie photo booth, selfie camera, selfie filters, selfie frames, selfie booth online, selfie photobooth app"
        ogType="website"
        structuredData={selfieStructuredData}
      />
      
      <PhotoboothLayout bgColor={bgColor} type="pica-pica">
        <HeroArea />
        
        {showTips && <TipsBanner onDismiss={() => setShowTips(false)} />}
        
        <motion.main 
          id="photobooth-area" 
          className="flex-grow container mx-auto px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <PhotoboothTabs 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            layoutMode={layoutMode}
            toggleLayoutMode={toggleLayoutMode}
            capturedPhotos={capturedPhotos}
            isCapturing={isCapturing}
            showControls={showControls}
            selectedFilter={selectedFilter as FilterType}
            countdownTime={countdownTime}
            handlePhotoCaptured={handlePhotoCaptured}
            handleTakePhoto={handleTakePhoto}
            handleRetakePhoto={handleRetakePhoto}
            handleFilterChange={handleFilterChange}
            handleCountdownChange={handleCountdownChange}
            handleTakeNewPhotos={handleTakeNewPhotos}
            handleDownloadStrip={handleDownloadStrip}
            handleSharePhotos={handleSharePhotos}
            frameColor={frameColor as FrameColorType}
            setFrameColor={setFrameColor}
            selectedSticker={selectedSticker as StickerType}
            setSelectedSticker={setSelectedSticker}
            isDownloading={isDownloading}
          />
        </motion.main>
        
        <PhotoboothFeatures />
        <PhotoboothTestimonials type="selfie" />
        <PhotoboothFAQ />
        <PhotoboothSEOSection />
      </PhotoboothLayout>
    </>
  );
};

export default SelfiePhotobooth;
