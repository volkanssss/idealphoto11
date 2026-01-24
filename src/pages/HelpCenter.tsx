import React, { useState } from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Search, ChevronRight, Camera, Download, Image, Settings, Users, Zap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const helpStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Help Center - İdeal Photo",
  "description": "Find comprehensive guides, tutorials, and answers to frequently asked questions about İdeal Photo's virtual photo booth platform.",
  "url": "https://idealphotovercel.com/help"
};

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: Camera,
      title: "Getting Started",
      description: "Learn the basics of using our photo booth",
      articles: [
        "How to take your first photo",
        "Understanding photo booth controls",
        "Choosing the right theme",
        "Basic photo editing features"
      ]
    },
    {
      icon: Image,
      title: "Photo Editing",
      description: "Master our editing tools and filters",
      articles: [
        "Applying filters and effects",
        "Using frames and borders",
        "Adding text and stickers",
        "Background customization"
      ]
    },
    {
      icon: Download,
      title: "Downloading & Sharing",
      description: "Save and share your creations",
      articles: [
        "How to download photos",
        "Sharing on social media",
        "Print-ready photo formats",
        "Creating photo strips"
      ]
    },
    {
      icon: Settings,
      title: "Account & Settings",
      description: "Manage your account and preferences",
      articles: [
        "Creating an account",
        "Managing preferences",
        "Privacy settings",
        "Troubleshooting login issues"
      ]
    },
    {
      icon: Users,
      title: "K-pop Features",
      description: "Special features for K-pop fans",
      articles: [
        "Using idol-themed backgrounds",
        "K-pop photo templates",
        "Fan photo creation tips",
        "Accessing exclusive content"
      ]
    },
    {
      icon: Zap,
      title: "Advanced Features",
      description: "Explore pro-level capabilities",
      articles: [
        "Custom layout creation",
        "Advanced filter combinations",
        "Batch photo processing",
        "API integration guide"
      ]
    }
  ];

  const faqItems = [
    {
      question: "Is İdeal Photo completely free to use?",
      answer: "Yes! İdeal Photo is currently free to use while we develop the platform. All basic photo booth features, filters, and frames are available at no cost."
    },
    {
      question: "Do you store my photos on your servers?",
      answer: "No, we don't store your photos. All photo processing happens locally in your browser for complete privacy. Your photos never leave your device unless you choose to share them."
    },
    {
      question: "Can I use İdeal Photo on mobile devices?",
      answer: "Yes! İdeal Photo works on smartphones, tablets, and desktop computers. The interface is designed to be mobile-friendly."
    },
    {
      question: "What photo formats are supported?",
      answer: "We support common image formats including JPEG and PNG. Photos can be downloaded in high-quality formats suitable for sharing or printing."
    },
    {
      question: "How can I get technical support?",
      answer: "You can reach us through the contact form on our website, or email us directly at vlkneles1@gmail.com. We respond to inquiries as quickly as possible."
    }
  ];

  const filteredFAQ = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="Help Center | İdeal Photo - Guides, Tutorials & Support"
        description="Find comprehensive help documentation, step-by-step tutorials, and answers to frequently asked questions about İdeal Photo's virtual photo booth platform."
        canonicalPath="/help"
        keywords="help center, photo booth help, tutorials, FAQ, user guide, technical support, virtual photo booth documentation"
        structuredData={helpStructuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Help Center
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
                  Find answers, learn new features, and get the most out of İdeal Photo
                </p>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search for help articles, tutorials, or FAQ..."
                    className="w-full pl-12 pr-4 py-4 text-lg bg-white text-gray-900 border-0 rounded-lg shadow-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Help Categories */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
                  <p className="text-xl text-gray-600">Find the help you need organized by topic</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                        <CardHeader>
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                              <IconComponent className="h-6 w-6 text-purple-600" />
                            </div>
                            <CardTitle className="text-lg">{category.title}</CardTitle>
                          </div>
                          <p className="text-gray-600 text-sm">{category.description}</p>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {category.articles.map((article, articleIndex) => (
                              <li key={articleIndex} className="flex items-center text-sm text-gray-700 hover:text-purple-600 transition-colors">
                                <ChevronRight className="h-3 w-3 mr-2 text-gray-400" />
                                {article}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                  <p className="text-xl text-gray-600">Quick answers to the most common questions</p>
                </div>

                <div className="space-y-6">
                  {filteredFAQ.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-purple-500">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredFAQ.length === 0 && searchQuery && (
                  <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">No results found for "{searchQuery}"</p>
                    <p className="text-gray-500 mt-2">Try searching with different keywords or browse our categories above.</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Still Need Help */}
          <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Can't find the answer you're looking for? Our friendly support team is here to help.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="inline-flex p-4 bg-purple-100 rounded-full mb-4">
                        <Users className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Support</h3>
                      <p className="text-gray-600 mb-4">Get personalized help from our team</p>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        Send Message
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="inline-flex p-4 bg-pink-100 rounded-full mb-4">
                        <Zap className="h-8 w-8 text-pink-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Feature Request</h3>
                      <p className="text-gray-600 mb-4">Suggest new features or improvements</p>
                      <Button variant="outline" className="w-full border-pink-600 text-pink-600 hover:bg-pink-50">
                        Share Feedback
                      </Button>
                    </CardContent>
                  </Card>
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

export default HelpCenter;