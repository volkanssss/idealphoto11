
import React, { useState } from 'react';
import SEOHead from '@/components/landing/SEOHead';
import { toast } from 'sonner';

// Components
import Header from '@/components/landing/Header';
import WeddingHeroArea from '@/components/wedding/WeddingHeroArea';
import WeddingWebcamSection from '@/components/wedding/WeddingWebcamSection';
import WeddingPhotoStripPreview from '@/components/wedding/WeddingPhotoStripPreview';
import WeddingCustomizationPanel from '@/components/wedding/WeddingCustomizationPanel';
import Footer from '@/components/landing/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

// Hooks
import useVintageState from '@/hooks/useVintageState';
import { downloadPhotoStrip } from '@/utils/downloadPhotoStrip';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';

const WeddingPhotobooth = () => {
  // Use our custom hook for state management
  const {
    capturedPhotos,
    isCapturing,
    bgColor,
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
  } = useVintageState();
  
  const isMobile = useIsMobile();
  
  // Border style state
  const [borderStyle, setBorderStyle] = useState<BorderStyle>('solid');
  const [borderWidth, setBorderWidth] = useState<BorderWidth>('thin');
  const [frameTheme, setFrameTheme] = useState<FrameTheme>('wedding');
  const [showBackgroundRemoval, setShowBackgroundRemoval] = useState(false);
  
  // Handle downloading the photo strip
  const handleDownloadStrip = async () => {
    if (capturedPhotos.length < 3) {
      toast.error('Please take at least 3 photos first');
      return;
    }
    
    // Pass true for isWedding parameter to use wedding layout
    downloadPhotoStrip(setIsDownloading, true);
  };
  
  // Toggle background removal
  const toggleBackgroundRemoval = () => {
    setShowBackgroundRemoval(!showBackgroundRemoval);
    toast.success(showBackgroundRemoval ? 'Background removal disabled' : 'Background removal enabled');
  };

  return (
    <>
      <SEOHead 
        title="Wedding Photo Booth | Elegant Photo Memories for Your Special Day - Ideal Photo"
        description="Create beautiful wedding photo memories with our elegant Wedding Photo Booth. Perfect for weddings, engagement parties, and rehearsal dinners. Start capturing magical moments free today!"
        canonicalPath="/wedding-photobooth"
        keywords="wedding photo booth, wedding photography, bridal photo booth, wedding memories"
        ogType="website"
      />
      
      <div className={`min-h-screen flex flex-col ${bgColor}`}>
        <Header />
        
        {/* Hero Area */}
        <WeddingHeroArea />
        
        {/* Main Photobooth Area */}
        <main id="photobooth-area" className="flex-grow container mx-auto px-4 py-8">
          {/* Customization Panel - Above the main content */}
          {capturedPhotos.length > 0 && (
            <div className="mb-6">
              <WeddingCustomizationPanel
                frameColor={frameColor}
                setFrameColor={setFrameColor}
                sticker={selectedSticker}
                setSticker={setSelectedSticker}
                borderStyle={borderStyle}
                setBorderStyle={setBorderStyle}
                borderWidth={borderWidth}
                setBorderWidth={setBorderWidth}
                frameTheme={frameTheme}
                setFrameTheme={setFrameTheme}
                showBackgroundRemoval={showBackgroundRemoval}
                toggleBackgroundRemoval={toggleBackgroundRemoval}
              />
            </div>
          )}
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main webcam display */}
            <WeddingWebcamSection 
              isCapturing={isCapturing}
              showControls={showControls}
              selectedFilter={selectedFilter}
              filterAdjustments={filterAdjustments}
              countdownTime={countdownTime}
              capturedPhotos={capturedPhotos}
              onCapture={handlePhotoCaptured}
              onTakePhoto={handleTakePhoto}
              onRetakePhoto={handleRetakePhoto}
              onFilterChange={handleFilterChange}
              onAdjustmentChange={handleFilterAdjustmentChange}
              onCountdownChange={handleCountdownChange}
            />
            
            {/* Side panel for photo strip */}
            <div className="lg:w-[40%] bg-white/90 rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-serif font-light text-center text-gray-800 mb-4">Wedding Photo Layout</h2>
              <WeddingPhotoStripPreview 
                photos={capturedPhotos} 
                maxDisplay={4} 
                onDownload={handleDownloadStrip} 
                onTakeNewPhotos={handleTakeNewPhotos}
                frameColor={frameColor}
                setFrameColor={setFrameColor}
                sticker={selectedSticker}
                setSticker={setSelectedSticker}
                borderStyle={borderStyle}
                setBorderStyle={setBorderStyle}
                borderWidth={borderWidth}
                setBorderWidth={setBorderWidth}
                frameTheme={frameTheme}
                setFrameTheme={setFrameTheme}
              />
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default WeddingPhotobooth;
