
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, Share2 } from 'lucide-react';

interface KpopStripControlsProps {
  photoCount: number;
  onDownload: () => void;
  onTakeNewPhotos: () => void;
}

const KpopStripControls: React.FC<KpopStripControlsProps> = ({
  photoCount,
  onDownload,
  onTakeNewPhotos
}) => {
  // Handle share event
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My K-pop Photo Booth',
          text: 'Check out my photos with K-pop idols!',
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      alert('Copy this URL to share: ' + window.location.href);
    }
  };

  return (
    <div className="flex justify-center gap-3 flex-wrap mt-4">
      <Button
        onClick={onDownload}
        disabled={photoCount < 3}
        className="bg-purple-600 hover:bg-purple-700 border-2 border-purple-400"
      >
        <Download className="mr-2 h-4 w-4" />
        Download Photos
      </Button>
      
      <Button
        onClick={handleShare}
        variant="outline"
        className="border-2 border-purple-400 text-purple-600"
      >
        <Share2 className="mr-2 h-4 w-4" />
        Share
      </Button>
      
      <Button
        onClick={onTakeNewPhotos}
        variant="outline"
        className="border-2 border-purple-400 text-purple-600"
      >
        <RefreshCw className="mr-2 h-4 w-4" />
        Take New Photos
      </Button>
    </div>
  );
};

export default KpopStripControls;
