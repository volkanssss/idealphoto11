
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Download, Share2, Image, Camera, Heart, ExternalLink } from 'lucide-react';
import PhotoStripPreview from '@/components/PhotoStripPreview';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import { FrameTheme } from '@/components/digibooth/BorderStyleSelector';
import { downloadPhotoStrip } from '@/utils/downloadPhotoStrip';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface KpopGallerySectionProps {
  capturedPhotos: string[];
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  selectedSticker: StickerType;
  setSelectedSticker: (sticker: StickerType) => void;
  currentTemplate: string;
  changeTemplate: (template: string) => void;
  frameTheme: FrameTheme;
  setFrameTheme: (theme: FrameTheme) => void;
  setActiveTab?: (tab: string) => void;
}

const KpopGallerySection: React.FC<KpopGallerySectionProps> = ({
  capturedPhotos,
  frameColor,
  setFrameColor,
  selectedSticker,
  setSelectedSticker,
  currentTemplate,
  changeTemplate,
  frameTheme,
  setFrameTheme,
  setActiveTab
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(currentTemplate);
  
  const templates = [
    { id: 'standard', name: 'Standard', color: 'from-pink-500 to-purple-500' },
    { id: 'vintage', name: 'Vintage', color: 'from-amber-500 to-orange-400' },
    { id: 'modern', name: 'Modern', color: 'from-blue-500 to-cyan-400' },
    { id: 'cute', name: 'Cute', color: 'from-pink-400 to-red-300' },
  ];
  
  const handleDownload = async () => {
    if (capturedPhotos.length < 3) {
      toast.error('Please take at least 3 photos first');
      return;
    }
    
    downloadPhotoStrip(setIsDownloading);
    toast.success('Your photos are downloading...');
  };
  
  const handleShare = () => {
    if (capturedPhotos.length === 0) {
      toast.error('Please take photos first');
      return;
    }
    
    if (navigator.share) {
      navigator.share({
        title: 'My K-pop Photos',
        text: 'Check out the photos I took with K-pop Photo Booth!',
        url: window.location.href
      })
      .then(() => toast.success('Photos shared successfully!'))
      .catch((error) => {
        console.error('Share error:', error);
        toast.error('Error sharing photos');
      });
    } else {
      toast.info('Share this link with your friends: ' + window.location.href);
    }
  };
  
  const handleTemplateChange = (template: string) => {
    setSelectedTemplate(template);
    changeTemplate(template);
    toast.success(`${template.charAt(0).toUpperCase() + template.slice(1)} template applied!`);
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your K-pop Photo Gallery
          </h2>
          <p className="text-gray-500 text-sm">Customize and share your idol photo collection</p>
        </div>
        
        {capturedPhotos.length > 0 && (
          <Button
            onClick={() => setActiveTab && setActiveTab('camera')}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 text-purple-600 border-purple-200"
          >
            <Camera className="h-4 w-4" />
            Take More Photos
          </Button>
        )}
      </div>
      
      <Separator className="my-6" />
      
      {capturedPhotos.length > 0 ? (
        <div className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <PhotoStripPreview 
                photos={capturedPhotos} 
                maxDisplay={4}
                frameColor={frameColor}
                setFrameColor={setFrameColor}
                sticker={selectedSticker}
                setSticker={setSelectedSticker}
                frameTheme={frameTheme}
                setFrameTheme={setFrameTheme}
              />
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-500" />
                  Photo Options
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Choose Template Style</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {templates.map(template => (
                        <button
                          key={template.id}
                          onClick={() => handleTemplateChange(template.id)}
                          className={cn(
                            "px-3 py-2 rounded-md text-sm font-medium transition-all",
                            selectedTemplate === template.id
                              ? `bg-gradient-to-r ${template.color} text-white shadow-md`
                              : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                          )}
                        >
                          {template.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Share Your Creation</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        onClick={handleDownload}
                        disabled={isDownloading || capturedPhotos.length < 3}
                        className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      >
                        <Download className="h-4 w-4" />
                        Download Photos
                      </Button>
                      
                      <Button 
                        onClick={handleShare}
                        variant="outline"
                        className="gap-2 border-purple-200 hover:border-purple-300 text-purple-600"
                      >
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-lg font-medium mb-3 text-purple-800">Pro Tips</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-purple-700">
                    <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span>Try different frame colors to match your favorite idol's concept</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-purple-700">
                    <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span>Add stickers to enhance your photos and make them unique</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-purple-700">
                    <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span>Download and share your creation with fellow fans</span>
                  </li>
                </ul>
                
                <Button variant="link" className="text-purple-700 p-0 mt-2 text-sm flex items-center gap-1">
                  <span>Learn more about photo features</span>
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="mx-auto h-16 w-16 text-gray-400 bg-gray-50 rounded-full flex items-center justify-center">
            <Image className="h-8 w-8" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No photos yet</h3>
          <p className="mt-2 text-gray-500">Take a few photos to get started with your K-pop collection</p>
          <div className="mt-8">
            <Button
              onClick={() => setActiveTab && setActiveTab('camera')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              size="lg"
            >
              <Camera className="mr-2 h-5 w-5" />
              Start Taking Photos
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default KpopGallerySection;
