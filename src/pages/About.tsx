
import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Camera, Users, Heart, Zap } from 'lucide-react';

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "İdeal Photo",
  "url": "https://idealphotovercel.com",
  "description": "Leading virtual photo booth platform providing high-quality photo experiences for events, businesses, and personal use.",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "vlkneles1@gmail.com",
    "contactType": "Customer Service"
  }
};

const About = () => {
  return (
    <>
      <SEOHead 
        title="About İdeal Photo - Leading Virtual Photo Booth Platform" 
        description="Learn about İdeal Photo's mission to provide the best virtual photo booth experience. Discover our story, values, and commitment to creating memorable moments through innovative technology." 
        canonicalPath="/about"
        keywords="about ideal photo, virtual photo booth company, photo booth platform, digital photo solutions, innovative photo technology"
        structuredData={aboutStructuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  About İdeal Photo
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                  Creating unforgettable memories through innovative virtual photo booth technology
                </p>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning: 2024</h3>
                  <p className="text-xl leading-relaxed mb-8">
                    İdeal Photo was born in 2024 from a simple yet powerful idea: everyone deserves to capture and share their special moments in a fun, creative, and accessible way. As passionate K-pop fans ourselves, we recognized that traditional photo booths, while beloved, had significant limitations in terms of accessibility, customization, and sharing capabilities. More importantly, fans around the world wanted to create memories with their favorite idols but lacked accessible tools to do so.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Building Something Revolutionary</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Our diverse team of passionate developers, designers, and photo enthusiasts came together with a shared vision: to create something revolutionary - a virtual photo booth platform that combines the joy and nostalgia of traditional photo booths with modern technology's endless possibilities. We spent countless hours researching user needs, testing different technologies, and refining our approach to photo processing.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    What sets İdeal Photo apart is our commitment to privacy and performance. Instead of following the common practice of uploading photos to remote servers, we developed advanced browser-based technology that processes everything locally on your device. This means faster results, complete privacy, and no dependency on server availability or internet speed.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Growth & Impact</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Today, İdeal Photo is rapidly growing as the leading platform for K-pop fans creating memorable moments, wedding celebrations, event photography, and creative photo experiences. We've served thousands of users across six continents, helping them create millions of personalized photo booth images. Our platform supports multiple specialized themes including K-pop idol integration, vintage aesthetics, elegant wedding styles, and modern digital art.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    We're continuously improving based on direct user feedback and community suggestions. Every feature we add, every idol we include, and every filter we create comes from listening to our amazing community of users who share their creative visions with us daily.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking Forward</h3>
                  <p className="text-lg leading-relaxed">
                    Our mission continues to evolve, but our core values remain the same: accessibility, creativity, privacy, and community. We're working on exciting new features including AI-powered enhancements, expanded idol libraries, collaborative photo sessions, and professional printing partnerships. We believe the future of photo memories is digital-first, privacy-focused, and creatively unlimited.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    These core values guide everything we do at İdeal Photo
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-purple-100 rounded-full mb-6">
                      <Camera className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                    <p className="text-gray-600">
                      We continuously push the boundaries of what's possible in virtual photo experiences, always staying ahead of technology trends.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-pink-100 rounded-full mb-6">
                      <Users className="h-8 w-8 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
                    <p className="text-gray-600">
                      We believe in building strong communities where people can share their creativity and connect through shared experiences.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-purple-100 rounded-full mb-6">
                      <Heart className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Passion</h3>
                    <p className="text-gray-600">
                      Every feature we build is crafted with love and attention to detail, ensuring the best possible user experience.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-pink-100 rounded-full mb-6">
                      <Zap className="h-8 w-8 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
                    <p className="text-gray-600">
                      We strive for excellence in everything we do, from code quality to customer support and user experience design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Mission */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  To democratize creative photo experiences by providing accessible, innovative, and fun virtual photo booth solutions that help people capture and share their most precious moments.
                </p>
                <p className="text-lg text-gray-600">
                  We envision a world where anyone, anywhere, can create professional-quality, personalized photo memories without barriers or limitations.
                </p>
              </div>
            </div>
          </section>

          {/* Team & Technology Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Team & Technology</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our team combines expertise in web development, image processing, UX design, and K-pop culture. We have specialists in React/TypeScript development, canvas-based image manipulation, computer vision, and user experience optimization.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Every team member is passionate about both technology and creating memorable experiences. We don't just build software - we craft experiences that bring joy to millions of users worldwide.
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      İdeal Photo is built on cutting-edge web technologies including React, TypeScript, HTML5 Canvas API, WebGL, and modern browser APIs. We utilize advanced image processing algorithms, real-time filters, and optimized rendering techniques to deliver professional results instantly.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our privacy-first architecture processes all images locally using browser technologies, eliminating the need for server uploads while maintaining professional-grade quality and performance.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg shadow-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">Success Metrics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    <div>
                      <div className="text-4xl font-bold mb-2">10,000+</div>
                      <div className="text-purple-100">Active Users</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">500K+</div>
                      <div className="text-purple-100">Photos Created</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">50+</div>
                      <div className="text-purple-100">K-pop Idols</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">100+</div>
                      <div className="text-purple-100">Filters & Frames</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Commitment Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Commitment to You</h2>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg shadow-sm">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    At İdeal Photo, we are deeply committed to providing exceptional service and continuously improving our platform based on direct user feedback. We believe that great products are built through close collaboration with our community, active listening, and rapid iteration based on real user needs.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Whether you're a casual user creating fun memories with friends, a K-pop fan celebrating your favorite idols, a couple planning your wedding photo booth, or a business looking for professional photo solutions, we're here to support your creative journey every step of the way.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We're committed to keeping İdeal Photo free, accessible, and privacy-focused. Your trust is our most valuable asset, and we work every day to earn and maintain it through transparent practices, secure technology, and genuine care for our community.
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

export default About;
