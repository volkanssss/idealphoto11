
import React from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  handleLinkClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMobileMenuOpen, handleLinkClick }) => {
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  const navLinks = [
    { title: 'Home', path: '/' },
    { 
      title: 'Photobooths', 
      path: '#', 
      isDropdown: true, 
      items: [
        { title: 'Pica Pica Booth', path: '/pica-pica-booth' },
        { title: 'Digibooth', path: '/digibooth' },
        { title: 'K-pop Photo Booth', path: '/kpop-photobooth' },
        { title: 'Vintage Photobooth', path: '/vintage-photobooth' },
        { title: 'Wedding Photobooth', path: '/wedding-photobooth' },
        { title: 'Easy4Cut', path: '/easy4cut-photobooth' },
        { title: 'Memorify', path: '/memorify-photobooth' },
        { title: 'Chinchinbooth', path: '/chinchinbooth' },
      ]
    },
    { title: 'About', path: '/about' },
    { title: 'Pricing', path: '/pricing' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  const toggleDropdown = (title: string) => {
    setExpandedDropdown(expandedDropdown === title ? null : title);
  };

  if (!isMobileMenuOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 bg-white">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={handleLinkClick}>
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.isDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.title)}
                      className="flex items-center justify-between w-full text-left text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
                    >
                      {link.title}
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          expandedDropdown === link.title ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {expandedDropdown === link.title && (
                      <div className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-4">
                        {link.items?.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            to={item.path}
                            className="block text-gray-600 hover:text-pink-600 transition-colors py-1"
                            onClick={handleLinkClick}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="block text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
                    onClick={handleLinkClick}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
