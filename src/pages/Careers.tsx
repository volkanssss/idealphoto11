import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Briefcase, Users, Heart, Zap, Globe, Code } from 'lucide-react';

const Careers = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "User-Centric Innovation",
      description: "We build features that users love, always putting their needs first"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion for Quality",
      description: "We take pride in delivering excellent user experiences"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast-Paced Growth",
      description: "We move quickly, iterate constantly, and learn from every experience"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Mindset",
      description: "We serve users worldwide and celebrate diverse perspectives"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Technical Excellence",
      description: "We use modern technologies and best practices to build reliable systems"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Careers at İdeal Photo | Join Our Team" 
        description="Join İdeal Photo and help build the future of virtual photo booth experiences. We're looking for passionate individuals who love creating amazing user experiences." 
        canonicalPath="/careers"
        keywords="careers, jobs, employment, work at ideal photo, photo booth jobs, tech careers, remote work"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Briefcase className="h-16 w-16" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
                <p className="text-xl opacity-90 mb-8">
                  Help us build the future of virtual photo booth experiences and bring joy to millions of users worldwide
                </p>
              </div>
            </div>
          </section>

          {/* About Working Here */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Why İdeal Photo?</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 text-lg leading-relaxed">
                  At İdeal Photo, we're on a mission to democratize creative photo experiences. Every day, thousands of users around the world use our platform to create memories with friends, family, and their favorite K-pop idols. We're a small but passionate team that believes in the power of technology to bring people closer together and enable creative expression.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We're looking for talented individuals who share our passion for user experience, technical excellence, and creative innovation. Whether you're a developer, designer, marketer, or content creator, if you're excited about building products that millions love, we'd love to hear from you.
                </p>
              </div>

              {/* Company Values */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">Our Values</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-purple-600 mb-4">
                        {value.icon}
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Opportunities */}
              <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
                <h3 className="text-2xl font-bold mb-6">Current Opportunities</h3>
                <p className="text-gray-700 mb-6">
                  We're always looking for talented people to join our team. While we don't have specific openings posted at the moment, we're interested in hearing from exceptional candidates in the following areas:
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
                    <p className="text-gray-700 mb-2">
                      React, TypeScript, Tailwind CSS experts who can build beautiful, performant user interfaces
                    </p>
                    <p className="text-sm text-gray-600">Skills: React, TypeScript, CSS, Performance Optimization, Responsive Design</p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
                    <p className="text-gray-700 mb-2">
                      Creative designers who understand user behavior and can create intuitive, delightful experiences
                    </p>
                    <p className="text-sm text-gray-600">Skills: Figma, User Research, Prototyping, Visual Design, Interaction Design</p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="text-xl font-semibold mb-2">Content Creation & Marketing</h4>
                    <p className="text-gray-700 mb-2">
                      Writers and marketers who can create engaging content and grow our user base organically
                    </p>
                    <p className="text-sm text-gray-600">Skills: Content Writing, SEO, Social Media, Community Management, Analytics</p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="text-xl font-semibold mb-2">Product Management</h4>
                    <p className="text-gray-700 mb-2">
                      Strategic thinkers who can identify opportunities and guide product development
                    </p>
                    <p className="text-sm text-gray-600">Skills: Product Strategy, User Research, Data Analysis, Roadmap Planning, Stakeholder Management</p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="text-xl font-semibold mb-2">Computer Vision & AI</h4>
                    <p className="text-gray-700 mb-2">
                      Engineers with experience in image processing, background removal, and AI-powered photo enhancement
                    </p>
                    <p className="text-sm text-gray-600">Skills: Python, TensorFlow/PyTorch, OpenCV, Machine Learning, Image Processing</p>
                  </div>
                </div>
              </div>

              {/* What We Offer */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">What We Offer</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">🌍 Remote-First Culture</h4>
                    <p className="text-gray-700">Work from anywhere in the world with flexible hours that match your lifestyle</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">📈 Growth Opportunities</h4>
                    <p className="text-gray-700">Learn new skills, take on challenges, and grow your career with us</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">🎯 Impactful Work</h4>
                    <p className="text-gray-700">Build features that millions of users interact with and love</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">🤝 Collaborative Environment</h4>
                    <p className="text-gray-700">Work with a small, talented team that values everyone's input</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">⚡ Modern Tech Stack</h4>
                    <p className="text-gray-700">Use cutting-edge technologies and tools to build great products</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">🎨 Creative Freedom</h4>
                    <p className="text-gray-700">Bring your ideas to life and shape the product direction</p>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
                <h3 className="text-2xl font-bold mb-6">Our Hiring Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                    <div>
                      <h4 className="font-semibold mb-1">Application Review</h4>
                      <p className="text-gray-700">We carefully review every application and portfolio to understand your experience and interests</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                    <div>
                      <h4 className="font-semibold mb-1">Initial Conversation</h4>
                      <p className="text-gray-700">A casual video call to get to know each other and discuss potential fit</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                    <div>
                      <h4 className="font-semibold mb-1">Skills Assessment</h4>
                      <p className="text-gray-700">A practical assignment or technical interview relevant to the role</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                    <div>
                      <h4 className="font-semibold mb-1">Team Interview</h4>
                      <p className="text-gray-700">Meet the team you'll be working with and discuss collaboration</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">5</div>
                    <div>
                      <h4 className="font-semibold mb-1">Offer & Onboarding</h4>
                      <p className="text-gray-700">If it's a match, we'll extend an offer and help you get started smoothly</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply Section */}
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Join Us?</h3>
                <p className="text-lg mb-6 opacity-90">
                  We'd love to hear from you! Send us your resume, portfolio, and a note about why you're interested in İdeal Photo.
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-block">
                  <p className="text-sm mb-2">Send your application to:</p>
                  <a href="mailto:careers@idealphotovercel.com" className="text-xl font-semibold hover:underline">
                    careers@idealphotovercel.com
                  </a>
                </div>
                <p className="text-sm mt-4 opacity-80">
                  Include "Application - [Your Role]" in the subject line
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Careers;
