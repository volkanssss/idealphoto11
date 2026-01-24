
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Palette } from 'lucide-react';
import DigiboothWebcamSection from '@/components/digibooth/DigiboothWebcamSection';
import DigiboothGalleryContent from '@/components/digibooth/DigiboothGalleryContent';
import { toast } from 'sonner';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';

interface DigiboothTabbedContentProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  isCapturing: boolean;
  showControls: boolean;
  selectedFilter: DigiboothFilterType;
  filterAdjustments: FilterAdjustmentValues;
  countdownTime: number;
  capturedPhotos: string[];
  frameColor: FrameColorType;
  selectedSticker: StickerType;
  isDownloading: boolean;
  handlePhotoCaptured: (photoSrc: string) => void;
  handleTakePhoto: () => void;
  handleRetakePhoto: () => void;
  handleTakeNewPhotos: () => void;
  handleFilterChange: (filter: DigiboothFilterType) => void;
  handleFilterAdjustmentChange: (adjustments: FilterAdjustmentValues) => void;
  handleCountdownChange: (time: number) => void;
  handleDownloadStrip: () => void;
  handleSharePhotos: () => void;
  setFrameColor: (color: FrameColorType) => void;
  setSelectedSticker: (sticker: StickerType) => void;
  // Add default values for new props related to border styling
  borderStyle?: BorderStyle;
  setBorderStyle?: (style: BorderStyle) => void;
  borderWidth?: BorderWidth;
  setBorderWidth?: (width: BorderWidth) => void;
  frameTheme?: FrameTheme;
  setFrameTheme?: (theme: FrameTheme) => void;
  showBackgroundRemoval?: boolean;
  toggleBackgroundRemoval?: () => void;
}

const DigiboothTabbedContent: React.FC<DigiboothTabbedContentProps> = ({
  activeTab,
  setActiveTab,
  isCapturing,
  showControls,
  selectedFilter,
  filterAdjustments,
  countdownTime,
  capturedPhotos,
  frameColor,
  selectedSticker,
  isDownloading,
  handlePhotoCaptured,
  handleTakePhoto,
  handleRetakePhoto,
  handleTakeNewPhotos,
  handleFilterChange,
  handleFilterAdjustmentChange,
  handleCountdownChange,
  handleDownloadStrip,
  handleSharePhotos,
  setFrameColor,
  setSelectedSticker,
  // Set default values for the optional props
  borderStyle = 'solid',
  setBorderStyle = () => {},
  borderWidth = 'medium',
  setBorderWidth = () => {},
  frameTheme = 'default',
  setFrameTheme = () => {},
  showBackgroundRemoval = false,
  toggleBackgroundRemoval = () => {}
}) => {
  useEffect(() => {
    if (capturedPhotos.length >= 4 && activeTab === 'camera') {
      setActiveTab('gallery');
      toast.success('Photo session complete! Now customize your photos.');
    }
  }, [capturedPhotos.length, activeTab, setActiveTab]);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="camera" className="flex items-center gap-2">
          <Camera className="h-4 w-4" />
          <span>Camera</span>
        </TabsTrigger>
        <TabsTrigger value="gallery" className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          <span>Gallery</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="camera" className="animate-fade-in">
        <DigiboothWebcamSection 
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
      </TabsContent>
      
      <TabsContent value="gallery" className="animate-fade-in">
        <DigiboothGalleryContent 
          capturedPhotos={capturedPhotos}
          handleDownloadStrip={handleDownloadStrip}
          handleSharePhotos={handleSharePhotos}
          handleTakeNewPhotos={handleTakeNewPhotos}
          isDownloading={isDownloading}
          frameColor={frameColor}
          setFrameColor={setFrameColor}
          selectedSticker={selectedSticker}
          setSelectedSticker={setSelectedSticker}
          setActiveTab={setActiveTab}
          borderStyle={borderStyle}
          setBorderStyle={setBorderStyle}
          borderWidth={borderWidth}
          setBorderWidth={setBorderWidth}
          frameTheme={frameTheme}
          setFrameTheme={setFrameTheme}
          showBackgroundRemoval={showBackgroundRemoval}
          toggleBackgroundRemoval={toggleBackgroundRemoval}
        />
      </TabsContent>
    </Tabs>
  );
};

export default DigiboothTabbedContent;
