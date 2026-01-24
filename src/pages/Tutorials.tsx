import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Play, BookOpen, Video, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const tutorialsStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Tutorials - İdeal Photo",
  "description": "Step-by-step tutorials and video guides for creating perfect virtual photo booth images with İdeal Photo.",
  "url": "https://idealphotovercel.com/tutorials"
};

const Tutorials = () => {
  const tutorials = [
    {
      category: "Getting Started",
      icon: BookOpen,
      items: [
        {
          title: "Your First Photo Booth Image",
          description: "Complete beginner's guide to creating your first virtual photo booth image in under 5 minutes.",
          duration: "5 min read",
          difficulty: "Beginner"
        },
        {
          title: "Understanding the Interface",
          description: "Learn about all the tools, controls, and features available in İdeal Photo's interface.",
          duration: "8 min read",
          difficulty: "Beginner"
        },
        {
          title: "Camera Setup and Positioning",
          description: "Best practices for camera setup, lighting, and positioning for perfect photo booth shots.",
          duration: "6 min read",
          difficulty: "Beginner"
        }
      ]
    },
    {
      category: "K-pop Photo Booths",
      icon: Play,
      items: [
        {
          title: "Creating K-pop Fan Photos",
          description: "How to create stunning photo booth images with your favorite K-pop idols and custom backgrounds.",
          duration: "10 min read",
          difficulty: "Intermediate"
        },
        {
          title: "Matching Idol Concepts and Eras",
          description: "Tips for matching your outfit, styling, and poses to specific K-pop concepts and eras.",
          duration: "12 min read",
          difficulty: "Intermediate"
        },
        {
          title: "Advanced K-pop Photo Composition",
          description: "Professional techniques for creating magazine-quality K-pop fan photos with perfect composition.",
          duration: "15 min read",
          difficulty: "Advanced"
        }
      ]
    },
    {
      category: "Photo Strips",
      icon: Video,
      items: [
        {
          title: "Classic Photo Strip Creation",
          description: "Step-by-step guide to creating traditional 4-frame photo booth strips with perfect timing.",
          duration: "7 min read",
          difficulty: "Beginner"
        },
        {
          title: "Custom Strip Layouts",
          description: "Learn how to customize photo strip layouts, borders, and spacing for unique results.",
          duration: "9 min read",
          difficulty: "Intermediate"
        },
        {
          title: "Photo Strip Design Principles",
          description: "Professional design principles for creating visually appealing and balanced photo strips.",
          duration: "13 min read",
          difficulty: "Advanced"
        }
      ]
    },
    {
      category: "Editing & Effects",
      icon: FileText,
      items: [
        {
          title: "Using Filters and Effects",
          description: "Complete guide to all available filters, when to use them, and how to combine multiple effects.",
          duration: "11 min read",
          difficulty: "Beginner"
        },
        {
          title: "Text and Sticker Customization",
          description: "Master text overlays, sticker placement, and layering for professional-looking results.",
          duration: "8 min read",
          difficulty: "Intermediate"
        },
        {
          title: "Color Grading and Advanced Editing",
          description: "Advanced techniques for color correction, grading, and achieving specific aesthetic looks.",
          duration: "16 min read",
          difficulty: "Advanced"
        }
      ]
    }
  ];

  const quickTips = [
    {
      title: "Perfect Lighting",
      tip: "Use natural light from windows or soft artificial lighting. Avoid harsh overhead lights that create shadows."
    },
    {
      title: "Camera Position",
      tip: "Place your camera at eye level or slightly above for the most flattering angles in photo booth shots."
    },
    {
      title: "Pose Variety",
      tip: "For multi-frame strips, plan 3-4 different poses before starting to ensure variety and natural progression."
    },
    {
      title: "Filter Selection",
      tip: "Choose filters that match your outfit and background. Vintage filters work great with retro themes."
    },
    {
      title: "Text Readability",
      tip: "Use contrasting colors for text overlays and avoid placing text over busy background areas."
    },
    {
      title: "Download Quality",
      tip: "Always download in the highest quality available for both digital sharing and potential printing."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Photo Booth Tutorials | İdeal Photo - Step-by-Step Guides"
        description="Learn how to create perfect virtual photo booth images with our comprehensive tutorials. Step-by-step guides for K-pop photos, photo strips, filters, and more."
        canonicalPath="/tutorials"
        keywords="photo booth tutorial, how to use virtual photo booth, kpop photo guide, photo strip tutorial, photo editing guide"
        structuredData={tutorialsStructuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Photo Booth Tutorials
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                  Master virtual photo booth creation with our comprehensive step-by-step guides
                </p>
              </div>
            </div>
          </section>

          {/* Tutorials Grid */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                {tutorials.map((category, categoryIndex) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={categoryIndex} className="mb-16">
                      <div className="flex items-center space-x-3 mb-8">
                        <div className="p-3 bg-purple-100 rounded-lg">
                          <IconComponent className="h-6 w-6 text-purple-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        {category.items.map((tutorial, tutorialIndex) => (
                          <Card key={tutorialIndex} className="hover:shadow-lg transition-shadow cursor-pointer group">
                            <CardHeader>
                              <div className="flex items-center justify-between mb-2">
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                  tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                                  tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-red-100 text-red-700'
                                }`}>
                                  {tutorial.difficulty}
                                </span>
                                <span className="text-xs text-gray-500">{tutorial.duration}</span>
                              </div>
                              <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                                {tutorial.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {tutorial.description}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Quick Tips Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Tips & Tricks</h2>
                  <p className="text-xl text-gray-600">Expert advice for better photo booth results</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {quickTips.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm mr-3">
                          {index + 1}
                        </span>
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Creating?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Put these tutorials into practice and create your first photo booth masterpiece
                </p>
                <a
                  href="/kpop-photobooth"
                  className="inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Open Photo Booth
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

export default Tutorials;