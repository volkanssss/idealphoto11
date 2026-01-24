
import React from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Palette, Type, Image, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { BorderWidthValue } from './BorderWidthSelector';
import FrameColorOptions from '@/components/digibooth/customization/FrameColorOptions';
import StickerOptions from '@/components/digibooth/customization/StickerOptions';
import BorderWidthSelector from './BorderWidthSelector';

interface KpopStripOptionsProps {
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  sticker: StickerType;
  setSticker: (sticker: StickerType) => void;
  borderWidth: BorderWidthValue;
  setBorderWidth: (width: BorderWidthValue) => void;
  
  // Text styling props
  titleText: string;
  setTitleText: (text: string) => void;
  titleFont: string;
  setTitleFont: (font: string) => void;
  titleColor: string;
  setTitleColor: (color: string) => void;
  titleSize: string;
  setTitleSize: (size: string) => void;
  titleAlignment: 'left' | 'center' | 'right';
  setTitleAlignment: (alignment: 'left' | 'center' | 'right') => void;
  titleItalic: boolean;
  setTitleItalic: (italic: boolean) => void;
  
  customMessage: string;
  setCustomMessage: (text: string) => void;
  customFont: string;
  setCustomFont: (font: string) => void;
  customColor: string;
  setCustomColor: (color: string) => void;
  customSize: string;
  setCustomSize: (size: string) => void;
  customAlignment: 'left' | 'center' | 'right';
  setCustomAlignment: (alignment: 'left' | 'center' | 'right') => void;
  customItalic: boolean;
  setCustomItalic: (italic: boolean) => void;
  
  dateFormat: string;
  setDateFormat: (format: string) => void;
}

const KpopStripOptions: React.FC<KpopStripOptionsProps> = ({
  frameColor,
  setFrameColor,
  sticker,
  setSticker,
  borderWidth,
  setBorderWidth,
  
  // Text props
  titleText,
  setTitleText,
  titleFont,
  setTitleFont,
  titleColor,
  setTitleColor,
  titleSize,
  setTitleSize,
  titleAlignment,
  setTitleAlignment,
  titleItalic,
  setTitleItalic,
  
  customMessage,
  setCustomMessage,
  customFont,
  setCustomFont,
  customColor,
  setCustomColor,
  customSize,
  setCustomSize,
  customAlignment,
  setCustomAlignment,
  customItalic,
  setCustomItalic,
  
  dateFormat,
  setDateFormat
}) => {
  // Handle title text change
  const handleTitleTextChange = () => {
    const newTitle = prompt('Enter title text:', titleText);
    if (newTitle !== null) {
      setTitleText(newTitle);
    }
  };
  
  // Handle custom message change
  const handleCustomMessageChange = () => {
    const newMessage = prompt('Enter custom message:', customMessage);
    if (newMessage !== null) {
      setCustomMessage(newMessage);
    }
  };
  
  // Toggle date format
  const toggleDateFormat = () => {
    setDateFormat(dateFormat === 'short' ? 'long' : 'short');
  };

  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-4">
        <Tabs defaultValue="design">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="design" className="flex items-center gap-1">
              <Palette className="h-4 w-4" /> Design
            </TabsTrigger>
            <TabsTrigger value="text" className="flex items-center gap-1">
              <Type className="h-4 w-4" /> Text
            </TabsTrigger>
            <TabsTrigger value="stickers" className="flex items-center gap-1">
              <Image className="h-4 w-4" /> Stickers
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-1">
              <Settings className="h-4 w-4" /> Settings
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="design" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FrameColorOptions 
                frameColor={frameColor}
                setFrameColor={setFrameColor}
              />
              
              <BorderWidthSelector
                borderWidth={borderWidth}
                setBorderWidth={setBorderWidth}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="text" className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-2">
                <div className="p-3 bg-purple-50 rounded-md">
                  <h3 className="text-sm font-medium mb-2 text-purple-700">Title Settings</h3>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={handleTitleTextChange}
                      className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded hover:bg-purple-200"
                    >
                      Edit Title
                    </button>
                    <button 
                      onClick={() => setTitleAlignment('left')}
                      className={`px-2 py-1 text-xs rounded ${
                        titleAlignment === 'left' 
                          ? 'bg-purple-500 text-white' 
                          : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                      }`}
                    >
                      Left
                    </button>
                    <button 
                      onClick={() => setTitleAlignment('center')}
                      className={`px-2 py-1 text-xs rounded ${
                        titleAlignment === 'center' 
                          ? 'bg-purple-500 text-white' 
                          : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                      }`}
                    >
                      Center
                    </button>
                    <button 
                      onClick={() => setTitleAlignment('right')}
                      className={`px-2 py-1 text-xs rounded ${
                        titleAlignment === 'right' 
                          ? 'bg-purple-500 text-white' 
                          : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                      }`}
                    >
                      Right
                    </button>
                    <button 
                      onClick={() => setTitleItalic(!titleItalic)}
                      className={`px-2 py-1 text-xs rounded ${
                        titleItalic 
                          ? 'bg-purple-500 text-white' 
                          : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                      }`}
                    >
                      Italic
                    </button>
                  </div>
                </div>
                
                <div className="p-3 bg-pink-50 rounded-md">
                  <h3 className="text-sm font-medium mb-2 text-pink-700">Message Settings</h3>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={handleCustomMessageChange}
                      className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded hover:bg-pink-200"
                    >
                      Edit Message
                    </button>
                    <button 
                      onClick={() => setCustomAlignment('left')}
                      className={`px-2 py-1 text-xs rounded ${
                        customAlignment === 'left' 
                          ? 'bg-pink-500 text-white' 
                          : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                      }`}
                    >
                      Left
                    </button>
                    <button 
                      onClick={() => setCustomAlignment('center')}
                      className={`px-2 py-1 text-xs rounded ${
                        customAlignment === 'center' 
                          ? 'bg-pink-500 text-white' 
                          : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                      }`}
                    >
                      Center
                    </button>
                    <button 
                      onClick={() => setCustomAlignment('right')}
                      className={`px-2 py-1 text-xs rounded ${
                        customAlignment === 'right' 
                          ? 'bg-pink-500 text-white' 
                          : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                      }`}
                    >
                      Right
                    </button>
                    <button 
                      onClick={() => setCustomItalic(!customItalic)}
                      className={`px-2 py-1 text-xs rounded ${
                        customItalic 
                          ? 'bg-pink-500 text-white' 
                          : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                      }`}
                    >
                      Italic
                    </button>
                  </div>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-md">
                  <h3 className="text-sm font-medium mb-2 text-blue-700">Date Settings</h3>
                  <button 
                    onClick={toggleDateFormat}
                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded hover:bg-blue-200"
                  >
                    Toggle Date Format: {dateFormat === 'short' ? 'Short' : 'Long'}
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="stickers" className="space-y-4">
            <StickerOptions
              sticker={sticker}
              setSticker={setSticker}
            />
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Photo Settings</h3>
              <p className="text-xs text-gray-500 mb-4">
                Adjust settings for your K-pop photo booth experience.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Date Format:</span>
                  <button 
                    onClick={toggleDateFormat}
                    className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300"
                  >
                    {dateFormat === 'short' ? 'Short Format' : 'Long Format'}
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default KpopStripOptions;
