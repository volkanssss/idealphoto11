
import { useState } from 'react';
import { BorderWidthValue } from '@/components/kpop/photostrip/BorderWidthSelector';

export default function useKpopTextStyles() {
  // Default text content
  const [titleText, setTitleText] = useState('K-POP PHOTO BOOTH');
  const [dateFormat, setDateFormat] = useState('short');
  const [customMessage, setCustomMessage] = useState('IDEALPHOTOVERCEL.COM');
  
  // Title styling
  const [titleFont, setTitleFont] = useState('sans');
  const [titleColor, setTitleColor] = useState('#ffffff');
  const [titleSize, setTitleSize] = useState('text-lg');
  const [titleAlignment, setTitleAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [titleItalic, setTitleItalic] = useState(false);
  
  // Custom message styling
  const [customFont, setCustomFont] = useState('mono');
  const [customColor, setCustomColor] = useState('#ffffff');
  const [customSize, setCustomSize] = useState('text-xs');
  const [customAlignment, setCustomAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [customItalic, setCustomItalic] = useState(false);
  
  // Image size/padding
  const [imageSize, setImageSize] = useState<BorderWidthValue>('md');
  
  const getImageSizeClass = (width: BorderWidthValue): string => {
    switch (width) {
      case 'xs': return 'w-[95%]';
      case 'sm': return 'w-[90%]';
      case 'md': return 'w-[85%]';
      case 'lg': return 'w-[80%]';
      case 'xl': return 'w-[75%]';
      case 'none': 
      default:
        return 'w-full';
    }
  };

  return {
    titleText,
    setTitleText,
    dateFormat,
    setDateFormat,
    customMessage,
    setCustomMessage,
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
    imageSize,
    setImageSize,
    getImageSizeClass
  };
}
