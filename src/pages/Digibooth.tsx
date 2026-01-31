import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import PhotoboothLayout from '@/components/photobooth/PhotoboothLayout';
import DigiboothHeroArea from '@/components/digibooth/DigiboothHeroArea';
import DigiboothTabbedContent from '@/components/digibooth/tabs/DigiboothTabbedContent';
import DigiboothSaasFooter from '@/components/digibooth/DigiboothSaasFooter';
import DigiboothSEOSection from '@/components/digibooth/DigiboothSEOSection';
import useDigiboothState from '@/hooks/useDigiboothState';
import { useState } from 'react';
import { downloadPhotoStrip } from '@/utils/downloadPhotoStrip';
import { toast } from 'sonner';

const digiboothStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Digibooth - Digital Photo Booth Software",
  "applicationCategory": "BusinessApplication",
  "description": "Professional digital photo booth software for events, weddings, and corporate gatherings. Advanced customization options with instant sharing capabilities.",
  "url": "https://idealphotovercel.com/digibooth",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const Digibooth = () => {
  const {
    capturedPhotos,
    isCapturing,
    selectedFilter,
    filterAdjustments,
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
    handleFilterAdjustmentChange,
    handleCountdownChange,
    setFrameColor,
    setSelectedSticker
  } = useDigiboothState();

  const [activeTab, setActiveTab] = useState('camera');

  const handleDownloadStrip = async () => {
    if (capturedPhotos.length < 3) {
      toast.error('Please take at least 3 photos first');
      return;
    }
    downloadPhotoStrip(setIsDownloading);
  };

  const handleSharePhotos = () => {
    if (capturedPhotos.length === 0) {
      toast.error('Please take some photos first');
      return;
    }

    if (navigator.share) {
      navigator.share({
        title: 'My Digibooth Photos',
        text: 'Check out these photos from Digibooth!',
        url: 'https://idealphotovercel.com/digibooth'
      });
    } else {
      toast.info('Copy this link to share: https://idealphotovercel.com/digibooth');
    }
  };

  return (
    <>
      <SEOHead
        title="Digital Photo Booth | Professional Event Photo Booth Software | Ideal Photo"
        description="Professional digital photo booth software for events, weddings, and corporate gatherings. Advanced customization with instant sharing capabilities. Try our free online photo booth today!"
        canonicalPath="/digibooth"
        keywords="digital photo booth, online photo booth, virtual photo booth software, event photo booth, wedding photo booth, corporate photo booth, ideal photo booth"
        structuredData={digiboothStructuredData}
      />

      <PhotoboothLayout type="digibooth">
        <DigiboothHeroArea />

        <main className="container mx-auto px-4 py-8">
          <DigiboothTabbedContent
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isCapturing={isCapturing}
            showControls={showControls}
            selectedFilter={selectedFilter}
            filterAdjustments={filterAdjustments}
            countdownTime={countdownTime}
            capturedPhotos={capturedPhotos}
            frameColor={frameColor}
            selectedSticker={selectedSticker}
            isDownloading={isDownloading}
            handlePhotoCaptured={handlePhotoCaptured}
            handleTakePhoto={handleTakePhoto}
            handleRetakePhoto={handleRetakePhoto}
            handleTakeNewPhotos={handleTakeNewPhotos}
            handleFilterChange={handleFilterChange}
            handleFilterAdjustmentChange={handleFilterAdjustmentChange}
            handleCountdownChange={handleCountdownChange}
            handleDownloadStrip={handleDownloadStrip}
            handleSharePhotos={handleSharePhotos}
            setFrameColor={setFrameColor}
            setSelectedSticker={setSelectedSticker}
          />
        </main>

        <DigiboothSEOSection />
        <DigiboothSaasFooter />
      </PhotoboothLayout>
    </>
  );
};

export default Digibooth;
