
import { useCallback, useRef } from 'react';
import { FilterType } from '@/components/photobooth/FilterSelector';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import { applyCanvasFilter } from '@/utils/filters';

interface UsePhotoCaptureProps {
  onCapture: (imageSrc: string) => void;
  flipped: boolean;
  selectedFilter?: FilterType | DigiboothFilterType;
  filterAdjustments?: FilterAdjustmentValues;
  overlayImage: HTMLImageElement | null;
  selectedIdols?: Array<{id: string, name: string, src: string}>;
}

interface UsePhotoCaptureReturn {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  capturePhoto: () => void;
}

export const usePhotoCapture = ({
  onCapture,
  flipped,
  selectedFilter = 'none',
  filterAdjustments,
  overlayImage,
  selectedIdols = []
}: UsePhotoCaptureProps): UsePhotoCaptureReturn => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const capturePhoto = useCallback(() => {
    const videoElement = document.querySelector('video');
    if (!videoElement || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    if (context) {
      try {
        // Detect if mobile device for potential optimizations
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        // Set canvas to video dimensions to maintain aspect ratio and quality
        // Using the exact video dimensions ensures we capture the entire field of view
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        
        // For mobile, we might need to ensure dimensions aren't too large
        if (isMobile && canvas.width > 1920) {
          const aspectRatio = canvas.height / canvas.width;
          canvas.width = 1920;
          canvas.height = Math.round(canvas.width * aspectRatio);
        }
        
        // Enable image smoothing for better quality
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        
        context.save();
        if (!flipped) {
          // Draw the full video frame to ensure we capture the wide angle
          context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        } else {
          context.translate(canvas.width, 0);
          context.scale(-1, 1);
          context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        }
        context.restore();
        
        applyCanvasFilter(context, canvas, selectedFilter, filterAdjustments);
        
        // If using single overlay
        if (overlayImage && selectedIdols.length === 0) {
          const scaleRatio = Math.min(
            canvas.width / overlayImage.width,
            canvas.height / overlayImage.height
          ) * 1.0;
          
          const overlayWidth = overlayImage.width * scaleRatio;
          const overlayHeight = overlayImage.height * scaleRatio;
          
          const x = canvas.width - overlayWidth - 10;
          const y = canvas.height - overlayHeight; 
          
          context.drawImage(overlayImage, x, y, overlayWidth, overlayHeight);
        }
        
        // Use optimal image encoding based on device
        const quality = isMobile ? 0.9 : 1.0; // High quality for mobile
        const format = 'image/jpeg'; // JPEG is usually more efficient for photos
        
        const imageSrc = canvas.toDataURL(format, quality);
        onCapture(imageSrc);
        
      } catch (error) {
        console.error('Error capturing photo:', error);
        
        // Fallback method for problematic devices
        try {
          // Simple direct capture without effects as fallback
          context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          const imageSrc = canvas.toDataURL('image/jpeg', 0.8);
          onCapture(imageSrc);
        } catch (fallbackError) {
          console.error('Critical error in photo capture:', fallbackError);
        }
      }
    }
  }, [flipped, onCapture, overlayImage, selectedFilter, filterAdjustments, selectedIdols]);

  return {
    canvasRef,
    capturePhoto
  };
};
