import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const CookiePolicy = () => {
  return (
    <>
      <SEOHead 
        title="Cookie Policy | İdeal Photo - How We Use Cookies" 
        description="Learn about how İdeal Photo uses cookies and similar tracking technologies to enhance your browsing experience and provide personalized content." 
        canonicalPath="/cookie-policy"
        keywords="cookie policy, cookies, tracking, data collection, web analytics, user experience, privacy"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
                <p className="text-xl opacity-90">Last updated: January 29, 2025</p>
              </div>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">What Are Cookies?</h2>
                  <p className="text-gray-700 mb-6">
                    Cookies are small text files that are stored on your device when you visit websites. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites. İdeal Photo uses cookies and similar technologies to enhance your experience and provide our services effectively.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Types of Cookies We Use</h2>
                  
                  <h3 className="text-xl font-medium mb-4 text-gray-800">Essential Cookies</h3>
                  <p className="text-gray-700 mb-4">These cookies are necessary for our website to function properly and cannot be disabled:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Session management and user authentication</li>
                    <li>Security and fraud prevention</li>
                    <li>Core website functionality and navigation</li>
                    <li>Load balancing and performance optimization</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-4 text-gray-800">Analytics Cookies</h3>
                  <p className="text-gray-700 mb-4">We use Google Analytics to understand how visitors use our site:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Page views and user navigation patterns</li>
                    <li>Time spent on different pages and sections</li>
                    <li>Device information and browser statistics</li>
                    <li>Geographic location (country/city level)</li>
                    <li>Traffic sources and referral information</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-4 text-gray-800">Advertising Cookies</h3>
                  <p className="text-gray-700 mb-4">Through Google AdSense, we use advertising cookies to:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Display relevant advertisements based on your interests</li>
                    <li>Measure ad performance and effectiveness</li>
                    <li>Prevent repeated display of the same advertisements</li>
                    <li>Provide aggregate reporting to advertisers</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-4 text-gray-800">Functional Cookies</h3>
                  <p className="text-gray-700 mb-4">These cookies enhance your experience by remembering your preferences:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Language and region preferences</li>
                    <li>Theme and display settings</li>
                    <li>Photo booth customization preferences</li>
                    <li>Recently used features and settings</li>
                  </ul>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Third-Party Cookies</h2>
                  <p className="text-gray-700 mb-4">We work with trusted third-party services that may set their own cookies:</p>
                  
                  <h3 className="text-xl font-medium mb-4 text-gray-800">Google Services</h3>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li><strong>Google Analytics:</strong> Website usage analytics and reporting</li>
                    <li><strong>Google AdSense:</strong> Advertising services and personalization</li>
                    <li><strong>Google Fonts:</strong> Web font delivery and optimization</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-4 text-gray-800">Social Media Platforms</h3>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Social sharing buttons and embedded content</li>
                    <li>Social media login and authentication</li>
                    <li>Social media analytics and insights</li>
                  </ul>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Cookie Duration</h2>
                  <p className="text-gray-700 mb-4">Cookies are stored for different periods depending on their purpose:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Remain for a set period (from days to years)</li>
                    <li><strong>Analytics Cookies:</strong> Typically expire after 2 years</li>
                    <li><strong>Advertising Cookies:</strong> May persist for up to 2 years</li>
                  </ul>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Managing Your Cookie Preferences</h2>
                  
                  <h3 className="text-xl font-medium mb-4 text-gray-800">Browser Settings</h3>
                  <p className="text-gray-700 mb-4">You can control cookies through your browser settings:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Block all cookies (may affect website functionality)</li>
                    <li>Block third-party cookies only</li>
                    <li>Delete existing cookies from your device</li>
                    <li>Receive notifications when cookies are being set</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-4 text-gray-800">Opt-Out Options</h3>
                  <p className="text-gray-700 mb-4">For specific services, you can opt out directly:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li><strong>Google Analytics:</strong> Use the Google Analytics Opt-out Browser Add-on</li>
                    <li><strong>Google Ads:</strong> Visit Google's Ad Settings to control personalized advertising</li>
                    <li><strong>General Advertising:</strong> Visit the Digital Advertising Alliance opt-out page</li>
                  </ul>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Impact of Disabling Cookies</h2>
                  <p className="text-gray-700 mb-6">
                    While you can disable cookies, please note that this may affect your experience on our website. Some features may not work properly, and you may need to re-enter information or preferences each time you visit. Essential cookies are necessary for basic website functionality and security.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Local Storage and Similar Technologies</h2>
                  <p className="text-gray-700 mb-6">
                    In addition to cookies, we may use other technologies like local storage, session storage, and web beacons to enhance functionality and analyze usage. These technologies serve similar purposes to cookies and are subject to the same controls and privacy protections outlined in this policy.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Updates to This Cookie Policy</h2>
                  <p className="text-gray-700 mb-6">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Us About Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    If you have questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@idealphotovercel.com</p>
                    <p className="text-gray-700 mb-2"><strong>General Email:</strong> vlkneles1@gmail.com</p>
                    <p className="text-gray-700 mb-2"><strong>Website:</strong> https://idealphotovercel.com</p>
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

export default CookiePolicy;