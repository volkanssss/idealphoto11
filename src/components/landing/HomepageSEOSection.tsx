
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, smartphone, Download, Layers, HelpCircle } from 'lucide-react';

const HomepageSEOSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Brand Search Intent Capture */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Search className="h-6 w-6 text-purple-600" />
              Popular Kpop Photobooth Searches
            </h2>
            <p className="text-gray-700 mb-6">
              Many users search for <strong>Easy4Cut</strong>, <strong>Memorify Photobooth</strong>, or <strong>Chinchinbooth</strong> when looking for authentic K-pop photo experiences.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Easy4Cut & Variations</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Easy4Cut</li>
                  <li>Easy4Cut Kpop</li>
                  <li>Easy4Cut.com photobooth</li>
                  <li>Easy4Cut.com Kpop</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Other Popular Booths</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Memorify Photobooth</li>
                  <li>Memorifyphotobooth</li>
                  <li>Chinchinbooth</li>
                  <li>Chinchin Photo Booth</li>
                  <li>Chin Chin Booth</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-gray-700 border-t pt-4">
              If you’re searching for Easy4Cut.com, Memorify Photobooth, or Chinchin Booth style layouts, you can create similar Kpop photo strips here instantly — no download required.
            </p>
          </div>

          {/* Ideal Photo Vercel Search Capture */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <smartphone className="h-6 w-6 text-pink-600" />
              Ideal Photo Vercel App Users
            </h2>
            <p className="text-gray-700 mb-4">
              Some users search for:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Ideal Photo Vercel App", "Idealphoto.vercel.app", "Idealphoto.vercel.app Kpop",
                "Ideal Photo Booth", "Idealphoto Kpop", "Ideal Photo Vercel"
              ].map((term) => (
                <span key={term} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {term}
                </span>
              ))}
            </div>
            <p className="text-gray-700">
              If you previously accessed a Kpop photobooth through a Vercel app or browser-based photo booth tool, this web app offers the same smooth online experience — optimized for both mobile and desktop.
            </p>
          </div>

          {/* Core SEO Section & Templates */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Download className="h-6 w-6 text-blue-600" />
                Kpop Photo Strip Maker
              </h2>
              <p className="text-gray-700">
                This Kpop photobooth app allows you to:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span> Upload photos instantly
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span> Choose vertical Kpop photo strip layouts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span> Customize spacing and background
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span> Download high-resolution photo strips
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span> Use the photobooth online with no watermark
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic mt-2">
                The tool works completely in your browser, similar to other popular Kpop photobooth platforms.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Layers className="h-6 w-6 text-indigo-600" />
                Kpop Photobooth Templates
              </h2>
              <p className="text-gray-700">Choose from:</p>
              <ul className="space-y-3">
                <li className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-gray-700">
                  📷 <strong>2-frame</strong> Kpop photo booth strip
                </li>
                <li className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-gray-700">
                  📸 <strong>3-frame</strong> aesthetic layout
                </li>
                <li className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-gray-700">
                  🎞️ <strong>4-frame</strong> classic photobooth style
                </li>
                <li className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-gray-700">
                  ⚫ <strong>Minimal black & white</strong> design
                </li>
                <li className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-gray-700">
                  🎨 <strong>Soft pastel</strong> Kpop-inspired templates
                </li>
              </ul>
              <p className="text-gray-600 text-sm">
                Perfect for social sharing, fan edits and aesthetic photo memories.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-100 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-gray-600" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Is this similar to Easy4Cut Kpop photobooth?</h3>
                <p className="text-gray-700">This Kpop photobooth web app allows you to create similar style photo strips online.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Does it work like Memorify Photobooth?</h3>
                <p className="text-gray-700">Yes, you can generate vertical Kpop-style photo strips instantly in your browser.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Can I use this instead of a Vercel photobooth app?</h3>
                <p className="text-gray-700">Yes, this is a fully browser-based Kpop photobooth app that works on all modern devices.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Is this photobooth free?</h3>
                <p className="text-gray-700">Yes, you can create and download your Kpop photo strip without payment.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomepageSEOSection;
