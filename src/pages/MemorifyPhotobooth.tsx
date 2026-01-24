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

const memorifyStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Memorify Photobooth - Create Lasting Photo Memories",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Memorify Photobooth - Free online photo booth to create beautiful photo memories. Professional filters, creative frames, and instant sharing for unforgettable moments.",
  "screenshot": "https://idealphotovercel.com/og-image.png",
  "softwareVersion": "2.0",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "3127"
  }
};

const memorifyFaqs = [
  {
    question: "What is Memorify Photobooth?",
    answer: "Memorify Photobooth is a free online photo booth designed to help you create beautiful, lasting photo memories. It offers professional-grade filters, creative frames, and instant download capabilities to capture your special moments."
  },
  {
    question: "Is Memorify Photobooth completely free?",
    answer: "Yes! Memorify Photobooth is 100% free to use. Take unlimited photos, apply premium filters, add creative frames and stickers, and download high-quality photo strips without any charges or subscriptions."
  },
  {
    question: "How does Memorify Photobooth work?",
    answer: "Simply allow camera access in your browser, pose for your photos, and click capture. Take multiple shots, customize with our selection of filters and frames, then download your completed photo strip to save or share."
  },
  {
    question: "Can I use Memorify for events and parties?",
    answer: "Absolutely! Memorify Photobooth is perfect for birthday parties, weddings, graduations, corporate events, and any celebration. Guests can create and download their own photo memories instantly."
  },
  {
    question: "What makes Memorify different from other photo booth apps?",
    answer: "Memorify focuses on creating meaningful memories with high-quality output, intuitive design, and privacy-first processing. All photos are processed locally on your device - we never store your images on our servers."
  },
  {
    question: "Can I print my Memorify photos?",
    answer: "Yes! All photos are downloaded in high resolution (suitable for printing). The classic photo strip format is perfect for standard photo printers, scrapbooks, or professional printing services."
  }
];

const memorifySeoDetails = [
  {
    title: "Creating Memories That Last Forever",
    text: "Memorify Photobooth was designed with one mission: helping people capture and preserve their most precious moments. Unlike disposable digital photos that get lost in camera rolls, Memorify creates intentional keepsakes that you'll treasure for years. Our photo strip format encourages creativity and storytelling through a sequence of images."
  },
  {
    title: "Professional Quality, Zero Cost",
    text: "We believe everyone deserves access to professional photo booth quality without expensive rentals or subscriptions. Memorify delivers studio-grade filters that enhance your natural features, creative frames that add personality, and high-resolution exports that look stunning on screen or in print. All completely free."
  },
  {
    title: "Privacy-First Photo Experience",
    text: "Your memories are personal, and we respect that. Memorify processes all photos directly in your browser using your device's processing power. We never upload, store, or access your images. When you close the tab, your photos exist only where you saved them - giving you complete control over your memories."
  }
];

const memorifyHighlights = [
  {
    title: "Memory-Focused Design",
    description: "Every feature is designed to help you create meaningful photo memories that you'll want to keep and share."
  },
  {
    title: "Event-Ready Experience",
    description: "Perfect for parties, celebrations, and gatherings. Set up in seconds and let guests create their own memories."
  },
  {
    title: "Privacy Guaranteed",
    description: "All processing happens locally on your device. Your photos never leave your browser unless you download them."
  }
];

const MemorifyPhotobooth = () => {
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
  };
  
  const handleSharePhotos = () => {
    if (capturedPhotos.length === 0) {
      toast.error('Please take some photos first');
      return;
    }
    
    if (navigator.share) {
      navigator.share({
        title: 'My Memorify Photos',
        text: 'Check out these memories I created with Memorify Photobooth!',
        url: 'https://idealphotovercel.com/memorify-photobooth'
      })
      .then(() => toast.success('Memories shared successfully!'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      toast.info('Copy this link to share: https://idealphotovercel.com/memorify-photobooth');
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
      toast.success('Photos captured! Customize your memory strip');
    }
  }, [capturedPhotos.length, activeTab]);
  
  useEffect(() => {
    if (showTips) {
      const timer = setTimeout(() => setShowTips(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [showTips]);

  return (
    <>
      <SEOHead
        title="Memorify Photobooth | Free Online Photo Booth for Lasting Memories"
        description="Memorify Photobooth - Create beautiful photo memories online for free. Professional filters, creative frames & instant download. Perfect for events, parties & everyday moments. Start capturing memories now!"
        canonicalPath="/memorify-photobooth"
        keywords="memorify photobooth, memorify photo booth, memory photo booth, photo booth memories, free photo booth online, event photo booth, party photo booth, photo strip maker, online photo booth free, memorable photos"
        ogType="website"
        structuredData={memorifyStructuredData}
      />
      
      <PhotoboothLayout bgColor={bgColor} type="digibooth">
        <HeroArea 
          title="Memorify Photobooth - Create Lasting Photo Memories"
          description="Transform everyday moments into treasured memories. Capture photos with professional filters, customize with creative frames, and download beautiful photo strips instantly. Free forever, no registration needed!"
          badgeText="📸 Memory Maker"
          primaryCtaLabel="Start Creating Memories"
        />
        
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
        <PhotoboothTestimonials type="party" />
        <PhotoboothFAQ 
          title="Memorify Photobooth FAQ"
          subtitle="Everything you need to know about creating photo memories"
          faqs={memorifyFaqs}
          includeSchema={true}
        />
        <PhotoboothSEOSection 
          heading="Your Personal Memory-Making Studio"
          intro="Memorify Photobooth transforms your browser into a professional photo booth, helping you capture and preserve life's special moments with ease."
          highlights={memorifyHighlights}
          details={memorifySeoDetails}
        />
      </PhotoboothLayout>
    </>
  );
};

export default MemorifyPhotobooth;
