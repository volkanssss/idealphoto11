
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import CookieConsentBanner from "@/components/cookies/CookieConsentBanner";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Sitemap from "./pages/Sitemap";
import KpopPhotobooth from "./pages/KpopPhotobooth";
import LittleVintagePhotobooth from "./pages/LittleVintagePhotobooth";
import Digibooth from "./pages/Digibooth";
import WeddingPhotobooth from "./pages/WeddingPhotobooth";
import PicaPicaPhotobooth from "./pages/PicaPicaPhotobooth";
import SelfiePhotobooth from "./pages/SelfiePhotobooth";
import PartyPhotobooth from "./pages/PartyPhotobooth";
import Chinchinbooth from "./pages/Chinchinbooth";
import BeautyPlusPhotobooth from "./pages/BeautyPlusPhotobooth";
import JepretoPhotobooth from "./pages/JepretoPhotobooth";
import Easy4CutPhotobooth from "./pages/Easy4CutPhotobooth";
import MemorifyPhotobooth from "./pages/MemorifyPhotobooth";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import HelpCenter from "./pages/HelpCenter";
import Tutorials from "./pages/Tutorials";
import Gallery from "./pages/Gallery";
import Resources from "./pages/Resources";
import UseCases from "./pages/UseCases";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about/" element={<About />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/faq/" element={<FAQ />} />
            <Route path="/pricing/" element={<Pricing />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service/" element={<TermsOfService />} />
            <Route path="/cookie-policy/" element={<CookiePolicy />} />
            <Route path="/sitemap/" element={<Sitemap />} />
            <Route path="/kpop-photobooth/" element={<KpopPhotobooth />} />
            <Route path="/vintage-photobooth/" element={<LittleVintagePhotobooth />} />
            <Route path="/digibooth/" element={<Digibooth />} />
            <Route path="/wedding-photobooth/" element={<WeddingPhotobooth />} />
            <Route path="/pica-pica-booth/" element={<PicaPicaPhotobooth />} />
            <Route path="/pica-pica-photobooth/" element={<PicaPicaPhotobooth />} />
            <Route path="/selfie-photobooth/" element={<SelfiePhotobooth />} />
            <Route path="/party-photobooth/" element={<PartyPhotobooth />} />
            <Route path="/chinchinbooth/" element={<Chinchinbooth />} />
            <Route path="/beautyplus-photobooth/" element={<BeautyPlusPhotobooth />} />
            <Route path="/jepreto-photobooth/" element={<JepretoPhotobooth />} />
            <Route path="/easy4cut-photobooth/" element={<Easy4CutPhotobooth />} />
            <Route path="/easy4cut/" element={<Easy4CutPhotobooth />} />
            <Route path="/4-cut-photo-booth-online/" element={<Easy4CutPhotobooth />} />
            <Route path="/memorify-photobooth/" element={<MemorifyPhotobooth />} />
            <Route path="/blog/" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/help/" element={<HelpCenter />} />
            <Route path="/tutorials/" element={<Tutorials />} />
            <Route path="/gallery/" element={<Gallery />} />
            <Route path="/resources/" element={<Resources />} />
            <Route path="/use-cases/" element={<UseCases />} />
            <Route path="/careers/" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsentBanner />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
