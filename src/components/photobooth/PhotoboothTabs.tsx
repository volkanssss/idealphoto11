
import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, Image, MoveHorizontal } from 'lucide-react';
import WebcamSection from './WebcamSection';
import PhotoGallery from './PhotoGallery';
import { FilterType } from './FilterSelector';
import { FrameColorType } from './FrameColorSelector';
import { StickerType } from './StickerSelector';

interface PhotoboothTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  layoutMode: string;
  toggleLayoutMode: () => void;
  capturedPhotos: string[];
  isCapturing: boolean;
  showControls: boolean;
  selectedFilter: FilterType;
  countdownTime: number;
  handlePhotoCaptured: (photo: string) => void;
  handleTakePhoto: () => void;
  handleRetakePhoto: () => void;
  handleFilterChange: (filter: FilterType) => void;
  handleCountdownChange: (time: number) => void;
  handleTakeNewPhotos: () => void;
  handleDownloadStrip: () => void;
  handleSharePhotos: () => void;
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  selectedSticker: StickerType;
  setSelectedSticker: (sticker: StickerType) => void;
  isDownloading: boolean;
}

const PhotoboothTabs: React.FC<PhotoboothTabsProps> = ({
  activeTab,
  setActiveTab,
  layoutMode,
  toggleLayoutMode,
  capturedPhotos,
  isCapturing,
  showControls,
  selectedFilter,
  countdownTime,
  handlePhotoCaptured,
  handleTakePhoto,
  handleRetakePhoto,
  handleFilterChange,
  handleCountdownChange,
  handleTakeNewPhotos,
  handleDownloadStrip,
  handleSharePhotos,
  frameColor,
  setFrameColor,
  selectedSticker,
  setSelectedSticker,
  isDownloading
}) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="flex justify-between items-center mb-6 bg-gradient-to-r from-violet-50 to-fuchsia-50 p-4 rounded-xl shadow-sm">
        <TabsList className="grid grid-cols-2 w-64 bg-white/50 backdrop-blur-sm border border-violet-100">
          <TabsTrigger 
            value="capture" 
            className="flex items-center gap-2 data-[state=active]:bg-violet-500 data-[state=active]:text-white"
          >
            <Camera className="h-4 w-4" />
            <span>Capture</span>
          </TabsTrigger>
          <TabsTrigger 
            value="preview" 
            className="flex items-center gap-2 data-[state=active]:bg-violet-500 data-[state=active]:text-white"
          >
            <Image className="h-4 w-4" />
            <span>Gallery</span>
          </TabsTrigger>
        </TabsList>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-violet-200 text-violet-700">
            {layoutMode} mode
          </Badge>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLayoutMode}
            className="text-sm hover:bg-violet-50 text-violet-700"
          >
            <MoveHorizontal className="h-4 w-4 mr-1" />
            Change layout
          </Button>
        </div>
      </div>
      
      <TabsContent value="capture" className="animate-fade-in">
        <WebcamSection
          isCapturing={isCapturing}
          showControls={showControls}
          selectedFilter={selectedFilter}
          countdownTime={countdownTime}
          capturedPhotos={capturedPhotos}
          onCapture={handlePhotoCaptured}
          onTakePhoto={handleTakePhoto}
          onRetakePhoto={handleRetakePhoto}
          onFilterChange={handleFilterChange}
          onCountdownChange={handleCountdownChange}
        />
      </TabsContent>
      
      <TabsContent value="preview" className="animate-fade-in">
        <PhotoGallery 
          capturedPhotos={capturedPhotos}
          setActiveTab={setActiveTab}
          handleDownloadStrip={handleDownloadStrip}
          handleSharePhotos={handleSharePhotos}
          handleTakeNewPhotos={handleTakeNewPhotos}
          frameColor={frameColor}
          setFrameColor={setFrameColor}
          selectedSticker={selectedSticker}
          setSelectedSticker={setSelectedSticker}
          isDownloading={isDownloading}
        />
      </TabsContent>
    </Tabs>
  );
};

export default PhotoboothTabs;
