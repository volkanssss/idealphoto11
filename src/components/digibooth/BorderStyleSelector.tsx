
import React from 'react';
import { Button } from '@/components/ui/button';

export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'none';
export type BorderWidth = 'thin' | 'medium' | 'thick' | 'none' | 'hairline' | 'heavy' | 'ultra';
export type FrameTheme = 'default' | 'birthday' | 'christmas' | 'halloween' | 'valentines' | 'wedding' | 'graduation' | 'babyshower' | 'anniversary' | 'newyear' | 'vintage' | 'kpop';

interface BorderStyleSelectorProps {
  borderStyle: BorderStyle;
  setBorderStyle: (style: BorderStyle) => void;
  borderWidth: BorderWidth;
  setBorderWidth: (width: BorderWidth) => void;
  frameTheme?: FrameTheme;
  setFrameTheme?: (theme: FrameTheme) => void;
}

const BorderStyleSelector: React.FC<BorderStyleSelectorProps> = ({
  borderStyle,
  setBorderStyle,
  borderWidth,
  setBorderWidth,
  frameTheme,
  setFrameTheme
}) => {
  // Style options
  const styleOptions: { value: BorderStyle; label: string }[] = [
    { value: 'solid', label: 'Solid' },
    { value: 'dashed', label: 'Dashed' },
    { value: 'dotted', label: 'Dotted' },
    { value: 'double', label: 'Double' },
    { value: 'groove', label: 'Groove' },
    { value: 'ridge', label: 'Ridge' },
    { value: 'none', label: 'None' }
  ];

  // Width options
  const widthOptions: { value: BorderWidth; label: string }[] = [
    { value: 'hairline', label: 'Hairline' },
    { value: 'thin', label: 'Thin' },
    { value: 'medium', label: 'Medium' },
    { value: 'thick', label: 'Thick' },
    { value: 'heavy', label: 'Heavy' },
    { value: 'ultra', label: 'Ultra' },
    { value: 'none', label: 'None' }
  ];

  return (
    <div className="mb-4">
      <div className="space-y-4">
        <div>
          <h3 className="text-xs font-medium text-gray-600 mb-2">Border Style</h3>
          <div className="flex flex-wrap gap-1.5">
            {styleOptions.map(option => (
              <Button
                key={option.value}
                variant={borderStyle === option.value ? "default" : "outline"}
                className={`px-2 py-1 rounded-md text-xs ${
                  borderStyle === option.value ? 'ring-2 ring-offset-1 ring-primary' : ''
                } transition-all duration-200`}
                onClick={() => setBorderStyle(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xs font-medium text-gray-600 mb-2">Border Width</h3>
          <div className="flex flex-wrap gap-1.5">
            {widthOptions.map(option => (
              <Button
                key={option.value}
                variant={borderWidth === option.value ? "default" : "outline"}
                className={`px-2 py-1 rounded-md text-xs ${
                  borderWidth === option.value ? 'ring-2 ring-offset-1 ring-primary' : ''
                } transition-all duration-200`}
                onClick={() => setBorderWidth(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorderStyleSelector;
