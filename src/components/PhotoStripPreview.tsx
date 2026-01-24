
import React, { useRef } from 'react';
import { FrameColorType } from './photobooth/FrameColorSelector';
import { StickerType } from './photobooth/StickerSelector';
import FrameColorSelector from './photobooth/FrameColorSelector';
import StickerSelector from './photobooth/StickerSelector';
import EmptyState from './photostrip/EmptyState';
import PhotoItem from './photostrip/PhotoItem';
import StripFooter from './photostrip/StripFooter';
import StripControls from './photostrip/StripControls';
import { FrameTheme } from '@/components/digibooth/BorderStyleSelector';
import { ArrowDownToLine, ImagePlus, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

interface PhotoStripPreviewProps {
  photos: string[];
  maxDisplay?: number;
  onDownload?: () => void;
  onTakeNewPhotos?: () => void;
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  sticker: StickerType;
  setSticker: (sticker: StickerType) => void;
  frameTheme?: FrameTheme;
  setFrameTheme?: (theme: FrameTheme) => void;
}

const PhotoStripPreview: React.FC<PhotoStripPreviewProps> = ({ 
  photos, 
  maxDisplay = 4,
  onDownload,
  onTakeNewPhotos,
  frameColor,
  setFrameColor,
  sticker,
  setSticker,
  frameTheme = 'default',
  setFrameTheme
}) => {
  const photoStripRef = useRef<HTMLDivElement>(null);
  const displayPhotos = photos.slice(-maxDisplay);
  
  if (photos.length === 0) {
    return <EmptyState />;
  }

  const getBorderColor = () => {
    switch(frameColor) {
      case 'white': return 'border-white bg-white';
      case 'black': return 'border-black bg-black';
      case 'pink': return 'border-pink-400 bg-pink-400';
      case 'green': return 'border-green-500 bg-green-500';
      case 'blue': return 'border-blue-500 bg-blue-500';
      case 'yellow': return 'border-yellow-400 bg-yellow-400';
      case 'purple': return 'border-purple-500 bg-purple-500';
      case 'maroon': return 'border-red-800 bg-red-800';
      case 'burgundy': return 'border-red-900 bg-red-900';
      // Soft colors
      case 'softGreen': return 'border-[#F2FCE2] bg-[#F2FCE2]';
      case 'softYellow': return 'border-[#FEF7CD] bg-[#FEF7CD]';
      case 'softOrange': return 'border-[#FEC6A1] bg-[#FEC6A1]';
      case 'softPurple': return 'border-[#E5DEFF] bg-[#E5DEFF]';
      case 'softPink': return 'border-[#FFDEE2] bg-[#FFDEE2]';
      case 'softPeach': return 'border-[#FDE1D3] bg-[#FDE1D3]';
      case 'softBlue': return 'border-[#D3E4FD] bg-[#D3E4FD]';
      case 'softGray': return 'border-[#F1F0FB] bg-[#F1F0FB]';
      default: return 'border-white bg-white';
    }
  };

  const textColor = ['white', 'yellow', 'softGreen', 'softYellow', 'softOrange', 'softPurple', 'softPink', 'softPeach', 'softBlue', 'softGray'].includes(frameColor) 
    ? 'text-gray-800' 
    : 'text-white';

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Photo Strip Preview</h2>
          <p className="text-gray-600 text-sm">Customize your memories below</p>
        </div>
        <Badge variant="outline" className="bg-pink-50 text-pink-700 flex items-center gap-1.5 py-1.5">
          <Star className="h-3 w-3 fill-pink-500 text-pink-500" />
          <span>Premium Quality</span>
        </Badge>
      </div>
      
      <motion.div 
        ref={photoStripRef} 
        id="photo-strip-container"
        className={`mx-auto max-w-[300px] p-4 border-8 rounded-lg shadow-xl ${getBorderColor()} relative`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex flex-col gap-2">
          {displayPhotos.map((photo, index) => (
            <PhotoItem 
              key={index}
              photo={photo}
              index={index}
              sticker={sticker}
            />
          ))}
          
          <StripFooter 
            frameColor={frameColor}
            textColor={textColor}
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -right-3 -bottom-3 h-8 w-8 bg-pink-500 rounded-full opacity-70 shadow-lg"></div>
        <div className="absolute -left-2 -top-2 h-4 w-4 bg-purple-500 rounded-full opacity-70 shadow-lg"></div>
      </motion.div>
      
      {photos.length >= 3 && (
        <StripControls
          onDownload={onDownload || (() => {})}
          onTakeNewPhotos={onTakeNewPhotos || (() => {})}
        />
      )}
      
      <div className="mt-8 pt-6 border-t border-gray-100">
        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
          <div className="h-5 w-1 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>
          Frame Style
        </h3>
        
        <FrameColorSelector 
          selectedColor={frameColor} 
          onSelectColor={setFrameColor} 
        />
        
        <h3 className="text-lg font-medium mb-4 mt-6 flex items-center gap-2">
          <div className="h-5 w-1 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>
          Stickers
        </h3>
        
        <div className="mt-2">
          <StickerSelector
            selectedSticker={sticker}
            onSelectSticker={setSticker}
          />
        </div>
        
        <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-100 text-xs text-gray-500">
          <span>Photo frame ({frameColor})</span>
          <span>Created with İdeal Photo</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PhotoStripPreview;
