
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
  altLangs?: {locale: string, path: string}[];
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title = "İdeal Photo | Free K-pop Photo Booth Online - Virtual Photobooth with Idols",
  description = "Create stunning K-pop photo booth pictures online for free. Virtual photobooth with your favorite K-pop idols - ENHYPEN, NCT, BTS, BLACKPINK. Professional photo strips, filters & instant download. No registration required.",
  canonicalPath = "",
  keywords = "kpop photobooth, kpop photo booth online, ideal photo booth, photobooth kpop, kpop photobooth online free, idol photobooth, photo booth kpop, kpop idol photobooth, online photo booth kpop, virtual photo booth, ideal photo vercel, idealphoto, photobooth with kpop idol, kpop photo booth website, photobooth web kpop, kpop online photo booth, free photo booth online, ideal photobooth, photo booth online free, virtual photobooth, enhypen photo booth, nct photo booth, bts photo booth, blackpink photo booth",
  ogType = "website",
  ogImage = "/og-image.png",
  structuredData,
  altLangs = []
}) => {
  const baseUrl = "https://idealphotovercel.com";
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  const fullOgImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ideal Photo Vercel" />
      <meta name="publisher" content="Ideal Photo Vercel" />
      <meta name="copyright" content="Ideal Photo Vercel 2025" />
      
      {/* Open Graph / Social Media Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullOgImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Ideal Photo Vercel" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImageUrl} />
      <meta name="twitter:site" content="@idealphoto" />
      <meta name="twitter:creator" content="@idealphoto" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="3 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Enhanced crawling directives */}
      <meta name="google" content="notranslate" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Additional structured data hints */}
      <meta name="application-name" content="Ideal Photo Vercel" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Alternative languages */}
      {altLangs.map(({locale, path}) => (
        <link key={locale} rel="alternate" hrefLang={locale} href={`${baseUrl}${path}`} />
      ))}
      
      {/* Structured data for rich results */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
