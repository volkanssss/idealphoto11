import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Camera, Image } from 'lucide-react';
import KpopWebcamSection from '@/components/kpop/KpopWebcamSection';
import KpopGallerySection from '@/components/kpop/KpopGallerySection';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import { FrameTheme } from '@/components/digibooth/BorderStyleSelector';

interface KpopPhotoBoothTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  currentTemplate: string;
  changeTemplate: (template: string) => void;
  isCapturing: boolean;
  showControls: boolean;
  selectedFilter: DigiboothFilterType;
  filterAdjustments: FilterAdjustmentValues;
  countdownTime: number;
  capturedPhotos: string[];
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  selectedSticker: StickerType;
  setSelectedSticker: (sticker: StickerType) => void;
  handlePhotoCaptured: (photo: string) => void;
  handleTakePhoto: () => void;
  handleRetakePhoto: () => void;
  handleFilterChange: (filter: DigiboothFilterType) => void;
  handleFilterAdjustmentChange: (adjustments: FilterAdjustmentValues) => void;
  handleCountdownChange: (time: number) => void;
  selectedIdols: Array<{id: string, name: string, src: string}>;
  handleSelectIdols: (idols: Array<{id: string, name: string, src: string}>) => void;
  frameTheme: FrameTheme;
  setFrameTheme: (theme: FrameTheme) => void;
}

const KpopPhotoBoothTabs: React.FC<KpopPhotoBoothTabsProps> = ({
  activeTab,
  setActiveTab,
  currentTemplate,
  changeTemplate,
  isCapturing,
  showControls,
  selectedFilter,
  filterAdjustments,
  countdownTime,
  capturedPhotos,
  frameColor,
  setFrameColor,
  selectedSticker,
  setSelectedSticker,
  handlePhotoCaptured,
  handleTakePhoto,
  handleRetakePhoto,
  handleFilterChange,
  handleFilterAdjustmentChange,
  handleCountdownChange,
  selectedIdols,
  handleSelectIdols,
  frameTheme,
  setFrameTheme
}) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="flex justify-between items-center mb-6">
        <TabsList className="grid grid-cols-2 w-64">
          <TabsTrigger 
            value="camera" 
            className="flex items-center gap-2"
          >
            <Camera className="h-4 w-4" />
            <span>Kamera</span>
          </TabsTrigger>
          <TabsTrigger 
            value="gallery" 
            className="flex items-center gap-2"
          >
            <Image className="h-4 w-4" />
            <span>Galeri</span>
          </TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="camera" className="animate-fade-in">
        <KpopWebcamSection
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
          selectedIdols={selectedIdols}
          onSelectIdols={handleSelectIdols}
        />
      </TabsContent>
      
      <TabsContent value="gallery" className="animate-fade-in">
        <KpopGallerySection 
          capturedPhotos={capturedPhotos}
          frameColor={frameColor}
          setFrameColor={setFrameColor}
          selectedSticker={selectedSticker}
          setSelectedSticker={setSelectedSticker}
          currentTemplate={currentTemplate}
          changeTemplate={changeTemplate}
          frameTheme={frameTheme}
          setFrameTheme={setFrameTheme}
          setActiveTab={setActiveTab}
        />
      </TabsContent>
    </Tabs>
  );
};

export default KpopPhotoBoothTabs;
