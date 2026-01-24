
import React, { useState, useEffect } from 'react';
import SEOHead from '@/components/landing/SEOHead';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

// Components
import Header from '@/components/landing/Header';
import VintageHeroArea from '@/components/vintage/VintageHeroArea';
import VintageWebcamSection from '@/components/vintage/VintageWebcamSection';
import VintagePhotoStripPreview from '@/components/vintage/VintagePhotoStripPreview';
import VintageCustomizationPanel from '@/components/vintage/VintageCustomizationPanel';
import Footer from '@/components/landing/Footer';
import VintageSEOSection from '@/components/vintage/VintageSEOSection';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Share2, Download, Camera, Clock, Palette, Smile, Save, Book } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Hooks
import useVintageState from '@/hooks/useVintageState';
import { downloadPhotoStrip } from '@/utils/downloadPhotoStrip';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';

// Define structured data for SEO
const vintageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Little Vintage Photo Booth",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Create nostalgic vintage photo booth experiences with Little Vintage Photo Booth. Perfect for weddings, parties, and events seeking a classic retro feel.",
  "screenshot": "https://idealphotovercel.com/vintage-preview.png",
  "softwareVersion": "2.0"
};

const LittleVintagePhotobooth = () => {
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
  
  // UI State
  const [borderStyle, setBorderStyle] = useState<BorderStyle>('dotted');
  const [borderWidth, setBorderWidth] = useState<BorderWidth>('medium');
  const [frameTheme, setFrameTheme] = useState<FrameTheme>('vintage');
  const [showBackgroundRemoval, setShowBackgroundRemoval] = useState(false);
  const [activeTab, setActiveTab] = useState('camera');
  const [showVintageEffect, setShowVintageEffect] = useState(true);
  const [vintageYear, setVintageYear] = useState(1975);
  const [photoDate, setPhotoDate] = useState('Jul 16');
  
  // Feature enhancement state
  const [showTips, setShowTips] = useState(true);
  const [hasSeenTutorial, setHasSeenTutorial] = useState(false);
  
  // Handle downloading the photo strip
  const handleDownloadStrip = async () => {
    if (capturedPhotos.length < 3) {
      toast.error('Please take at least 3 photos first');
      return;
    }
    
    downloadPhotoStrip(setIsDownloading);
  };
  
  // Toggle background removal
  const toggleBackgroundRemoval = () => {
    setShowBackgroundRemoval(!showBackgroundRemoval);
    toast.success(showBackgroundRemoval ? 'Background removal disabled' : 'Background removal enabled');
  };

  // Share photos
  const handleSharePhotos = () => {
    if (capturedPhotos.length === 0) {
      toast.error('Please take some photos first');
      return;
    }
    
    if (navigator.share) {
      const title = 'My Vintage Photos';
      const text = 'Check out these nostalgic photos I took with the Vintage Photo Booth!';
      const url = 'https://idealphotovercel.com/vintage-photobooth';
      
      navigator.share({
        title,
        text,
        url
      })
      .then(() => toast.success('Photos shared successfully!'))
      .catch((error) => {
        console.error('Error sharing:', error);
        toast.error('Failed to share photos');
      });
    } else {
      toast.info('Copy this link to share with friends: https://idealphotovercel.com/vintage-photobooth');
    }
  };

  // Change vintage year
  const handleChangeYear = () => {
    const years = [1965, 1975, 1985, 1995];
    const currentIndex = years.indexOf(vintageYear);
    const nextIndex = (currentIndex + 1) % years.length;
    setVintageYear(years[nextIndex]);
    toast.success(`Vintage year changed to ${years[nextIndex]}`);
  };
  
  // Show tutorial
  const handleShowTutorial = () => {
    toast.info('Welcome to the Vintage Photo Booth! Take 4 photos to create your strip.', {
      duration: 5000,
    });
    setTimeout(() => {
      toast.info('Try different filters and frames to create authentic vintage looks!', {
        duration: 5000,
      });
    }, 5000);
    setHasSeenTutorial(true);
  };
  
  // Automatically switch to gallery view after taking enough photos
  useEffect(() => {
    if (capturedPhotos.length >= 4 && activeTab === 'camera') {
      setActiveTab('gallery');
      toast.success('Photo session complete! Now customize your vintage photos.');
    }
  }, [capturedPhotos.length, activeTab]);

  // Show tutorial if first visit
  useEffect(() => {
    if (!hasSeenTutorial && showTips) {
      handleShowTutorial();
    }
    
    // Close tips after 15 seconds
    if (showTips) {
      const timer = setTimeout(() => {
        setShowTips(false);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [showTips, hasSeenTutorial]);

  return (
    <>
      <SEOHead 
        title="Little Vintage Photo Booth | Retro Photo Booth with Classic Filters - Ideal Photo"
        description="Create nostalgic vintage photo booth experiences with Little Vintage Photo Booth. Perfect for weddings, parties, and events seeking a classic retro feel. Start creating timeless memories free today!"
        canonicalPath="/vintage-photobooth"
        keywords="vintage photo booth, retro photo booth, nostalgic photos, old-school photography, vintage filters, 1970s photos, polaroid style"
        ogType="website"
        structuredData={vintageStructuredData}
      />
      
      <div className={`min-h-screen flex flex-col ${bgColor}`}>
        <Header />
        
        {/* Hero Area */}
        <VintageHeroArea />
        
        {/* Content container */}
        <div className="container mx-auto px-4 py-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
              Create Vintage Memories
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Step back in time with our vintage photo booth collection. Create nostalgic memories 
              with authentic vintage filters and classic photo booth layouts.
            </p>
          </div>
        </div>
        
        {/* Vintage date stamp */}
        <div className="container mx-auto px-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="text-amber-800 font-serif">
              <span className="text-xl">{photoDate}</span>
              <span className="ml-2 text-lg">{vintageYear}</span>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleChangeYear}
              className="text-amber-800 border-amber-300 hover:bg-amber-50"
            >
              Change Era
            </Button>
          </div>
        </div>
        
        {/* Tips for first-time users */}
        {showTips && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto px-4 mb-4"
          >
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-md shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-amber-800">Welcome to Little Vintage Photo Booth!</h3>
                  <div className="mt-2 text-sm text-amber-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Take 4 photos for an authentic vintage strip</li>
                      <li>Choose sepia, black & white, or color filters</li>
                      <li>Add vintage frames and stickers</li>
                      <li>Change the year for different vintage styles</li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => setShowTips(false)}
                    className="mt-2 text-xs text-amber-600 hover:text-amber-800 font-medium"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Main Photobooth Area with Tabs */}
        <main id="photobooth-area" className="flex-grow container mx-auto px-4 py-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-amber-100 text-amber-800">
              <TabsTrigger value="camera" className="flex items-center gap-2 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                <Camera className="h-4 w-4" />
                <span className="font-serif">Camera</span>
              </TabsTrigger>
              <TabsTrigger value="gallery" className="flex items-center gap-2 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                <Book className="h-4 w-4" />
                <span className="font-serif">Photo Album</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="camera" className="animate-fade-in">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Main webcam display */}
                <VintageWebcamSection 
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
                
                {/* Side panel for photo preview */}
                <div className="lg:w-[35%] bg-amber-50/95 rounded-xl shadow-lg p-6 border border-amber-200">
                  <h2 className="text-2xl font-bold text-center text-amber-800 mb-4 font-serif">Photo Preview</h2>
                  <div className="space-y-4">
                    <div className="aspect-[3/4] bg-white rounded-md overflow-hidden border border-amber-200 flex items-center justify-center relative">
                      {capturedPhotos.length > 0 ? (
                        <div className="relative w-full h-full">
                          <img 
                            src={capturedPhotos[capturedPhotos.length - 1]} 
                            alt="Latest photo" 
                            className="object-cover w-full h-full"
                            style={{ filter: getFilterStyle(selectedFilter, filterAdjustments) }}
                          />
                          {showVintageEffect && (
                            <div className="absolute inset-0 pointer-events-none bg-amber-900/10 mix-blend-overlay"></div>
                          )}
                          {vintageYear < 1980 && (
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                              <div className="w-full h-full opacity-10 bg-repeat" style={{ 
                                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zm1 5v1H5z' fill='%23000' fill-opacity='.5' fill-rule='evenodd'/%3E%3C/svg%3E\")"
                              }}></div>
                            </div>
                          )}
                          <div className="absolute bottom-2 right-2 text-white bg-black/30 px-2 py-1 text-xs rounded font-mono">
                            {photoDate} {vintageYear}
                          </div>
                        </div>
                      ) : (
                        <div className="text-amber-400 flex flex-col items-center">
                          <Camera className="h-10 w-10 mb-2" />
                          <p className="font-serif">Your photos will appear here</p>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-amber-800">
                        Photos: {capturedPhotos.length} / 4
                      </p>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowVintageEffect(!showVintageEffect)}
                          className="text-amber-800 border-amber-300 hover:bg-amber-100"
                        >
                          {showVintageEffect ? "Modern Look" : "Vintage Look"}
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={handleRetakePhoto}
                        disabled={capturedPhotos.length === 0}
                        className="w-full text-amber-800 border-amber-300 hover:bg-amber-100"
                      >
                        Retake Last
                      </Button>
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => setActiveTab('gallery')}
                        disabled={capturedPhotos.length === 0}
                        className="w-full bg-amber-600 hover:bg-amber-700"
                      >
                        Photo Album
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="gallery" className="animate-fade-in">
              {/* Customization Panel */}
              {capturedPhotos.length > 0 && (
                <div className="mb-6">
                  <VintageCustomizationPanel
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
              
              <div className="bg-amber-50/95 rounded-xl shadow-lg p-6 border border-amber-200">
                <h2 className="text-2xl font-bold text-center text-amber-800 mb-4 font-serif">Photo Album</h2>
                <Separator className="my-4 bg-amber-200" />
                
                <VintagePhotoStripPreview 
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
                
                {capturedPhotos.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6 justify-center">
                    <Button 
                      onClick={handleDownloadStrip}
                      disabled={isDownloading || capturedPhotos.length < 3}
                      className="bg-amber-600 hover:bg-amber-700 gap-2 font-serif"
                    >
                      <Download className="h-4 w-4" />
                      Download Photos
                    </Button>
                    <Button 
                      onClick={handleSharePhotos}
                      variant="outline"
                      className="gap-2 text-amber-800 border-amber-300 hover:bg-amber-100 font-serif"
                    >
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                    <Button 
                      onClick={handleTakeNewPhotos}
                      variant="ghost"
                      className="gap-2 text-amber-800 hover:bg-amber-100 font-serif"
                    >
                      <Camera className="h-4 w-4" />
                      New Session
                    </Button>
                  </div>
                )}
                
                {capturedPhotos.length === 0 && (
                  <div className="text-center py-10">
                    <div className="mx-auto h-12 w-12 text-amber-400">
                      <Camera className="h-12 w-12" />
                    </div>
                    <h3 className="mt-2 text-sm font-medium text-amber-800 font-serif">No photos yet</h3>
                    <p className="mt-1 text-sm text-amber-600">Get started by taking some vintage-style photos.</p>
                    <div className="mt-6">
                      <Button
                        onClick={() => setActiveTab('camera')}
                        className="bg-amber-600 hover:bg-amber-700 font-serif"
                      >
                        Take Photos
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </main>
        
        {/* Content container below main content */}
        <div className="container mx-auto px-4 py-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Share Your Vintage Creations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download your vintage photo booth creations and share them with friends and family. 
              Every photo captures the timeless charm of classic photography.
            </p>
          </div>
        </div>
        
        {/* SEO Content Section */}
        <VintageSEOSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

// Helper function to get filter style
const getFilterStyle = (selectedFilter, filterAdjustments) => {
  if (!selectedFilter || selectedFilter === 'none') return '';
  
  const { contrast, brightness, saturation, sepia } = filterAdjustments || {};
  
  let filterString = '';
  
  switch (selectedFilter) {
    case 'sepia':
      filterString = `sepia(${sepia || 0.8})`;
      break;
    case 'blackAndWhite':
      filterString = 'grayscale(1)';
      break;
    case 'vintage':
      filterString = `sepia(0.5) contrast(${contrast || 1.1}) brightness(${brightness || 0.9})`;
      break;
    case 'polaroid':
      filterString = `contrast(${contrast || 1.1}) brightness(${brightness || 1.1}) saturate(${saturation || 1.1})`;
      break;
    default:
      filterString = '';
  }
  
  return filterString;
};

export default LittleVintagePhotobooth;
