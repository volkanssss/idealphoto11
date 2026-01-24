
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
  role?: string;
  style?: "default" | "vintage" | "kpop" | "pica";
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  rating,
  role,
  style = "default"
}) => {
  const getStyleClasses = () => {
    switch (style) {
      case "vintage":
        return "bg-amber-50 border-amber-200";
      case "kpop":
        return "bg-purple-50 border-purple-200";
      case "pica":
        return "bg-pink-50 border-pink-200";
      default:
        return "bg-white border-gray-200";
    }
  };

  return (
    <Card className={`${getStyleClasses()} transition-all duration-300 hover:shadow-md`}>
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                style === "vintage"
                  ? "text-amber-400 fill-amber-400"
                  : style === "kpop"
                  ? "text-purple-400 fill-purple-400"
                  : style === "pica"
                  ? "text-pink-400 fill-pink-400"
                  : "text-yellow-400 fill-yellow-400"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"{quote}"</p>
        <p className="font-semibold text-gray-800">{author}</p>
        {role && <p className="text-sm text-gray-500">{role}</p>}
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
