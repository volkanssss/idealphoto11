
import React, { useState } from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact İdeal Photo",
  "description": "Get in touch with İdeal Photo team for support, business inquiries, or feedback about our virtual photo booth services.",
  "url": "https://idealphotovercel.com/contact"
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xanykevy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please email us directly at vlkneles1@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEOHead 
        title="Contact İdeal Photo - Get Support & Business Inquiries" 
        description="Contact İdeal Photo for technical support, business partnerships, feature requests, or general inquiries. We're here to help with all your virtual photo booth needs." 
        canonicalPath="/contact"
        keywords="contact ideal photo, photo booth support, customer service, business inquiries, technical help, virtual photo booth contact"
        structuredData={contactStructuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Get in Touch
                </h1>
                <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="What's this about?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <Mail className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Email</h3>
                            <p className="text-gray-600">vlkneles1@gmail.com</p>
                            <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <MapPin className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Location</h3>
                            <p className="text-gray-600">Turkey</p>
                            <p className="text-sm text-gray-500 mt-1">Remote-first company</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <Clock className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Response Time</h3>
                            <p className="text-gray-600">We aim to respond to all inquiries within 24-48 hours</p>
                            <p className="text-sm text-gray-500 mt-1">Please allow extra time on weekends</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* FAQ Quick Links */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Questions</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-800">Technical Support</h4>
                          <p className="text-sm text-gray-600">Having issues with the photo booth? Check our FAQ or reach out directly.</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Business Partnerships</h4>
                          <p className="text-sm text-gray-600">Interested in partnering with us? We'd love to explore opportunities.</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Feature Requests</h4>
                          <p className="text-sm text-gray-600">Have an idea for a new feature? We value user feedback and suggestions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Support Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Need Help?</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-purple-100 rounded-full mb-4">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-600 text-sm">Send us an email and we'll respond as soon as possible</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-pink-100 rounded-full mb-4">
                      <Phone className="h-6 w-6 text-pink-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">FAQ Section</h3>
                    <p className="text-gray-600 text-sm">Check our FAQ page for answers to common questions</p>
                  </div>
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

export default Contact;
