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
import ogImageEn from "@/assets/OG sharing/EN.png";
import ogImageNl from "@/assets/OG sharing/NL.png";

const Index = () => {
  const locale = useLocale();
  const { hash } = useLocation();

  const seo = {
    en: {
      title: "Leanify | Fitness Tracking, Guided Workouts, and Progress Insights",
      description:
        "Track workouts, follow guided bench press programs, and build better routines with Leanify's clear analytics, smart reminders, and calm fitness experience.",
      path: "/",
      image: ogImageEn,
      imageAlt: "Leanify fitness app hero preview showing workout tracking and progress insights",
    },
    nl: {
      title: "Leanify | Fitnessregistratie, begeleide workouts en voortgangsinzichten",
      description:
        "Houd workouts bij, volg begeleide bench press-programma's en bouw betere routines op met Leanify's heldere inzichten, slimme herinneringen en rustige fitnesservaring.",
      path: "/nl",
      image: ogImageNl,
      imageAlt: "Leanify fitness app preview met workoutregistratie en voortgangsinzichten",
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
        name: "Leanify",
        url: currentSeo.path,
        logo: "/favicon.ico",
      },
      {
        "@type": "SoftwareApplication",
        name: "Leanify",
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS",
        description: currentSeo.description,
        image: currentSeo.image,
      },
      {
        "@type": "WebSite",
        name: "Leanify",
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
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground [overflow-x:clip]">
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        path={currentSeo.path}
        image={currentSeo.image}
        locale={locale}
        imageAlt={currentSeo.imageAlt}
        keywords={[
          "Leanify",
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
      <div className="relative z-10 bg-background">
        <CTABanner />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
