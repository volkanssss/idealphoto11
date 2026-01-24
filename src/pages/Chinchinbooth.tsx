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

const chinchinStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Chinchinbooth - Free ChinChin Photo Booth Online",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Chinchinbooth - The original free online ChinChin photo booth. Create Korean-style photo strips with trendy filters, cute frames and instant download. No app needed!",
  "screenshot": "https://idealphotovercel.com/og-image.png",
  "softwareVersion": "2.1",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "3542"
  }
};

const chinchinFaqs = [
  {
    question: "What is Chinchinbooth?",
    answer: "Chinchinbooth is a free online photo booth inspired by the popular Korean ChinChin photo booth experience. It allows you to take fun photos with friends, apply trendy filters, and create beautiful photo strips instantly in your browser."
  },
  {
    question: "Is Chinchinbooth free to use?",
    answer: "Yes! Chinchinbooth is completely free. Take unlimited photos, use all filters and frames, and download your photo strips without any charges, subscriptions, or watermarks."
  },
  {
    question: "How do I use Chinchinbooth?",
    answer: "Simply allow camera access, strike your poses and click capture for each photo. After taking your photos, customize with filters and frames, then download your completed photo strip to share with friends."
  },
  {
    question: "Do I need to download an app for Chinchinbooth?",
    answer: "No app download required! Chinchinbooth works directly in your web browser on any device - desktop, laptop, tablet, or smartphone. Just visit the website and start taking photos."
  },
  {
    question: "Can I use Chinchinbooth on my phone?",
    answer: "Absolutely! Chinchinbooth is fully optimized for mobile devices. Use your phone's camera to capture photos and create photo strips on the go."
  },
  {
    question: "What filters are available on Chinchinbooth?",
    answer: "Chinchinbooth offers a variety of filters including vintage, soft glow, black & white, warm tones, and trendy Korean-style effects. All filters are designed to enhance your photos beautifully."
  }
];

const chinchinSeoDetails = [
  {
    title: "The Chinchinbooth Experience",
    text: "Chinchinbooth brings the beloved Korean photo booth culture to your screen. Originating from the trendy ChinChin photo studios in Seoul, this style of photography has captivated millions worldwide. Our online version recreates that authentic experience with modern convenience - no travel to Korea required!"
  },
  {
    title: "Why Chinchinbooth is Loved Worldwide",
    text: "From K-pop fans to photography enthusiasts, Chinchinbooth has become a favorite for its authentic Korean aesthetic, easy-to-use interface, and high-quality results. Create the same style of photos you see your favorite idols sharing, right from your own device."
  },
  {
    title: "Perfect for Friends and Groups",
    text: "Chinchinbooth is designed for social moments. Gather your friends, strike fun poses, and create matching photo strips that you'll treasure forever. The four-photo format encourages creativity and captures different expressions in one beautiful keepsake."
  }
];

const chinchinHighlights = [
  {
    title: "Authentic Korean Style",
    description: "Experience the genuine ChinChin photo booth aesthetic with filters and frames inspired by Seoul's trendiest photo studios."
  },
  {
    title: "No App Required",
    description: "Works instantly in any browser. No downloads, no installations, no waiting - just pure photo booth fun."
  },
  {
    title: "Share-Ready Results",
    description: "Download high-quality photo strips perfect for Instagram, TikTok, or printing to share with friends."
  }
];

const Chinchinbooth = () => {
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
        title: 'My ChinChin Photos',
        text: 'Check out these cool photos I created with Chinchinbooth!',
        url: 'https://idealphotovercel.com/chinchinbooth'
      })
      .then(() => toast.success('Photos shared successfully!'))
      .catch((error) => {
        console.error('Error sharing:', error);
        toast.error('Failed to share photos');
      });
    } else {
      toast.info('Copy this link to share: https://idealphotovercel.com/chinchinbooth');
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
      toast.success('Photo session complete! Now customize your photos');
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
        title="Chinchinbooth | Free ChinChin Photo Booth Online - Korean Style Photos"
        description="Chinchinbooth - The original free online ChinChin photo booth. Create Korean-style photo strips with trendy filters, cute frames & instant download. No app needed - start your ChinChin photo session now!"
        canonicalPath="/chinchinbooth"
        keywords="chinchinbooth, chinchin photo booth, chin chin booth, chinchin booth online, chinchin photobooth free, korean photo booth, chinchin app online, chin chin photo, chinchin photo strip, free chinchin booth"
        ogType="website"
        structuredData={chinchinStructuredData}
      />
      
      <PhotoboothLayout bgColor={bgColor} type="vintage">
        <HeroArea 
          title="Chinchinbooth - Free ChinChin Photo Booth Online"
          description="Experience the authentic Korean ChinChin photo booth from anywhere! Take fun photos with friends, apply trendy filters, and create beautiful photo strips instantly. Free, no app download needed!"
          badgeText="🇰🇷 Korean Photo Booth"
          primaryCtaLabel="Start ChinChin Session"
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
        <PhotoboothTestimonials type="chinchin" />
        <PhotoboothFAQ 
          title="Chinchinbooth FAQ"
          subtitle="Everything you need to know about ChinChin photo booth"
          faqs={chinchinFaqs}
          includeSchema={true}
        />
        <PhotoboothSEOSection 
          heading="The Original ChinChin Photo Booth Experience"
          intro="Chinchinbooth recreates the beloved Korean photo booth experience online. Capture memories with friends using authentic ChinChin-style filters and frames."
          highlights={chinchinHighlights}
          details={chinchinSeoDetails}
        />
      </PhotoboothLayout>
    </>
  );
};

export default Chinchinbooth;
