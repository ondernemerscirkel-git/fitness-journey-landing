import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
    <Navbar />
    <Hero />
    <Features />
    <Benefits />
    <Pricing />
    <CTABanner />
    <Testimonials />
    <Footer />
  </div>
);

export default Index;
