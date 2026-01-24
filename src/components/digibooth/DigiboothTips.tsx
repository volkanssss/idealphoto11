
import React from 'react';
import { Button } from '@/components/ui/button';

interface DigiboothTipsProps {
  showTips: boolean;
  setShowTips: (show: boolean) => void;
}

const DigiboothTips: React.FC<DigiboothTipsProps> = ({ showTips, setShowTips }) => {
  if (!showTips) return null;

  return (
    <div className="container mx-auto px-4 mb-4">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md shadow-sm">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Tips for using DigiBooth:</h3>
            <div className="mt-2 text-sm text-blue-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>Take 3-4 photos to create a complete photo strip</li>
                <li>Try different filters and effects for each photo</li>
                <li>Customize your photos in the Gallery tab</li>
                <li>Download your creation when you're done!</li>
              </ul>
            </div>
            <button 
              onClick={() => setShowTips(false)}
              className="mt-2 text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigiboothTips;
