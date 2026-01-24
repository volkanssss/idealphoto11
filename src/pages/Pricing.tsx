
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "İdeal Photo Pricing Plans",
  "description": "Affordable pricing plans for İdeal Photo virtual photo booth services. Choose from Basic, Pro, and Enterprise plans for all your photo booth needs.",
  "url": "https://idealphotovercel.com/pricing"
};

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      period: "Forever",
      description: "Perfect for personal use and small gatherings",
      features: [
        "5 photo strips per month",
        "Basic frames and filters",
        "Standard resolution downloads",
        "Email support",
        "Watermark on photos"
      ],
      icon: Star,
      buttonText: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "Ideal for content creators and small businesses",
      features: [
        "Unlimited photo strips",
        "Premium frames and filters",
        "High-resolution downloads",
        "Remove watermarks",
        "Priority support",
        "Custom backgrounds",
        "Social media integration"
      ],
      icon: Zap,
      buttonText: "Go Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For agencies and large-scale events",
      features: [
        "Everything in Pro",
        "White-label solution",
        "Custom branding",
        "API access",
        "Dedicated account manager",
        "Advanced analytics",
        "Multi-user accounts",
        "24/7 phone support"
      ],
      icon: Crown,
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing Plans - İdeal Photo Virtual Photo Booth | Affordable Photo Booth Services</title>
        <meta name="description" content="Affordable pricing for İdeal Photo virtual photo booth services. Free plan available. Pro plans starting at $19/month. Perfect for events, businesses, and personal use." />
        <meta name="keywords" content="photo booth pricing, virtual photo booth cost, photo booth plans, affordable photo booth, photo booth subscription" />
        <link rel="canonical" href="https://idealphotovercel.com/pricing" />
        <script type="application/ld+json">
          {JSON.stringify(pricingStructuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow py-16 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Free Virtual Photo Booth
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                All features are currently free to use. Create unlimited K-pop photo strips, apply filters, and download your creations at no cost.
              </p>
              <p className="text-lg text-gray-500 mt-4">
                Pricing plans coming soon for premium features
              </p>
            </div>
            
            {/* Pricing Cards - Temporarily Hidden */}
            <div className="text-center mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Currently Free to Use</h2>
                <p className="text-lg text-gray-600 mb-4">
                  All virtual photo booth features are currently available at no cost. Create unlimited K-pop photo strips, apply filters, and download your creations.
                </p>
                <p className="text-gray-500">
                  Premium pricing plans will be introduced in the future for enhanced features.
                </p>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Can I change plans anytime?
                  </h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Is there a free trial?
                  </h3>
                  <p className="text-gray-600">
                    Our Basic plan is free forever! You can also try Pro features with a 14-day free trial when you sign up.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600">
                    We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Do you offer refunds?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer a 30-day money-back guarantee for all paid plans. No questions asked!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
