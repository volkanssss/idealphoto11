
import React from 'react';
import SEOHead from '@/components/landing/SEOHead';

const kpopStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "K-pop Photo Booth",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Create stunning virtual photos with your favorite K-pop idols using innovative technology to design professional-quality photo memories.",
  "screenshot": "https://idealphotovercel.com/kpop-preview.png",
  "softwareVersion": "3.0"
};

const KpopSEOData: React.FC = () => {
  return (
    <SEOHead 
      title="K-pop Photo Booth Online Free | Photobooth with ENHYPEN, NCT, BTS & More Idols"
      description="Free K-pop photobooth online! Create stunning virtual photos with your favorite K-pop idols - ENHYPEN, NCT Dream, BTS, BLACKPINK, TWICE, Seventeen. Professional photo booth experience with idol frames, filters & instant download. No registration needed."
      canonicalPath="/kpop-photobooth"
      keywords="kpop photobooth online, kpop photo booth online free, photobooth kpop, kpop idol photobooth, idol photobooth, photobooth with kpop idol, kpop photo booth website, online photo booth kpop, photo booth kpop, kpop online photo booth, photobooth web kpop, enhypen photo booth, nct photo booth, nct dream photo booth, bts photo booth, blackpink photo booth, twice photo booth, seventeen photo booth, kpop photocard maker, korean photo booth, virtual kpop photobooth"
      ogType="website"
      structuredData={kpopStructuredData}
      altLangs={[
        { locale: 'ko', path: '/kpop-photobooth?lang=ko' },
        { locale: 'ja', path: '/kpop-photobooth?lang=ja' },
        { locale: 'zh', path: '/kpop-photobooth?lang=zh' }
      ]}
    />
  );
};

export default KpopSEOData;
