import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | İdeal Photo - Your Privacy and Data Protection"
        description="Learn how İdeal Photo protects your privacy and handles your personal information. Read our comprehensive privacy policy for complete transparency and trust."
        canonicalPath="/privacy-policy"
        keywords="privacy policy, data protection, user privacy, personal information, data security, privacy rights"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                <p className="text-xl opacity-90">Last updated: January 29, 2025</p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Our Privacy Commitment</h2>
                  <p className="text-gray-700 mb-6">
                    At İdeal Photo, we are deeply committed to protecting your privacy and being completely transparent about how we collect, use, and safeguard your information. This Privacy Policy explains our practices regarding your personal information when you use our virtual photo booth services. We believe privacy is a fundamental right, and we design our services with privacy in mind.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Information We Collect</h2>
                  <h3 className="text-xl font-medium mb-4 text-gray-800">Information You Provide Directly</h3>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Contact information when you reach out to us (name, email address, message content)</li>
                    <li>Account information if you choose to create an account (username, email, preferences)</li>
                    <li>Feedback, reviews, and communications you send to us</li>
                    <li>Survey responses and contest entries (when applicable)</li>
                    <li>Customer support inquiries and correspondence</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-4 text-gray-800">Information We Collect Automatically</h3>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Device information (browser type, operating system, device identifiers, screen resolution)</li>
                    <li>Usage information (pages visited, time spent, features used, click patterns)</li>
                    <li>IP address and general geographic location information</li>
                    <li>Cookies and similar tracking technologies data</li>
                    <li>Referral sources and search terms used to find our service</li>
                  </ul>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Photo Processing and Storage Policy</h2>
                  <p className="text-gray-700 mb-6">
                    Your privacy is paramount when it comes to your personal photos. Our photo booth application processes all photos locally on your device using advanced client-side technology. This means:
                  </p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Your photos are processed entirely in your browser and never uploaded to our servers</li>
                    <li>We do not store, analyze, access, or have any visibility into your photos</li>
                    <li>Photos remain securely on your device until you delete them or clear your browser data</li>
                    <li>You have complete control over your photos and can download or share them at your discretion</li>
                    <li>No third parties have access to your photo content through our service</li>
                  </ul>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Advertising and Analytics</h2>
                  <p className="text-gray-700 mb-4">We use Google AdSense to display advertisements on our website:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Google AdSense uses cookies to serve ads based on your visits to our site and other sites on the Internet</li>
                    <li>You may opt out of personalized advertising by visiting Google's Ad Settings</li>
                    <li>We use Google Analytics to understand how visitors use our site</li>
                    <li>These services may collect information about your visits to this and other websites</li>
                    <li>The information collected is used to provide relevant advertisements and improve our services</li>
                  </ul>

                  <p className="text-gray-700 mb-6">
                    For more information about Google's privacy practices, please review Google's Privacy Policy at
                    <a href="https://policies.google.com/privacy" className="text-purple-600 hover:text-purple-700"> https://policies.google.com/privacy</a>.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Provide, maintain, and improve our photo booth services</li>
                    <li>Respond to your inquiries and provide excellent customer support</li>
                    <li>Analyze usage patterns to enhance user experience and service performance</li>
                    <li>Communicate with you about updates, new features, and service announcements</li>
                    <li>Ensure the security and proper functioning of our services</li>
                    <li>Prevent fraud, abuse, and security threats</li>
                    <li>Comply with legal obligations and protect our legal rights</li>
                    <li>Conduct research and development to improve our offerings</li>
                    <li>Display relevant advertisements through advertising partners</li>
                  </ul>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Third-Party Services and Integrations</h2>
                  <p className="text-gray-700 mb-4">We may use carefully selected third-party services:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li><strong>Advertising Partners:</strong> To display relevant advertisements and generate revenue</li>
                    <li><strong>Google Analytics:</strong> To understand user behavior and improve our service</li>
                    <li><strong>Hosting and CDN Services:</strong> To provide reliable and fast service delivery</li>
                    <li><strong>Customer Support Tools:</strong> To provide efficient customer service</li>
                    <li><strong>Security Services:</strong> To protect against fraud and security threats</li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    These services have their own privacy policies and may collect information independently. We carefully vet all third-party services and ensure they meet our privacy standards.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 mb-4">We use cookies and similar technologies for:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Essential website functionality and user authentication</li>
                    <li>Remembering your preferences and settings</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Security and fraud prevention</li>
                    <li>Advertising personalization settings</li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    You can manage cookies through your browser settings. Please note that disabling certain cookies may affect website functionality and advertising relevance. For more detailed information, please see our Cookie Policy.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Data Security and Protection</h2>
                  <p className="text-gray-700 mb-6">
                    We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include encryption, secure servers, regular security audits, and staff training on data protection. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Your Rights and Choices</h2>
                  <p className="text-gray-700 mb-4">Depending on your location and applicable laws, you may have the following rights:</p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                    <li>Access to your personal information and data portability</li>
                    <li>Correction of inaccurate or incomplete information</li>
                    <li>Deletion of your personal information (right to be forgotten)</li>
                    <li>Objection to processing of your information</li>
                    <li>Restriction of processing under certain circumstances</li>
                    <li>Withdrawal of consent where processing is based on consent</li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    To exercise these rights, please contact us using the information provided below. We will respond to your request within the timeframe required by applicable law.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Children's Privacy Protection</h2>
                  <p className="text-gray-700 mb-6">
                    Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately. We will take steps to remove such information and terminate the child's account if applicable.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">International Data Transfers</h2>
                  <p className="text-gray-700 mb-6">
                    Your information may be transferred to and processed in countries other than your own, including Turkey where our company is based. We ensure that appropriate safeguards are in place to protect your information in accordance with applicable laws, including standard contractual clauses and adequacy decisions where applicable.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Data Retention</h2>
                  <p className="text-gray-700 mb-6">
                    We retain your personal information only for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Changes to This Privacy Policy</h2>
                  <p className="text-gray-700 mb-6">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. For significant changes, we may provide additional notice through email or service notifications.
                  </p>

                  <div className="my-8 border-t border-gray-200"></div>

                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Us About Privacy</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy, our privacy practices, or wish to exercise your privacy rights, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2"><strong>Email:</strong> vlkneles1@gmail.com</p>
                    <p className="text-gray-700 mb-2"><strong>Website:</strong> https://idealphotovercel.com</p>
                    <p className="text-gray-700"><strong>Business Address:</strong> Turkey</p>
                  </div>

                  <p className="text-gray-700 mt-4">
                    We are committed to addressing your privacy concerns promptly and transparently.
                  </p>
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

export default PrivacyPolicy;
