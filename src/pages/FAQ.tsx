
import React, { useState } from 'react';
import SEOHead from '@/components/landing/SEOHead';
import FAQSchema from '@/components/landing/FAQSchema';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is İdeal Photo?",
      answer: "İdeal Photo is a free virtual photo booth platform that allows you to create professional-quality photos with your favorite K-pop idols, vintage aesthetics, wedding themes, and more. All processing happens locally in your browser using advanced HTML5 technology, ensuring your privacy while delivering high-quality results in seconds."
    },
    {
      question: "Is İdeal Photo really free to use?",
      answer: "Yes! İdeal Photo is completely free to use with no hidden costs, subscriptions, or premium tiers. We believe every K-pop fan and creative enthusiast should have access to create beautiful photo memories with their favorite artists without any cost barriers. All features including filters, frames, idols, and customization tools are available to everyone at no charge."
    },
    {
      question: "How does the photo processing work?",
      answer: "All photo processing happens directly in your browser on your device using modern web technologies like HTML5 Canvas and WebGL. We don't upload your photos to any servers, which means your images remain completely private and secure on your device. This local processing approach also ensures faster results - typically under 2 seconds - regardless of your internet speed."
    },
    {
      question: "What K-pop idols and groups are available?",
      answer: "We currently feature members from popular groups including ENHYPEN (Heeseung, Jay, Jake, Sunghoon, Sunoo, Jungwon, Ni-ki), aespa (Karina, Giselle, Winter, Ningning), LE SSERAFIM (Kim Chaewon, Sakura, Huh Yunjin, Kazuha, Hong Eunchae), and BOYNEXTDOOR (Sungho, Riwoo, Jaehyun, Taesan, Leehan, Woonhak). We're continuously working to expand our collection with more idols and groups based on user requests and licensing agreements."
    },
    {
      question: "Can I use my own photos?",
      answer: "Absolutely! You can upload your own photos from your device or take new photos using your device's camera. Combine them with our K-pop idol images, decorative frames, themed backgrounds, stickers, and text overlays to create unique photo compositions and photo strips. We support JPEG and PNG formats with automatic optimization for best results."
    },
    {
      question: "What devices and browsers are supported?",
      answer: "İdeal Photo works on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. It's fully compatible with desktop computers, laptops, tablets, and smartphones running iOS, Android, Windows, or macOS. For the best experience with camera features, we recommend using a device with a front-facing or rear camera. The app automatically adapts its interface for optimal viewing on your screen size."
    },
    {
      question: "How do I save and download my photos?",
      answer: "Once you create your photo, simply click the download button to save it directly to your device. Your photos are downloaded in high-quality PNG or JPEG format, perfect for sharing on social media platforms like Instagram, Twitter, and TikTok, or for professional printing. You can download the same photo multiple times, and there are no limits on the number of downloads."
    },
    {
      question: "Can I create photo strips like traditional photo booths?",
      answer: "Absolutely! İdeal Photo specializes in creating classic photo booth strips with multiple frames, just like traditional photo booths you'd find at events or malls. You can customize the layout (2-frame, 4-frame, or 6-frame strips), add different poses in each frame, choose frame colors and borders, add custom text, and create professional-looking photo strips. You can even add countdown timers between shots for authentic photo booth timing."
    },
    {
      question: "Are there any restrictions on usage rights?",
      answer: "İdeal Photo is free for personal, non-commercial use. You can create photos for yourself, share with friends and family, post on social media, and print for personal enjoyment. Please respect copyright and trademark laws when using images of K-pop idols - these are meant for fan appreciation and personal use. For commercial usage, event licensing, or business purposes, please contact us at vlkneles1@gmail.com to discuss appropriate licensing arrangements."
    },
    {
      question: "How can I request new features, idols, or improvements?",
      answer: "We love hearing from our users and value your input! You can contact us through our contact page, email us directly at vlkneles1@gmail.com, or share your suggestions through our social media channels. Popular requests often make it into our development roadmap. We regularly update the platform with new idols, filters, frames, and features based on community feedback."
    },
    {
      question: "Is my data and privacy secure?",
      answer: "Yes, your privacy is our absolute top priority. Since all photo processing happens locally on your device using browser technology, we never see, access, or store your photos on our servers. Your images never leave your device unless you explicitly choose to share them. We also have comprehensive privacy and cookie policies that explain transparently how we handle any data. We don't sell user data, we don't track your photos, and we don't require account creation or personal information to use the service."
    },
    {
      question: "Can I use İdeal Photo offline?",
      answer: "While you need an internet connection to initially load the app, download idol images, and access frames and filters, once these resources are cached in your browser, the core photo processing functionality works entirely locally and doesn't require continuous internet connectivity. However, for the best experience and access to the latest features and content, we recommend using İdeal Photo with an active internet connection."
    },
    {
      question: "What photo editing features are available?",
      answer: "İdeal Photo offers comprehensive editing features including professional filters (vintage, black & white, sepia, vibrant, soft), customizable frames and borders, text overlays with multiple fonts and colors, sticker library, background color customization, brightness and contrast adjustments, and layout customization for photo strips. All features are accessible through an intuitive interface designed for both beginners and advanced users."
    },
    {
      question: "Can I use İdeal Photo for events like weddings or parties?",
      answer: "Yes! İdeal Photo is perfect for events, parties, weddings, birthday celebrations, and corporate gatherings. We offer specialized themes including wedding photo booth styles, vintage party aesthetics, and customizable event branding options. You can set up a tablet or laptop at your event as a DIY photo booth station. For larger events or commercial usage, please contact us for event licensing and premium features."
    },
    {
      question: "How do I share my photos on social media?",
      answer: "After creating and downloading your photo, you can share it on any social media platform. Our photos are optimized for Instagram (both feed and stories), Twitter, Facebook, TikTok, and other platforms. Simply download the photo and upload it through the social media app of your choice. The image dimensions and quality are optimized for both mobile and desktop viewing."
    },
    {
      question: "What makes İdeal Photo different from other photo apps?",
      answer: "İdeal Photo stands out through our commitment to privacy (local processing, no server uploads), specialized K-pop content (officially styled idol images and themes), completely free access (no subscriptions or paywalls), authentic photo booth experience (classic strip layouts and countdown timers), and professional quality results (high-resolution output suitable for printing). We focus specifically on creating the virtual photo booth experience rather than being a general photo editor."
    },
    {
      question: "Do I need to create an account to use İdeal Photo?",
      answer: "No! You don't need to create an account, register, or provide any personal information to use İdeal Photo. Simply visit the website and start creating. This no-registration approach ensures maximum privacy and removes barriers to getting started. All features are immediately available without any login requirements."
    },
    {
      question: "Can I print the photos I create?",
      answer: "Yes! Photos created with İdeal Photo are high-resolution and suitable for printing. You can print them at home using a standard photo printer, or upload them to professional printing services like Shutterfly, Snapfish, or local print shops. Photo strips work especially well as physical keepsakes. We recommend printing on photo paper for best results."
    },
    {
      question: "What if I encounter technical issues or bugs?",
      answer: "If you experience any technical issues, please try these steps first: refresh your browser, clear your browser cache, try a different browser, or restart your device. If problems persist, please contact our support team at vlkneles1@gmail.com with details about the issue, your device type, browser version, and what you were trying to do. We respond to support requests within 24-48 hours and work quickly to resolve technical issues."
    },
    {
      question: "Will you add more K-pop groups and idols in the future?",
      answer: "Absolutely! We're constantly working to expand our K-pop idol collection based on user requests and licensing arrangements. Our goal is to include popular groups from all major K-pop agencies. If there's a specific idol or group you'd like to see, please let us know through our contact form. Popular requests help us prioritize which idols to add next."
    },
    {
      question: "Can multiple people use İdeal Photo on the same device?",
      answer: "Yes! Multiple people can use İdeal Photo on the same device without any conflicts. Since we don't require accounts and all processing is local, each person can create their own photos independently. This makes it perfect for events where you want to set up a shared photo booth station for guests to use throughout the event."
    },
    {
      question: "Are there any file size or photo resolution limits?",
      answer: "İdeal Photo can handle most standard photo sizes and resolutions. For best performance, we recommend uploading photos under 10MB and with resolutions up to 4K (3840x2160). Very large files may take longer to process depending on your device's capabilities. The output photos are optimized for both digital sharing and printing, with typical file sizes between 1-5MB."
    },
    {
      question: "How often do you add new features and content?",
      answer: "We continuously update İdeal Photo with new features, filters, frames, and idol content. Major updates typically roll out monthly, with smaller improvements and bug fixes happening weekly. We announce significant updates through our blog and social media channels. All updates are free and automatically available to all users - no app updates or downloads required since it's a web-based platform."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <>
      <SEOHead 
        title="FAQ | Ideal Photo - Frequently Asked Questions"
        description="Find answers to common questions about Ideal Photo virtual photo booth. Learn about features, privacy, supported devices, and how to create perfect K-pop photos."
        canonicalPath="/faq"
        keywords="ideal photo faq, photo booth questions, kpop photo help, virtual photo booth support, how to use ideal photo"
        ogType="website"
      />
      <FAQSchema faqs={faqData} />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl md:text-2xl opacity-90">
                  Find answers to common questions about İdeal Photo
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleItem(index)}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {item.question}
                      </h3>
                      {openItem === index ? (
                        <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openItem === index && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Still have questions?
                </h2>
                <p className="text-gray-600 mb-6">
                  Can't find the answer you're looking for? We're here to help!
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
