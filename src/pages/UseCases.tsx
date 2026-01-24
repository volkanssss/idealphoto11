import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Heart, Briefcase, PartyPopper, GraduationCap, Music, Baby, Users, Building2 } from 'lucide-react';

const useCasesStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Use Cases - İdeal Photo Virtual Photo Booth",
  "description": "Discover how to use virtual photo booths for weddings, corporate events, parties, K-pop concerts, and more",
  "url": "https://idealphotovercel.com/use-cases"
};

const UseCases = () => {
  const useCases = [
    {
      icon: Heart,
      title: "Weddings & Engagements",
      description: "Create beautiful memories for your special day",
      benefits: [
        "Custom branded frames with couple's names and wedding date",
        "Guest book alternative with photos and messages",
        "Instant digital delivery to all guests",
        "Professional-quality keepsakes without expensive equipment",
        "Coordinate with wedding theme colors and style"
      ],
      examples: [
        "Reception entertainment during cocktail hour",
        "Bridal shower and bachelorette party photos",
        "Engagement announcement pictures",
        "Wedding anniversary celebrations"
      ]
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Enhance brand engagement and employee morale",
      benefits: [
        "Custom company branding and logos on every photo",
        "Social media buzz with branded hashtags",
        "Analytics and engagement metrics",
        "Professional appearance without logistics hassle",
        "Scalable for events of any size"
      ],
      examples: [
        "Trade shows and conferences",
        "Product launches and brand activations",
        "Company parties and team building events",
        "Holiday celebrations and milestones"
      ]
    },
    {
      icon: PartyPopper,
      title: "Birthday Parties",
      description: "Make birthdays unforgettable for all ages",
      benefits: [
        "Age-appropriate themes and designs",
        "Fun props and filters for entertainment",
        "Easy sharing with family and friends",
        "Creates lasting memories",
        "No cleanup or equipment rental needed"
      ],
      examples: [
        "Children's birthday parties with cartoon themes",
        "Sweet 16 and milestone birthdays",
        "Adult birthday celebrations",
        "Surprise party documentation"
      ]
    },
    {
      icon: GraduationCap,
      title: "Graduations",
      description: "Celebrate academic achievements in style",
      benefits: [
        "School colors and mascot integration",
        "Customizable with graduation year and school name",
        "Perfect for grad parties and ceremonies",
        "Share achievements with proud family",
        "Professional graduation portraits"
      ],
      examples: [
        "High school graduation parties",
        "College commencement celebrations",
        "Graduation open houses",
        "Academic award ceremonies"
      ]
    },
    {
      icon: Music,
      title: "K-pop & Concert Events",
      description: "Fan experiences and concert memories",
      benefits: [
        "Photos with favorite K-pop idols virtually",
        "Concert-themed frames and effects",
        "Share on social media with fan communities",
        "Create unique fan content",
        "No need to meet idols in person"
      ],
      examples: [
        "Concert after-parties and viewing parties",
        "Fan meetings and conventions",
        "Album release celebrations",
        "K-pop dance cover events"
      ]
    },
    {
      icon: Baby,
      title: "Baby Showers & Gender Reveals",
      description: "Welcome new arrivals with adorable photos",
      benefits: [
        "Sweet baby-themed designs and colors",
        "Gender reveal customization (pink/blue themes)",
        "Capture excitement of guests",
        "Easy sharing with family near and far",
        "Keepsake for baby's memory book"
      ],
      examples: [
        "Baby shower parties",
        "Gender reveal celebrations",
        "Sip and see events",
        "Baby's first birthday"
      ]
    },
    {
      icon: Users,
      title: "Family Reunions",
      description: "Bring families together through photos",
      benefits: [
        "Multi-generational group photos",
        "Custom family name and reunion year",
        "Easy distribution to all family members",
        "Creates family history documentation",
        "Fun activity for all ages"
      ],
      examples: [
        "Annual family reunions",
        "Holiday family gatherings",
        "Family vacation photos",
        "Milestone family celebrations"
      ]
    },
    {
      icon: Building2,
      title: "Fundraisers & Non-Profit Events",
      description: "Engage donors and raise awareness",
      benefits: [
        "Branded with cause logos and messaging",
        "Increase social media awareness",
        "Additional fundraising tool",
        "Donor appreciation and engagement",
        "Low-cost high-impact activation"
      ],
      examples: [
        "Charity galas and auctions",
        "Community festivals",
        "Awareness campaigns",
        "Volunteer appreciation events"
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Virtual Photo Booth Use Cases | İdeal Photo - Events & Celebrations"
        description="Discover creative ways to use virtual photo booths for weddings, corporate events, birthday parties, K-pop concerts, graduations, and more. Real examples and benefits."
        canonicalPath="/use-cases"
        keywords="photo booth uses, virtual photo booth events, wedding photo booth, corporate event photos, birthday party photo booth, kpop photo booth ideas"
        structuredData={useCasesStructuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Endless Possibilities for Every Event
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                  Discover how virtual photo booths transform ordinary events into extraordinary memories. From intimate celebrations to large corporate gatherings, see real-world applications and benefits.
                </p>
              </div>
            </div>
          </section>

          {/* Use Cases Grid */}
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="bg-purple-100 p-4 rounded-lg mr-4">
                            <Icon className="h-8 w-8 text-purple-600" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-gray-900">{useCase.title}</h2>
                            <p className="text-gray-600 mt-1">{useCase.description}</p>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                          <ul className="space-y-3">
                            {useCase.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start">
                                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Applications</h3>
                          <div className="space-y-4">
                            {useCase.examples.map((example, exampleIndex) => (
                              <div key={exampleIndex} className="flex items-center p-4 bg-gray-50 rounded-lg">
                                <span className="bg-purple-100 text-purple-600 font-semibold px-3 py-1 rounded-full text-sm mr-3">
                                  {exampleIndex + 1}
                                </span>
                                <span className="text-gray-700">{example}</span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <a
                              href="/kpop-photobooth"
                              className="block w-full text-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                            >
                              Try It Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Elevate Your Event?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of event planners, businesses, and individuals creating unforgettable photo experiences
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/kpop-photobooth"
                    className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Creating Free
                  </a>
                  <a
                    href="/contact"
                    className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                  >
                    Contact for Events
                  </a>
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

export default UseCases;
