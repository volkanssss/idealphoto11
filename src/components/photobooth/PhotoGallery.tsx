
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Camera, Download, Image, Share2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import PhotoStripPreview from '../PhotoStripPreview';
import { FrameColorType } from './FrameColorSelector';
import { StickerType } from './StickerSelector';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface PhotoGalleryProps {
  capturedPhotos: string[];
  setActiveTab: (tab: string) => void;
  handleDownloadStrip: () => void;
  handleSharePhotos: () => void;
  handleTakeNewPhotos: () => void;
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  selectedSticker: StickerType;
  setSelectedSticker: (sticker: StickerType) => void;
  isDownloading: boolean;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  capturedPhotos,
  setActiveTab,
  handleDownloadStrip,
  handleSharePhotos,
  handleTakeNewPhotos,
  frameColor,
  setFrameColor,
  selectedSticker,
  setSelectedSticker,
  isDownloading
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center mb-4">
        <motion.h2 
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Your Photo Gallery
        </motion.h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setActiveTab('capture')}
          className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Camera
        </Button>
      </div>
      
      <Separator className="my-4" />
      
      {capturedPhotos.length > 0 ? (
        <div className="space-y-6">
          <motion.div 
            className="flex flex-col lg:flex-row gap-8 items-center justify-center"
            variants={itemVariants}
          >
            <div className="lg:w-1/2">
              <PhotoStripPreview 
                photos={capturedPhotos} 
                maxDisplay={4} 
                onDownload={handleDownloadStrip} 
                onTakeNewPhotos={handleTakeNewPhotos}
                frameColor={frameColor}
                setFrameColor={setFrameColor}
                sticker={selectedSticker}
                setSticker={setSelectedSticker}
              />
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <h3 className="text-lg font-medium text-gray-800">Customize Your Photos</h3>
                <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-none">
                  <CardContent className="p-4">
                    <p className="text-gray-600">
                      Personalize your photo strip with frames, stickers, and more. Make it uniquely yours!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-3 justify-center sm:justify-start"
                variants={itemVariants}
              >
                <Button 
                  onClick={handleDownloadStrip}
                  disabled={isDownloading || capturedPhotos.length < 3}
                  className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none"
                >
                  <Download className="h-4 w-4" />
                  Download Photos
                </Button>
                <Button 
                  onClick={handleSharePhotos}
                  variant="outline"
                  className="gap-2 border-purple-200 hover:border-purple-300 text-purple-600"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button 
                  onClick={handleTakeNewPhotos}
                  variant="ghost"
                  className="gap-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                >
                  <Camera className="h-4 w-4" />
                  New Session
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      ) : (
        <motion.div 
          className="text-center py-10"
          variants={itemVariants}
        >
          <div className="mx-auto h-12 w-12 text-gray-400">
            <Image className="h-12 w-12" />
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No photos yet</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by taking some photos first.</p>
          <div className="mt-6">
            <Button
              onClick={() => setActiveTab('capture')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Take Photos
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PhotoGallery;
