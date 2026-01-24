
import React from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';

interface KpopStripFooterProps {
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
  frameColor: FrameColorType;
}

const KpopStripFooter: React.FC<KpopStripFooterProps> = ({
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
  frameColor
}) => {
  // Helper functions
  const getAlignmentClass = (alignment: 'left' | 'center' | 'right') => {
    switch (alignment) {
      case 'left': return 'text-left';
      case 'right': return 'text-right';
      default: return 'text-center';
    }
  };
  
  const getItalicClass = (isItalic: boolean) => {
    return isItalic ? 'italic' : '';
  };
  
  const formatDate = () => {
    const today = new Date();
    if (dateFormat === 'short') {
      return today.toLocaleDateString();
    } else {
      return today.toLocaleDateString(undefined, { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  };
  
  return (
    <div className={`py-3 mt-2 ${textColor}`}>
      {/* Title text with custom font */}
      <div 
        className={`font-${titleFont} ${titleSize} font-bold cursor-pointer ${getAlignmentClass(titleAlignment)} ${getItalicClass(titleItalic)} hover:opacity-80 transition-opacity`}
        style={{ color: titleColor }}
        onClick={onTitleClick}
        title="Click to edit title"
      >
        {titleText}
      </div>
      
      {/* Display idol names if selected */}
      {selectedIdols.length > 0 && (
        <div className={`text-xs mt-1 ${getAlignmentClass(titleAlignment)}`}>
          with {selectedIdols.map(idol => idol.name).join(', ')}
        </div>
      )}
      
      {/* Date with toggle functionality */}
      <div 
        className={`text-xs mt-2 cursor-pointer ${getAlignmentClass(titleAlignment)} hover:opacity-80 transition-opacity`}
        onClick={onDateClick}
        title="Click to toggle date format"
      >
        {formatDate()}
      </div>
      
      {/* Custom message with different font */}
      <div 
        className={`font-${customFont} ${customSize} mt-3 cursor-pointer ${getAlignmentClass(customAlignment)} ${getItalicClass(customItalic)} hover:opacity-80 transition-opacity`}
        style={{ color: customColor }}
        onClick={onCustomMessageClick}
        title="Click to edit message"
      >
        {customMessage}
      </div>
    </div>
  );
};

export default KpopStripFooter;
