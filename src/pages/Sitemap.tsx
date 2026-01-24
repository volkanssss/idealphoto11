
import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { ExternalLink } from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", url: "/", description: "Virtual photo booth platform homepage" },
        { name: "About", url: "/about", description: "Learn about İdeal Photo and our mission" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" },
        { name: "Pricing", url: "/pricing", description: "View our affordable pricing plans" },
        { name: "FAQ", url: "/faq", description: "Frequently asked questions and answers" },
        { name: "Careers", url: "/careers", description: "Join our team and build the future" }
      ]
    },
    {
      category: "Photo Booth Types",
      links: [
        { name: "K-pop Photo Booth", url: "/kpop-photobooth", description: "Create photos with K-pop idols and themes" },
        { name: "Vintage Photo Booth", url: "/vintage-photobooth", description: "Classic vintage-style photo booth experience" },
        { name: "Wedding Photo Booth", url: "/wedding-photobooth", description: "Elegant photo booth for weddings and events" },
        { name: "Digibooth", url: "/digibooth", description: "Modern digital photo booth with advanced features" },
        { name: "Pica Pica Photo Booth", url: "/pica-pica-photobooth", description: "Fun and colorful photo booth experience" },
        { name: "Selfie Photo Booth", url: "/selfie-photobooth", description: "Perfect selfies with professional photo booth effects" },
        { name: "Party Photo Booth", url: "/party-photobooth", description: "Free party photo booth for celebrations and events" },
        { name: "Chinchinbooth", url: "/chinchinbooth", description: "ChinChin photo booth with creative frames and filters" },
        { name: "BeautyPlus Photo Booth", url: "/beautyplus-photobooth", description: "Beauty filters and professional photo editing" },
        { name: "Jepreto Photo Booth", url: "/jepreto-photobooth", description: "Web photo booth inspired by Jepreto.com" }
      ]
    },
    {
      category: "Legal & Policies",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy", description: "How we protect and handle your data" },
        { name: "Terms of Service", url: "/terms-of-service", description: "Terms and conditions for using our service" },
        { name: "Cookie Policy", url: "/cookie-policy", description: "Information about cookies and tracking" }
      ]
    },
    {
      category: "Content & Resources",
      links: [
        { name: "Blog", url: "/blog", description: "Latest news, tips, and photo booth trends" },
        { name: "Top 10 K-pop Photo Ideas", url: "/blog/top-kpop-photo-ideas", description: "Creative K-pop photo booth ideas and tips" },
        { name: "Perfect Fan Photo Guide", url: "/blog/perfect-fan-photo-guide", description: "Complete guide to creating amazing fan photos" },
        { name: "Behind the Scenes: Idol Assets", url: "/blog/behind-the-scenes-idol-assets", description: "How we create and manage idol assets" },
        { name: "K-pop Photo Trends 2023", url: "/blog/kpop-photo-trends-2023", description: "Latest trends in K-pop photography" },
        { name: "Fan Stories and Photo Memories", url: "/blog/fan-stories-photo-memories", description: "Community stories and memorable moments" },
        { name: "New Features Update", url: "/blog/new-features-backgrounds-stickers", description: "Latest platform features and improvements" },
        { name: "Virtual Photo Booth Setup 2025", url: "/blog/virtual-photo-booth-setup-2025", description: "Complete setup guide for virtual photo booths" },
        { name: "Creative Photo Booth Ideas", url: "/blog/creative-photo-booth-ideas", description: "10 creative ways to use digital photo booths" },
        { name: "K-pop Beginner's Guide", url: "/blog/kpop-beginner-guide", description: "Complete beginner's guide for K-pop photo booths" },
        { name: "Photo Strip Design Tips", url: "/blog/photo-strip-design-tips", description: "Professional design tips for photo strips" },
        { name: "Virtual Photo Booth Trends 2025", url: "/blog/virtual-photo-booth-trends-2025", description: "Latest trends in virtual photo booths" },
        { name: "Tutorials", url: "/tutorials", description: "Step-by-step tutorials and video guides" },
        { name: "Gallery", url: "/gallery", description: "Browse user creations and get inspired" },
        { name: "Resources", url: "/resources", description: "Free templates, guides, and design assets" },
        { name: "Use Cases", url: "/use-cases", description: "Real-world applications for every event type" },
        { name: "Help Center", url: "/help", description: "Get help and support for using İdeal Photo" }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Sitemap - İdeal Photo | All Pages and Resources" 
        description="Complete sitemap of İdeal Photo website. Find all pages, photo booth types, resources, and important links in one organized location." 
        canonicalPath="/sitemap"
        keywords="sitemap, site map, website navigation, all pages, photo booth pages, virtual photo booth sitemap"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Site Map</h1>
                <p className="text-xl opacity-90">
                  Navigate through all pages and resources on İdeal Photo
                </p>
              </div>
            </div>
          </section>

          {/* Sitemap Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid gap-12">
                  {siteStructure.map((section, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                        {section.category}
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {section.links.map((link, linkIndex) => (
                          <div key={linkIndex} className="group">
                            <a 
                              href={link.url}
                              className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <ExternalLink className="h-5 w-5 text-purple-600 mt-0.5 group-hover:text-purple-700" />
                              <div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                  {link.name}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                  {link.description}
                                </p>
                                <p className="text-xs text-gray-400 mt-1 font-mono">
                                  https://idealphotovercel.com{link.url}
                                </p>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Information */}
                <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
                  <div className="prose prose-lg text-gray-700">
                    <p className="mb-4">
                      This sitemap includes all publicly accessible pages on İdeal Photo. Our website is regularly updated with new features, content, and improvements.
                    </p>
                    <p className="mb-4">
                      For technical users, our XML sitemap is also available at <code>/sitemap.xml</code> for search engine crawlers.
                    </p>
                    <p>
                      If you can't find what you're looking for, please don't hesitate to <a href="/contact" className="text-purple-600 hover:text-purple-700">contact us</a> for assistance.
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

export default Sitemap;
