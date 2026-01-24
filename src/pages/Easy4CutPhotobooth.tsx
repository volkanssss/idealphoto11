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

const easy4cutStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Easy4Cut - 4 Cut Photo Booth Online",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Easy4Cut is a free online 4 cut photo booth. Create stunning 4-cut photo strips with filters, frames, and stickers. Instant download, no registration required.",
  "screenshot": "https://idealphotovercel.com/og-image.png",
  "softwareVersion": "2.0",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "2456"
  }
};

const easy4cutFaqs = [
  {
    question: "What is a 4 cut photo booth?",
    answer: "A 4 cut photo booth is a Korean-style photo experience where you take 4 consecutive photos that are arranged in a vertical strip. It's inspired by Korean photo booth culture and creates memorable keepsakes perfect for sharing with friends."
  },
  {
    question: "Is Easy4Cut photo booth free to use?",
    answer: "Yes! Easy4Cut is completely free to use. You can take unlimited 4-cut photos, apply filters, add stickers, and download your photo strips without any registration or payment required."
  },
  {
    question: "How do I take 4 cut photos online?",
    answer: "Simply allow camera access, click the capture button 4 times to take your photos, customize with filters and frames, then download your completed 4-cut photo strip instantly."
  },
  {
    question: "Can I customize my 4 cut photo strip?",
    answer: "Absolutely! Easy4Cut offers various customization options including color filters, frame colors, decorative stickers, and different layout styles to make your 4-cut photos unique."
  },
  {
    question: "What makes Easy4Cut different from other photo booths?",
    answer: "Easy4Cut specializes in the authentic Korean 4-cut photo booth experience with high-quality filters, instant processing, and no watermarks. It works directly in your browser with no app download needed."
  },
  {
    question: "Can I share my 4 cut photos on social media?",
    answer: "Yes! After creating your 4-cut photo strip, you can download it and share directly to Instagram, TikTok, Twitter, or any social media platform. The vertical format is perfect for stories and posts."
  }
];

const easy4cutSeoDetails = [
  {
    title: "The Art of 4 Cut Photography",
    text: "4 cut photo booths originated in South Korea and have become a global phenomenon. The concept is simple yet captivating: four photos taken in quick succession, arranged vertically to tell a mini-story. Easy4Cut brings this beloved experience online, allowing anyone to create authentic Korean-style photo strips from their browser."
  },
  {
    title: "Why Choose Easy4Cut for Your Photos",
    text: "Easy4Cut stands out with its commitment to quality and simplicity. Our platform processes photos locally on your device for privacy, offers real-time filters that simulate professional photo booth effects, and produces high-resolution downloads perfect for printing or digital sharing. No account creation, no hidden fees, just pure photo fun."
  },
  {
    title: "Perfect for Every Occasion",
    text: "Whether you're capturing memories with friends, creating content for social media, or looking for a fun activity at virtual gatherings, Easy4Cut delivers. The 4-cut format is ideal for before-and-after sequences, friendship photo sessions, silly face challenges, or documenting special moments in a creative way."
  }
];

const easy4cutHighlights = [
  {
    title: "Authentic 4-Cut Experience",
    description: "Recreate the popular Korean photo booth style with our optimized 4-shot capture system and vertical strip layout."
  },
  {
    title: "Instant Browser-Based",
    description: "No downloads or installations needed. Start taking 4-cut photos immediately in any modern web browser."
  },
  {
    title: "Premium Filters Free",
    description: "Access professional-grade filters including vintage, soft glow, and trendy effects at no cost."
  }
];

const Easy4CutPhotobooth = () => {
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
        title: 'My Easy4Cut Photos',
        text: 'Check out my 4-cut photo strip created with Easy4Cut!',
        url: 'https://idealphotovercel.com/easy4cut-photobooth'
      })
      .then(() => toast.success('Photos shared successfully!'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      toast.info('Copy this link to share: https://idealphotovercel.com/easy4cut-photobooth');
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
      toast.success('4 photos captured! Now customize your strip');
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
        title="Easy4Cut | Free 4 Cut Photo Booth Online - Korean Style Photo Strip"
        description="Easy4Cut - Create stunning 4-cut photo strips online for free. Korean-style photo booth with filters, frames & instant download. No registration needed. Start your 4 cut photo session now!"
        canonicalPath="/easy4cut-photobooth"
        keywords="4 cut photo booth online, easy4cut, 4cut photo booth, four cut photo booth, korean photo booth, 4 cut photo strip, easy 4 cut, 4cut online, photo booth 4 cut, korean style photo booth, free 4 cut photo booth"
        ogType="website"
        structuredData={easy4cutStructuredData}
      />
      
      <PhotoboothLayout bgColor={bgColor} type="pica-pica">
        <HeroArea 
          title="Easy4Cut - Free 4 Cut Photo Booth Online"
          description="Create authentic Korean-style 4-cut photo strips instantly. Capture 4 photos, customize with filters and frames, and download your photo strip for free. No registration required!"
          badgeText="🎞️ Korean Style Photo Booth"
          primaryCtaLabel="Start 4-Cut Session"
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
        <PhotoboothTestimonials type="selfie" />
        <PhotoboothFAQ 
          title="4 Cut Photo Booth FAQ"
          subtitle="Everything you need to know about Easy4Cut online photo booth"
          faqs={easy4cutFaqs}
          includeSchema={true}
        />
        <PhotoboothSEOSection 
          heading="The Ultimate 4 Cut Photo Booth Experience"
          intro="Easy4Cut brings the popular Korean 4-cut photo booth experience to your browser. Create professional-quality photo strips with just a few clicks."
          highlights={easy4cutHighlights}
          details={easy4cutSeoDetails}
        />
      </PhotoboothLayout>
    </>
  );
};

export default Easy4CutPhotobooth;
