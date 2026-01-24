
import React from 'react';
import KpopHeroArea from '../KpopHeroArea';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';

interface PopularGroup {
  name: string;
  fans: string;
}

interface KpopHeroSectionProps {
  favoriteGroups: string[];
  toggleFavoriteGroup: (groupName: string) => void;
}

const popularGroups: PopularGroup[] = [
  { name: 'BTS', fans: 'ARMY' },
  { name: 'BLACKPINK', fans: 'BLINK' },
  { name: 'TWICE', fans: 'ONCE' },
  { name: 'Stray Kids', fans: 'STAY' },
  { name: 'ITZY', fans: 'MIDZY' },
  { name: 'NewJeans', fans: 'Bunnies' },
  { name: 'IVE', fans: 'DIVE' },
  { name: 'ENHYPEN', fans: 'ENGENE' },
  { name: 'aespa', fans: 'MY' }
];

const KpopHeroSection: React.FC<KpopHeroSectionProps> = ({
  favoriteGroups,
  toggleFavoriteGroup
}) => {
  return (
    <>
      <KpopHeroArea />
      
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <span className="text-sm font-medium whitespace-nowrap text-purple-700">Fan of:</span>
            {popularGroups.map((group) => (
              <Badge 
                key={group.name}
                variant={favoriteGroups.includes(group.name) ? "default" : "outline"}
                className={`cursor-pointer whitespace-nowrap ${
                  favoriteGroups.includes(group.name) 
                    ? 'bg-purple-600 hover:bg-purple-700'
                    : 'hover:bg-purple-100'
                }`}
                onClick={() => toggleFavoriteGroup(group.name)}
              >
                {favoriteGroups.includes(group.name) && (
                  <Heart className="h-3 w-3 mr-1 fill-current" />
                )}
                {group.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default KpopHeroSection;
