
import React from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import PhotoItem from '@/components/photostrip/PhotoItem';
import KpopStripFooter from './KpopStripFooter';
import { BorderWidthValue } from './BorderWidthSelector';
import { FrameTheme } from '@/components/digibooth/BorderStyleSelector';

interface KpopStripContainerProps {
  photoStripRef: React.RefObject<HTMLDivElement>;
  displayPhotos: string[];
  frameColor: FrameColorType;
  sticker: StickerType;
  titleText: string;
  dateFormat: string;
  customMessage: string;
  titleAlignment: 'left' | 'center' | 'right';
  customAlignment: 'left' | 'center' | 'right';
  titleItalic: boolean;
  customItalic: boolean;
  titleFont: string;
  titleColor: string;
  titleSize: string;
  customFont: string;
  customColor: string;
  customSize: string;
  textColor: string;
  onTitleClick: () => void;
  onCustomMessageClick: () => void;
  onDateClick: () => void;
  selectedIdols?: Array<{id: string, name: string, src: string}>;
  imageSize: BorderWidthValue;
  imageSizeClass: string;
  frameTheme: FrameTheme;
}

const KpopStripContainer: React.FC<KpopStripContainerProps> = ({
  photoStripRef,
  displayPhotos,
  frameColor,
  sticker,
  titleText,
  dateFormat,
  customMessage,
  titleAlignment,
  customAlignment,
  titleItalic,
  customItalic,
  titleFont,
  titleColor,
  titleSize,
  customFont,
  customColor,
  customSize,
  textColor,
  onTitleClick,
  onCustomMessageClick,
  onDateClick,
  selectedIdols = [],
  imageSize,
  imageSizeClass,
  frameTheme
}) => {
  // Get the frame color class
  const getFrameColorClass = () => {
    if (frameTheme !== 'default') {
      // If theme is applied, return an empty string (theme will control colors)
      return '';
    }
    
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
  
  // Get theme-based classes
  const getFrameThemeClasses = () => {
    switch(frameTheme) {
      case 'birthday':
        return 'bg-gradient-to-r from-yellow-400 to-pink-500 border-yellow-400';
      case 'christmas':
        return 'bg-gradient-to-r from-green-600 to-red-600 border-green-600';
      case 'halloween':
        return 'bg-gradient-to-r from-orange-500 to-purple-900 border-orange-500';
      case 'valentines':
        return 'bg-gradient-to-r from-pink-400 to-red-400 border-pink-400';
      case 'wedding':
        return 'bg-gradient-to-r from-blue-100 via-white to-blue-100 border-blue-100';
      case 'graduation':
        return 'bg-gradient-to-r from-blue-800 to-indigo-900 border-blue-800';
      case 'babyshower':
        return 'bg-gradient-to-r from-blue-200 to-pink-200 border-blue-200';
      case 'anniversary':
        return 'bg-gradient-to-r from-yellow-200 to-yellow-600 border-yellow-200';
      case 'newyear':
        return 'bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 border-purple-700';
      case 'vintage':
        return 'bg-gradient-to-r from-amber-700 to-yellow-600 border-amber-700';
      case 'kpop':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500';
      default:
        return getFrameColorClass();
    }
  };

  // Get appropriate text color based on the frameTheme
  const getTextColorForTheme = () => {
    switch(frameTheme) {
      case 'default':
        return textColor;
      case 'wedding':
      case 'babyshower':
      case 'anniversary':
        return 'text-gray-800';
      default:
        return 'text-white';
    }
  };

  return (
    <div 
      ref={photoStripRef} 
      id="photo-strip-container"
      className={`mx-auto max-w-[300px] p-4 border-8 rounded-lg shadow-lg ${getFrameThemeClasses()}`}
    >
      <div className="flex flex-col gap-2">
        {displayPhotos.map((photo, index) => (
          <div key={index} className={`mx-auto ${imageSizeClass}`}>
            <PhotoItem 
              photo={photo}
              index={index}
              sticker={sticker}
            />
          </div>
        ))}
        
        <KpopStripFooter
          titleText={titleText}
          dateFormat={dateFormat}
          customMessage={customMessage}
          titleAlignment={titleAlignment}
          customAlignment={customAlignment}
          titleItalic={titleItalic}
          customItalic={customItalic}
          titleFont={titleFont}
          titleColor={titleColor}
          titleSize={titleSize}
          customFont={customFont}
          customColor={customColor}
          customSize={customSize}
          textColor={frameTheme === 'default' ? textColor : getTextColorForTheme()}
          onTitleClick={onTitleClick}
          onCustomMessageClick={onCustomMessageClick}
          onDateClick={onDateClick}
          selectedIdols={selectedIdols}
          frameColor={frameColor}
        />
      </div>
    </div>
  );
};

export default KpopStripContainer;
