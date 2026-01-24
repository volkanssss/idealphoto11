
import React from 'react';
import { Download, Share2, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DigiboothPhotoStripPreview from './DigiboothPhotoStripPreview';
import DigiboothCustomizationPanel from './DigiboothCustomizationPanel';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import { BorderStyle, BorderWidth, FrameTheme } from './BorderStyleSelector';

interface DigiboothGalleryContentProps {
  capturedPhotos: string[];
  handleDownloadStrip: () => void;
  handleSharePhotos: () => void;
  handleTakeNewPhotos: () => void;
  isDownloading: boolean;
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  selectedSticker: StickerType;
  setSelectedSticker: (sticker: StickerType) => void;
  borderStyle: BorderStyle;
  setBorderStyle: (style: BorderStyle) => void;
  borderWidth: BorderWidth;
  setBorderWidth: (width: BorderWidth) => void;
  frameTheme: FrameTheme;
  setFrameTheme: (theme: FrameTheme) => void;
  showBackgroundRemoval: boolean;
  toggleBackgroundRemoval: () => void;
  setActiveTab: (tab: string) => void;
}

const DigiboothGalleryContent: React.FC<DigiboothGalleryContentProps> = ({
  capturedPhotos,
  handleDownloadStrip,
  handleSharePhotos,
  handleTakeNewPhotos,
  isDownloading,
  frameColor,
  setFrameColor,
  selectedSticker,
  setSelectedSticker,
  borderStyle,
  setBorderStyle,
  borderWidth,
  setBorderWidth,
  frameTheme,
  setFrameTheme,
  showBackgroundRemoval,
  toggleBackgroundRemoval,
  setActiveTab
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Photo Gallery</h2>
      {capturedPhotos.length > 0 ? (
        <>
          <DigiboothCustomizationPanel
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
          <DigiboothPhotoStripPreview 
            photos={capturedPhotos} 
            maxDisplay={4} 
            onDownload={handleDownloadStrip} 
            onTakeNewPhotos={handleTakeNewPhotos}
            frameColor={frameColor}
            setFrameColor={setFrameColor}
            sticker={selectedSticker}
            setSticker={setSelectedSticker}
            frameTheme={frameTheme}
            setBorderStyle={setBorderStyle}
            setBorderWidth={setBorderWidth}
            borderStyle={borderStyle}
            borderWidth={borderWidth}
          />
          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            <Button 
              onClick={handleDownloadStrip}
              disabled={isDownloading || capturedPhotos.length < 3}
              className="bg-blue-600 hover:bg-blue-700 gap-2"
            >
              <Download className="h-4 w-4" />
              Download Photos
            </Button>
            <Button 
              onClick={handleSharePhotos}
              variant="outline"
              className="gap-2"
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button 
              onClick={handleTakeNewPhotos}
              variant="ghost"
              className="gap-2"
            >
              <Camera className="h-4 w-4" />
              New Session
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center py-10">
          <div className="mx-auto h-12 w-12 text-gray-400">
            <Camera className="h-12 w-12" />
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No photos</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by taking some photos.</p>
          <div className="mt-6">
            <Button
              onClick={() => setActiveTab('camera')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Take Photos
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigiboothGalleryContent;
