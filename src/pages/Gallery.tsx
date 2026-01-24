import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Heart, Download, Share2 } from 'lucide-react';

const galleryStructuredData = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Photo Gallery - İdeal Photo",
  "description": "Browse our gallery of creative virtual photo booth images created by users worldwide. Get inspiration for your own photo booth creations.",
  "url": "https://idealphotovercel.com/gallery"
};

const Gallery = () => {
  const galleryCategories = [
    {
      name: "K-pop Fan Photos",
      description: "Creative fan photos featuring favorite K-pop idols",
      images: [
        { likes: 234, downloads: 89 },
        { likes: 456, downloads: 123 },
        { likes: 189, downloads: 67 },
        { likes: 567, downloads: 201 }
      ]
    },
    {
      name: "Wedding Photo Booths",
      description: "Elegant wedding photo booth memories",
      images: [
        { likes: 345, downloads: 145 },
        { likes: 278, downloads: 98 },
        { likes: 421, downloads: 167 },
        { likes: 312, downloads: 134 }
      ]
    },
    {
      name: "Vintage Aesthetics",
      description: "Retro and vintage-styled photo booth creations",
      images: [
        { likes: 198, downloads: 76 },
        { likes: 267, downloads: 102 },
        { likes: 389, downloads: 156 },
        { likes: 445, downloads: 178 }
      ]
    },
    {
      name: "Event Photo Strips",
      description: "Classic photo strips from parties and events",
      images: [
        { likes: 523, downloads: 223 },
        { likes: 412, downloads: 187 },
        { likes: 356, downloads: 134 },
        { likes: 489, downloads: 198 }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Photo Gallery | İdeal Photo - User Creations & Inspiration"
        description="Browse our gallery of stunning virtual photo booth creations. Get inspired by K-pop fan photos, wedding memories, vintage aesthetics, and creative photo strips from users worldwide."
        canonicalPath="/gallery"
        keywords="photo booth gallery, kpop photo examples, photo strip gallery, virtual photo booth inspiration, user photo gallery"
        structuredData={galleryStructuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Photo Gallery
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                  Discover amazing photo booth creations from our creative community worldwide
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 bg-white border-b">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">500K+</div>
                  <div className="text-gray-600">Photos Created</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">50K+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
                  <div className="text-gray-600">Total Downloads</div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Categories */}
          {galleryCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                    <p className="text-xl text-gray-600">{category.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-gradient-to-br from-purple-100 to-pink-100 aspect-square">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center p-6">
                            <div className="text-6xl mb-4">📸</div>
                            <p className="text-gray-700 font-semibold">Sample Photo {imageIndex + 1}</p>
                            <p className="text-sm text-gray-600 mt-2">{category.name}</p>
                          </div>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center justify-between text-white text-sm">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center">
                                <Heart className="h-4 w-4 mr-1" />
                                {image.likes}
                              </span>
                              <span className="flex items-center">
                                <Download className="h-4 w-4 mr-1" />
                                {image.downloads}
                              </span>
                            </div>
                            <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                              <Share2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Create Your Own Masterpiece</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of creators and make your photo booth memories today
                </p>
                <a
                  href="/kpop-photobooth"
                  className="inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Creating Now
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

export default Gallery;