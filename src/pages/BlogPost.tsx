import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen } from 'lucide-react';
import { blogPosts } from '@/data/blog';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <>
        <SEOHead 
          title="Blog Post Not Found | İdeal Photo" 
          description="The blog post you're looking for could not be found. Explore our other helpful articles about virtual photo booths and K-pop photography." 
          canonicalPath={`/blog/${slug}`}
        />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
              <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
              <Button onClick={() => navigate('/blog')} className="bg-purple-600 hover:bg-purple-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.imageUrl,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "İdeal Photo Team",
      "url": "https://idealphotovercel.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "İdeal Photo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://idealphotovercel.com/og-image.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "url": `https://idealphotovercel.com/blog/${post.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://idealphotovercel.com/blog/${post.slug}`
    }
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <SEOHead 
        title={`${post.title} | İdeal Photo Blog`}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        keywords={`${post.tags?.join(', ') || 'virtual photo booth, k-pop, photo editing'}, blog, tutorial, guide`}
        ogType="article"
        ogImage={post.imageUrl}
        structuredData={structuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Back Button */}
          <div className="bg-gray-50 py-4">
            <div className="container mx-auto px-4 md:px-6">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/blog')}
                className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </div>
          </div>

          {/* Article Header */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-4">
                    {post.category}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {post.title}
                  </h1>
                  
                  {/* Article Meta */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>{post.author?.name || "İdeal Photo Team"}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>5 min read</span>
                    </div>
                    <button className="flex items-center text-purple-600 hover:text-purple-700 transition-colors">
                      <Share2 className="h-4 w-4 mr-2" />
                      <span>Share</span>
                    </button>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Featured Image */}
                <div className="mb-12">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-12">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <article className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="prose prose-lg max-w-none">
                        {post.content ? (
                          <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        ) : (
                          <div>
                            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Getting Started</h2>
                            <p className="text-gray-700 mb-6">
                              This comprehensive guide will walk you through everything you need to know about creating amazing {post.category.toLowerCase()} photos using İdeal Photo's advanced virtual photo booth platform.
                            </p>
                            
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Step-by-Step Instructions</h3>
                            <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-8">
                              <li>Navigate to the photo booth section</li>
                              <li>Select your preferred theme and style</li>
                              <li>Adjust camera settings and positioning</li>
                              <li>Choose filters and effects</li>
                              <li>Take your photos or start recording</li>
                              <li>Edit and customize your creations</li>
                              <li>Download or share your final results</li>
                            </ol>

                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Pro Tips for Best Results</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                              <li>Ensure good lighting conditions for optimal photo quality</li>
                              <li>Experiment with different angles and poses</li>
                              <li>Use the preview feature to check your composition</li>
                              <li>Try combining multiple filters for unique effects</li>
                              <li>Save your favorite settings for future sessions</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Troubleshooting Common Issues</h3>
                            <p className="text-gray-700 mb-4">
                              If you encounter any issues while using the photo booth, here are some quick solutions:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                              <li>Camera not working: Check browser permissions and refresh the page</li>
                              <li>Slow performance: Clear browser cache and close unnecessary tabs</li>
                              <li>Download issues: Ensure your browser allows downloads from our site</li>
                              <li>Quality problems: Check your internet connection and camera resolution</li>
                            </ul>

                            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-8">
                              <h4 className="font-semibold text-purple-900 mb-2">💡 Expert Tip</h4>
                              <p className="text-purple-800">
                                For the best results, use İdeal Photo in a well-lit environment and experiment with different themes to find your perfect style. Our platform works best with modern browsers and stable internet connections.
                              </p>
                            </div>

                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Conclusion</h3>
                            <p className="text-gray-700">
                              With these tips and techniques, you'll be creating professional-quality photos in no time. İdeal Photo's intuitive interface and powerful features make it easy for anyone to create stunning visual content. Don't forget to share your creations with friends and on social media!
                            </p>
                          </div>
                        )}
                      </div>
                    </article>

                    {/* Tags */}
                    {post.tags && (
                      <div className="mt-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-purple-600 border-purple-600">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="space-y-8">
                      {/* Author Info */}
                      {post.author && (
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                          <div className="flex items-center space-x-4">
                            <img 
                              src={post.author.avatar} 
                              alt={post.author.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-medium text-gray-900">{post.author.name}</h4>
                              <p className="text-sm text-gray-600">{post.author.role}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Table of Contents */}
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2" />
                          Table of Contents
                        </h3>
                        <nav className="space-y-2">
                          <a href="#getting-started" className="block text-purple-600 hover:text-purple-700 text-sm">
                            Getting Started
                          </a>
                          <a href="#step-by-step" className="block text-purple-600 hover:text-purple-700 text-sm">
                            Step-by-Step Instructions
                          </a>
                          <a href="#pro-tips" className="block text-purple-600 hover:text-purple-700 text-sm">
                            Pro Tips for Best Results
                          </a>
                          <a href="#troubleshooting" className="block text-purple-600 hover:text-purple-700 text-sm">
                            Troubleshooting
                          </a>
                          <a href="#conclusion" className="block text-purple-600 hover:text-purple-700 text-sm">
                            Conclusion
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {relatedPosts.map((relatedPost) => (
                      <article key={relatedPost.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <img 
                          src={relatedPost.imageUrl} 
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <Badge variant="secondary" className="mb-2">
                            {relatedPost.category}
                          </Badge>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {relatedPost.excerpt}
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                            className="text-purple-600 border-purple-600 hover:bg-purple-50"
                          >
                            Read More
                          </Button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;