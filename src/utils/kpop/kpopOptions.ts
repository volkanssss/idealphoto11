
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';

// Helper function to get border color class based on frame color
export const getBorderColor = (frameColor: FrameColorType): string => {
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

// Function to get sticker image based on sticker type
export const getStickerImage = (stickerType: StickerType): string | null => {
  switch(stickerType) {
    case 'girlypop': return '/lovable-uploads/036b7ff5-1d94-44f6-982f-2306826a8053.png';
    case 'cute': return '/lovable-uploads/3fc22a76-7d7a-4617-b0df-6998c07b60ea.png';
    case 'mofusand': return '/mofusand-frame.png';
    case 'shin-chan': return '/shin-chan.png';
    case 'miffy': return '/miffy-frame.png';
    case 'none':
    default:
      return null;
  }
};

// Constants for K-pop group settings
export const KPOP_GROUPS = [
  {
    id: 'bts',
    name: 'BTS',
    fanName: 'ARMY',
    colors: ['#7B1FA2', '#673AB7']
  },
  {
    id: 'blackpink',
    name: 'BLACKPINK',
    fanName: 'BLINK',
    colors: ['#FF1493', '#000000']
  },
  {
    id: 'twice',
    name: 'TWICE',
    fanName: 'ONCE',
    colors: ['#FF9800', '#E91E63']
  },
  {
    id: 'stray-kids',
    name: 'Stray Kids',
    fanName: 'STAY',
    colors: ['#1E88E5', '#000000']
  },
  {
    id: 'itzy',
    name: 'ITZY',
    fanName: 'MIDZY',
    colors: ['#E91E63', '#00BCD4']
  },
  {
    id: 'newjeans',
    name: 'NewJeans',
    fanName: 'Bunnies',
    colors: ['#90CAF9', '#64B5F6']
  },
  {
    id: 'ive',
    name: 'IVE',
    fanName: 'DIVE',
    colors: ['#9C27B0', '#BA68C8']
  }
];
