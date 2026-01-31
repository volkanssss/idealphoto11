
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Camera, BarChart, Cloud, Zap } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const DigiboothSEOSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.section
      className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            🚀 Enterprise-Grade Virtual Photo Booth
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            The Future of Event Marketing & Engagement
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Digibooth Dietherdave isn't just a fun photo tool—it's a powerful engagement platform designed for modern brands and event planners. By moving the photo booth experience to the browser, we eliminate hardware costs, remove physical queues, and unlock infinite scalability for your marketing campaigns.
            </p>

            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                <Cloud className="h-3 w-3 mr-1" /> Browser-Based SaaS
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium">
                <BarChart className="h-3 w-3 mr-1" /> Marketing Data
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-medium">
                <Zap className="h-3 w-3 mr-1" /> Instant Deployment
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-medium">
                <Camera className="h-3 w-3 mr-1" /> High-Res Capture
              </span>
            </div>

            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className={cn(
                "rounded-lg border border-blue-100 bg-white transition-all overflow-hidden",
                isOpen ? "shadow-md" : ""
              )}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full flex justify-between items-center py-3 px-4 hover:bg-blue-50 text-blue-700"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="font-medium">
                    {isOpen ? "Read less" : "Read more about Digibooth capabilities"}
                  </span>
                  <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    {isOpen ? <ChevronUp className="h-3 w-3 text-blue-600" /> : <ChevronDown className="h-3 w-3 text-blue-600" />}
                  </span>
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className="p-6 text-gray-700 space-y-6 bg-blue-50/30">
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-4">Seamless Brand Integration</h3>
                <p>
                  Every touchpoint of the Digibooth experience can be customized to align with your brand identity. From custom overlays and frames to branded stickers and backgrounds, you maintain complete visual control. This ensures that every photo shared on social media acts as an authentic endorsement of your brand, extending your reach far beyond the event attendees.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-4">No App Downloads Required</h3>
                <p>
                  Friction kills engagement. That's why Digibooth is built 100% for the mobile web. Guests simply scan a QR code or click a link to start snapping. There's no bulky app to install, no account to create, and no barrier to entry. This approach dramatically increases participation rates compared to traditional app-based solutions.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-4">Privacy-First Architecture</h3>
                <p>
                  In an era of data privacy concerns (GDPR, CCPA), Digibooth stands out with its client-side processing model. Photos are processed locally on the user's device, meaning sensitive images don't need to be uploaded to a server to be filtered or framed. This innovative approach reduces legal liability for event organizers while giving users peace of mind.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-4">Hybrid Event Ready</h3>
                <p>
                  Whether your event is in-person, fully virtual, or hybrid, Digibooth bridges the gap. Remote attendees can participate in the same fun as those on the venue floor, creating a unified community experience. It's the perfect solution for global town halls, product launches, and community celebrations.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DigiboothSEOSection;
