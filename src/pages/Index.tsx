import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLocale } from "@/i18n/useTranslations";

const Index = () => {
  const locale = useLocale();
  const { hash } = useLocation();

  const seo = {
    en: {
      title: "Vellic | Fitness Tracking, Guided Workouts, and Progress Insights",
      description:
        "Track workouts, follow guided bench press programs, and build better routines with Vellic's clear analytics, smart reminders, and calm fitness experience.",
      path: "/",
      imageAlt: "Vellic fitness app hero preview showing workout tracking and progress insights",
    },
    nl: {
      title: "Vellic | Fitnessregistratie, begeleide workouts en voortgangsinzichten",
      description:
        "Houd workouts bij, volg begeleide bench press-programma's en bouw betere routines op met Vellics heldere inzichten, slimme herinneringen en rustige fitnesservaring.",
      path: "/nl",
      imageAlt: "Vellic fitness app preview met workoutregistratie en voortgangsinzichten",
    },
  } as const;

  const currentSeo = seo[locale];
  const alternateLanguages = {
    en: "/",
    nl: "/nl",
  } as const;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Vellic",
        url: currentSeo.path,
        logo: "/favicon.ico",
      },
      {
        "@type": "SoftwareApplication",
        name: "Vellic",
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS",
        description: currentSeo.description,
        image: "/og-image.png",
      },
      {
        "@type": "WebSite",
        name: "Vellic",
        url: currentSeo.path,
        inLanguage: locale,
      },
    ],
  };

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash]);

  return (
  <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
    <SEO
      title={currentSeo.title}
      description={currentSeo.description}
      path={currentSeo.path}
      locale={locale}
      imageAlt={currentSeo.imageAlt}
      keywords={[
        "Vellic",
        "fitness app",
        "workout tracker",
        "progress insights",
        "bench press program",
        "training log",
      ]}
      alternateLanguages={alternateLanguages}
      structuredData={structuredData}
    />
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
};

export default Index;
