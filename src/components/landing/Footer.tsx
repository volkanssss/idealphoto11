
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Heart, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold">Ideal Photo Vercel</span>
            </div>
            <p className="text-gray-400 mb-4">
              Create magical photo booth experiences with your favorite K-pop idols.
              Free, secure, and always improving.
            </p>
            <div className="flex items-center space-x-2 text-pink-400">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Made for K-pop fans worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about/" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq/" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/sitemap/" className="text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Photo Booths */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Photo Booths</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/kpop-photobooth/" className="text-gray-400 hover:text-white transition-colors">
                  K-pop Photobooth
                </Link>
              </li>
              <li>
                <Link to="/digibooth/" className="text-gray-400 hover:text-white transition-colors">
                  Digital Booth
                </Link>
              </li>
              <li>
                <Link to="/vintage-photobooth/" className="text-gray-400 hover:text-white transition-colors">
                  Vintage Photobooth
                </Link>
              </li>
              <li>
                <Link to="/wedding-photobooth/" className="text-gray-400 hover:text-white transition-colors">
                  Wedding Photobooth
                </Link>
              </li>
              <li>
                <Link to="/pica-pica-photobooth/" className="text-gray-400 hover:text-white transition-colors">
                  Pica-Pica Booth
                </Link>
              </li>
              <li>
                <Link to="/selfie-photobooth/" className="text-gray-400 hover:text-white transition-colors">
                  Selfie Booth
                </Link>
              </li>
              <li>
                <Link to="/party-photobooth/" className="text-gray-400 hover:text-white transition-colors">
                  Party Booth
                </Link>
              </li>
              <li>
                <Link to="/chinchinbooth/" className="text-gray-400 hover:text-white transition-colors">
                  Chinchinbooth
                </Link>
              </li>
              <li>
                <Link to="/beautyplus-photobooth/" className="text-gray-400 hover:text-white transition-colors">
                  BeautyPlus Booth
                </Link>
              </li>
              <li>
                <Link to="/jepreto-photobooth/" className="text-gray-400 hover:text-white transition-colors">
                  Jepreto Booth
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/" className="text-gray-400 hover:text-white transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/tutorials/" className="text-gray-400 hover:text-white transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/gallery/" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/use-cases/" className="text-gray-400 hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/resources/" className="text-gray-400 hover:text-white transition-colors">
                  All Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq/" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="text-gray-400 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/blog/" className="text-gray-400 hover:text-white transition-colors">
                  Tutorials & Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about/" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers/" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy/" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service/" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy/" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Ideal Photo Vercel. All rights reserved. |
              <span className="ml-1">
                Made with <Heart className="h-4 w-4 inline text-pink-400" /> for K-pop fans
              </span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>idealphotovercel.com</span>
              <a
                href="https://idealphotovercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-white transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Visit Site</span>
              </a>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
            <p>
              Ideal Photo Vercel processes all images locally on your device. We respect your privacy and do not store any personal photos.
              All K-pop idol images are used for fan appreciation purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
