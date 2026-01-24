
import React from 'react';
import PricingCard from './PricingCard';

// Simplified version without animations until dependencies are loaded
const PricingSection = () => {
  const freePlanFeatures = [
    { included: true, text: '5 photo sessions per day' },
    { included: true, text: 'Access to 10+ idols' },
    { included: true, text: 'Basic layouts' },
    { included: true, text: '1 download per day' },
    { included: false, text: 'Watermark-free downloads' }
  ];

  const premiumPlanFeatures = [
    { included: true, text: 'Unlimited photo sessions' },
    { included: true, text: 'Access to all idols' },
    { included: true, text: 'All premium layouts' },
    { included: true, text: 'Unlimited downloads' },
    { included: true, text: 'Watermark-free downloads' }
  ];

  const pwywPlanFeatures = [
    { included: true, text: 'All premium features' },
    { included: true, text: 'Priority support' },
    { included: true, text: 'Early access to new features' },
    { included: true, text: 'Community recognition' },
    { included: true, text: 'Help support development' },
    { included: true, text: 'Choose your own price' }
  ];

  // Payment links disabled until features are complete
  const lemonSqueezyIds = {
    free: {
      checkoutUrl: ''
    },
    premium: {
      checkoutUrl: ''
    },
    pwyw: {
      checkoutUrl: ''
    }
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">
            Currently Free to Use
          </h2>
          <p className="text-lg text-gray-600">All features are currently free. Pricing plans coming soon.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <PricingCard 
              title="Free"
              description="Perfect for casual fans"
              price="$0"
              features={freePlanFeatures}
              buttonText="Get Started"
              buttonVariant="outline"
              paymentEnabled={false}
              directCheckoutUrl={lemonSqueezyIds.free.checkoutUrl}
            />
          </div>
          
          <div>
            <PricingCard 
              title="Premium"
              description="For dedicated fans"
              price="$1"
              period="/year"
              features={premiumPlanFeatures}
              buttonText="Get Premium"
              buttonVariant="default"
              buttonClassName="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
              highlight={true}
              paymentEnabled={false}
              directCheckoutUrl={lemonSqueezyIds.premium.checkoutUrl}
            />
          </div>
          
          <div>
            <PricingCard 
              title="Pay What You Want"
              description="Support our project"
              price="$5"
              period="/month"
              features={pwywPlanFeatures}
              buttonText="Coming Soon"
              buttonVariant="outline"
              paymentEnabled={false}
              isPWYW={true}
              directCheckoutUrl={lemonSqueezyIds.pwyw.checkoutUrl}
            />
          </div>
        </div>
        
        <div className="mt-16 text-center text-sm text-gray-500 max-w-3xl mx-auto">
          <p>All features are currently free while we develop the platform. Pricing plans will be introduced in the future for premium features.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
