
import React from 'react';
import { Button } from '@/components/ui/button';
import { MusicIcon } from 'lucide-react';

interface MusicControlButtonProps {
  musicPlaying: boolean;
  toggleMusic: () => void;
}

const MusicControlButton: React.FC<MusicControlButtonProps> = ({
  musicPlaying,
  toggleMusic
}) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        variant={musicPlaying ? "default" : "outline"} 
        size="sm"
        onClick={toggleMusic}
        className={`rounded-full p-3 ${
          musicPlaying 
            ? 'bg-purple-600 text-white' 
            : 'bg-white/90 text-purple-600 border-purple-200'
        } shadow-md`}
      >
        <MusicIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default MusicControlButton;
