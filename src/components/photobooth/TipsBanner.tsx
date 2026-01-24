
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface TipsBannerProps {
  onDismiss: () => void;
}

const TipsBanner: React.FC<TipsBannerProps> = ({ onDismiss }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 mb-6"
    >
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <Sparkles className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-purple-900">New! Enhanced Photo Booth Experience</h3>
              <p className="text-sm text-purple-600">Try our new layout modes and special effects for even more creative photos!</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onDismiss}
            className="text-purple-600 hover:text-purple-800 hover:bg-purple-50"
          >
            Dismiss
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default TipsBanner;
