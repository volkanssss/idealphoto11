import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Download, FileText, Video, Image, Book, Lightbulb } from 'lucide-react';

const resourcesStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Resources - İdeal Photo",
  "description": "Free templates, guides, and resources for creating amazing virtual photo booth experiences",
  "url": "https://idealphotovercel.com/resources"
};

const Resources = () => {
  const resourceCategories = [
    {
      icon: FileText,
      title: "Templates & Guides",
      description: "Downloadable templates and comprehensive guides",
      resources: [
        { name: "Photo Strip Template Pack", type: "PDF", downloads: "2.3K" },
        { name: "Event Planning Checklist", type: "PDF", downloads: "1.8K" },
        { name: "Frame Design Ideas", type: "PDF", downloads: "3.1K" },
        { name: "Color Combination Guide", type: "PDF", downloads: "1.5K" }
      ]
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      resources: [
        { name: "Getting Started with K-pop Photos", type: "Video", duration: "5:30" },
        { name: "Advanced Filter Techniques", type: "Video", duration: "8:45" },
        { name: "Creating Perfect Photo Strips", type: "Video", duration: "6:20" },
        { name: "Wedding Photo Booth Setup", type: "Video", duration: "7:15" }
      ]
    },
    {
      icon: Image,
      title: "Graphics & Assets",
      description: "Free graphics, stickers, and design elements",
      resources: [
        { name: "Seasonal Sticker Pack", type: "PNG", items: "50+" },
        { name: "Celebration Frames", type: "PNG", items: "30+" },
        { name: "Background Collection", type: "JPG", items: "25+" },
        { name: "Typography Samples", type: "PDF", items: "40+" }
      ]
    },
    {
      icon: Book,
      title: "eBooks & Guides",
      description: "In-depth guides and best practices",
      resources: [
        { name: "Complete Photo Booth Handbook", type: "PDF", pages: "45" },
        { name: "Social Media Marketing Guide", type: "PDF", pages: "28" },
        { name: "Event Photography Tips", type: "PDF", pages: "32" },
        { name: "K-pop Fan Photo Guide", type: "PDF", pages: "38" }
      ]
    },
    {
      icon: Lightbulb,
      title: "Tips & Tricks",
      description: "Quick tips and creative ideas",
      resources: [
        { name: "10 Lighting Tips for Better Photos", type: "Article" },
        { name: "Color Theory Basics", type: "Article" },
        { name: "Pose Ideas Collection", type: "Article" },
        { name: "Filter Selection Guide", type: "Article" }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Free Resources & Templates | İdeal Photo - Photo Booth Guides"
        description="Access free photo booth templates, video tutorials, design assets, and comprehensive guides. Everything you need to create stunning virtual photo booth experiences."
        canonicalPath="/resources"
        keywords="photo booth templates, photo strip templates, photo booth guides, free design resources, photo booth tutorials, virtual photo booth tips"
        structuredData={resourcesStructuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Free Resources & Templates
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                  Everything you need to create amazing photo booth experiences. Download templates, watch tutorials, and learn from our comprehensive guides.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 bg-white border-b">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto grid grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
                  <div className="text-gray-600 text-sm">Free Resources</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">25+</div>
                  <div className="text-gray-600 text-sm">Video Tutorials</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
                  <div className="text-gray-600 text-sm">Downloads</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
                  <div className="text-gray-600 text-sm">User Rating</div>
                </div>
              </div>
            </div>
          </section>

          {/* Resource Categories */}
          {resourceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex items-center mb-8">
                      <div className="bg-purple-100 p-4 rounded-lg mr-4">
                        <Icon className="h-8 w-8 text-purple-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                        <p className="text-gray-600 mt-1">{category.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {category.resources.map((resource, resourceIndex) => (
                        <div key={resourceIndex} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                          <div className="flex items-start justify-between">
                            <div className="flex-grow">
                              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                                {resource.name}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span className="bg-gray-100 px-3 py-1 rounded-full">{resource.type}</span>
                                {resource.downloads && <span>↓ {resource.downloads}</span>}
                                {resource.duration && <span>⏱ {resource.duration}</span>}
                                {resource.items && <span>📦 {resource.items} items</span>}
                                {resource.pages && <span>📄 {resource.pages} pages</span>}
                              </div>
                            </div>
                            <Download className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors ml-4" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          {/* Newsletter Section */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Get New Resources Weekly</h2>
                <p className="text-xl mb-8 opacity-90">
                  Subscribe to receive new templates, tutorials, and exclusive content delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-3 rounded-lg text-gray-900 flex-grow max-w-md"
                  />
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe Free
                  </button>
                </div>
                <p className="text-sm mt-4 opacity-75">
                  Join 10,000+ creators. No spam, unsubscribe anytime.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Resource FAQs</h2>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="font-semibold text-lg mb-2">Are all resources really free?</h3>
                    <p className="text-gray-600">
                      Yes! All resources on this page are completely free to download and use. We believe in empowering creators with the tools they need to succeed.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="font-semibold text-lg mb-2">Can I use these resources commercially?</h3>
                    <p className="text-gray-600">
                      Most of our resources can be used for commercial purposes. Check individual resource licenses for specific terms and attribution requirements.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="font-semibold text-lg mb-2">How often are new resources added?</h3>
                    <p className="text-gray-600">
                      We add new resources weekly, including templates, tutorials, and guides. Subscribe to our newsletter to get notified of new additions.
                    </p>
                  </div>
                  <div className="pb-6">
                    <h3 className="font-semibold text-lg mb-2">Do I need an account to download resources?</h3>
                    <p className="text-gray-600">
                      No account required! Simply click the download button on any resource. However, creating a free account lets you save favorites and track downloads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Resources;
