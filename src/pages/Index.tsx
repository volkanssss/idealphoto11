
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import HomepageSEOSection from '@/components/landing/HomepageSEOSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import FeatureHighlights from '@/components/landing/sections/FeatureHighlights';
import FAQSection from '@/components/landing/FAQSection';
const homepageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Ideal Photo Vercel",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "url": "https://idealphotovercel.com",
  "description": "Create stunning virtual photo booth pictures with customizable frames, filters, and instant sharing. Perfect for events, parties, and personal memories.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "screenshot": "https://idealphotovercel.com/og-image.png"
};

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <SEOHead
        title="IdealPhoto – Easy4Cut & Memorify Photobooth Alternative | Online Photo Booth"
        description="IdealPhoto is an online photo booth inspired by Easy4Cut and Memorify Photobooth. Create K-pop style, couple, and group photo layouts instantly — no studio needed."
        canonicalPath="/"
        keywords="easy4cut, easy4cut kpop, memorify photobooth, easy4cut.com, easy4cut com photobooth, easy4cut com, easy4cut.com photobooth, idealphoto, ideal photo vercel, ideal photo vercel app, idealphoto.vercel.app, photo booth online, free kpop photobooth"
        ogType="website"
        structuredData={homepageStructuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />

        <HeroSection />

        <div id="how-it-works">
          <HowItWorksSection />
        </div>

        <div className="py-6">
          <FeatureHighlights />
        </div>

        {/* How Virtual Photo Booths Work */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
                How Virtual Photo Booths Work: The Complete Guide
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Understanding the technology and process behind creating perfect virtual photo booth experiences
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Capture Your Moment</h3>
                  <p className="text-gray-700">
                    Use your device's camera or upload existing photos. Our advanced browser technology processes everything locally on your device, ensuring complete privacy and lightning-fast performance without requiring any downloads or installations.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-pink-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Customize & Enhance</h3>
                  <p className="text-gray-700">
                    Apply professional-grade filters, add K-pop themed frames, insert stickers, and customize text overlays. Choose from vintage aesthetics, modern digital art styles, wedding elegance, or authentic K-pop concepts featuring your favorite idols and group themes.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Download & Share</h3>
                  <p className="text-gray-700">
                    Download your creation in high-resolution format, perfect for printing or sharing online. Share directly to Instagram, Twitter, Facebook, TikTok, or save to your device. All photos are optimized for both digital display and physical printing.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Browser-Based Technology: Privacy Meets Performance
                </h3>
                <p className="text-gray-700 mb-4 text-center max-w-3xl mx-auto leading-relaxed">
                  Unlike traditional photo apps that upload your images to remote servers, İdeal Photo uses cutting-edge browser technology to process everything locally on your device. This means your photos never leave your device unless you choose to share them, providing unparalleled privacy protection while delivering professional-quality results in seconds.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">🔒 Complete Privacy</h4>
                    <p className="text-gray-600 text-sm">Your photos are processed entirely in your browser using advanced HTML5 Canvas and WebGL technologies, with zero server uploads.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">⚡ Instant Processing</h4>
                    <p className="text-gray-600 text-sm">Local processing eliminates network delays, delivering professional results in under 2 seconds regardless of internet speed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
                Why Choose İdeal Photo for Your Virtual Photo Booth Experience?
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Discover the most advanced virtual photo booth platform designed for K-pop fans, event planners, and creative enthusiasts worldwide
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">Professional Quality Results</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our advanced photo processing technology ensures every picture looks professional with high-resolution output and crystal-clear image quality. Whether you're creating K-pop inspired photo strips or professional event photos, your memories will look their best when shared online or printed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">Instant Social Sharing</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Share your photo booth creations instantly across all social media platforms including Instagram, Twitter, Facebook, and TikTok. Our optimized sharing features make it easy to spread joy and connect with friends, family, and fellow K-pop fans through your creative photo memories.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">Privacy & Security First</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Your photos are processed locally on your device using advanced browser technology, ensuring complete privacy. We never store, upload, or access your personal images on our servers, giving you peace of mind while creating your perfect photo booth experience with your favorite K-pop idols.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">Unlimited Creative Freedom</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Express your creativity with unlimited customization options. From authentic K-pop themes featuring your favorite idols to vintage aesthetics, elegant wedding styles, and modern digital art - create exactly what you envision with our extensive collection of filters, frames, and effects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                <div className="text-center max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Trusted by Thousands of K-pop Fans Worldwide
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    İdeal Photo provides a creative platform for making unforgettable photo booth memories. Whether you're celebrating a birthday, attending a concert, or just having fun with friends, our virtual photo booth brings professional-quality photo experiences to your fingertips. Join our growing community and start creating your unique photo booth experience today!
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>100% Free to Use</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>No Registration Required</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Works on All Devices</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
                Real Stories from Our Community
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                See how fans around the world create memorable experiences with İdeal Photo
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                  <div className="text-4xl mb-4">⭐</div>
                  <p className="text-gray-700 mb-4 italic">
                    "I created photo booth memories with my bias for my birthday. My friends were amazed at how professional they looked!"
                  </p>
                  <p className="text-sm font-semibold text-gray-900">- Sarah, K-pop Fan from USA</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
                  <div className="text-4xl mb-4">💝</div>
                  <p className="text-gray-700 mb-4 italic">
                    "Used this for our wedding reception photo booth. Guests loved the vintage filters and instant sharing!"
                  </p>
                  <p className="text-sm font-semibold text-gray-900">- James & Emily, Wedding Couple</p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg">
                  <div className="text-4xl mb-4">🎉</div>
                  <p className="text-gray-700 mb-4 italic">
                    "As an event planner, I recommend İdeal Photo to all my clients. It's easy, professional, and always a hit!"
                  </p>
                  <p className="text-sm font-semibold text-gray-900">- Maria, Event Planner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
        <CTASection />

        <HomepageSEOSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
