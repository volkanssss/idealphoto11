
import React from 'react';
import { Button } from '@/components/ui/button';

export type BorderWidthValue = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';

interface BorderWidthSelectorProps {
  borderWidth: BorderWidthValue;
  setBorderWidth: (width: BorderWidthValue) => void;
}

const BorderWidthSelector: React.FC<BorderWidthSelectorProps> = ({
  borderWidth,
  setBorderWidth
}) => {
  // Width options
  const widthOptions: { value: BorderWidthValue; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'xs', label: 'XS' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'XL' }
  ];

  // Get the className based on the selected width
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

  return (
    <div className="mb-4">
      <div className="space-y-4">
        <div>
          <h3 className="text-xs font-medium text-gray-600 mb-2">Image Size</h3>
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

export default BorderWidthSelector;
