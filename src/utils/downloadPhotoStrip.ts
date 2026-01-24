
import html2canvas from 'html2canvas';
import { toast } from 'sonner';
import { downloadImage } from './imageProcessing';

/**
 * Downloads the photo strip container as an image
 * @param setIsDownloading State setter for tracking download progress
 * @param isWedding Flag to customize messaging for wedding photos
 */
export const downloadPhotoStrip = async (
  setIsDownloading: (value: boolean) => void,
  isWedding: boolean = false
) => {
  try {
    // Start download process
    setIsDownloading(true);
    toast.loading(isWedding ? 'Creating your wedding photo memories...' : 'Creating your photo strip...');
    
    // Get the container element
    const container = document.getElementById('photo-strip-container');
    if (!container) {
      throw new Error('Photo strip container not found');
    }
    
    // Capture the entire container with styling
    const canvas = await html2canvas(container, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      scale: 2, // Higher resolution
      logging: false // Disable logging for cleaner console
    });
    
    // Download the image with formatted date in filename
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    const fileName = isWedding ? `wedding-photos-${formattedDate}` : `photo-strip-${formattedDate}`;
    
    await downloadImage(canvas, fileName);
    
    // Finish download process
    setIsDownloading(false);
    toast.dismiss();
    toast.success(isWedding ? 'Wedding photos saved successfully!' : 'Photo strip saved successfully!');
    
  } catch (error) {
    console.error('Error downloading photo strip:', error);
    setIsDownloading(false);
    toast.dismiss();
    toast.error('Failed to download photos. Please try again.');
  }
};
