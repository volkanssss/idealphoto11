
import React, { useState } from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Calendar, User, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { useNavigate } from 'react-router-dom';

const blogStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "İdeal Photo Blog - Virtual Photo Booth Tips & Tutorials",
  "description": "Comprehensive guides, tutorials, and expert tips for virtual photo booths, K-pop photography, creative editing techniques, and photo booth best practices.",
  "url": "https://idealphotovercel.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "İdeal Photo",
    "logo": "https://idealphotovercel.com/og-image.png"
  },
  "about": [
    "Virtual Photo Booth",
    "K-pop Photography",
    "Photo Editing",
    "Creative Photography",
    "Photo Booth Tips"
  ]
};

const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOHead 
        title="Virtual Photo Booth Blog | Expert Tips, Tutorials & K-pop Photography Guides" 
        description="Master virtual photo booth techniques with our comprehensive guides. Learn K-pop photography, creative editing, photo booth setup tips, and professional photo creation strategies." 
        canonicalPath="/blog"
        keywords="virtual photo booth blog, k-pop photography tutorials, photo booth tips, creative photo editing, digital photography guides, photo booth techniques, professional photo tips"
        structuredData={blogStructuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Virtual Photo Booth Mastery Hub
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
                  Expert tutorials, creative techniques, and professional tips for virtual photo booth excellence
                </p>
                <div className="flex justify-center space-x-8 text-sm opacity-75">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>Photo Booth Guides</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    <span>Growing Collection</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>By İdeal Photo Team</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Search articles, tutorials, tips..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                          className={selectedCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <p className="text-gray-600">
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                    {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                    {searchQuery && ` matching "${searchQuery}"`}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
                      <div className="relative overflow-hidden">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 text-gray-800">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <span className="mx-2">•</span>
                          <span>5 min read</span>
                        </div>
                        
                        <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="h-3 w-3 mr-1" />
                            <span>{post.author?.name || "İdeal Photo Team"}</span>
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => navigate(`/blog/${post.slug}`)}
                            className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 group-hover:translate-x-1 transition-transform"
                          >
                            Read More
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-16">
                    <div className="max-w-md mx-auto">
                      <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
                      <p className="text-gray-600 mb-6">
                        We couldn't find any articles matching your search criteria. Try different keywords or browse our popular categories.
                      </p>
                      <Button 
                        onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        View All Articles
                      </Button>
                    </div>
                  </div>
                )}

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Try Our Virtual Photo Booth</h3>
                  <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                    Create amazing K-pop inspired photo strips and virtual photo booth experiences with our free online tools.
                  </p>
                  <Button 
                    onClick={() => navigate('/kpop-photobooth')}
                    className="bg-white text-purple-600 hover:bg-gray-100 whitespace-nowrap px-8 py-3"
                  >
                    Start Creating Free
                  </Button>
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

export default Blog;
