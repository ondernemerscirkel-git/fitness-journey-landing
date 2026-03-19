import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLocale } from "@/i18n/useTranslations";
import ogImageEn from "@/assets/OG sharing/EN.png";
import ogImageNl from "@/assets/OG sharing/NL.png";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease },
};

const Privacy = () => {
  const locale = useLocale();
  const seo = {
    en: {
      title: "Privacy Policy | Leanify",
      description:
        "Read how Leanify collects, uses, protects, and manages personal data across its fitness tracking platform.",
      path: "/privacy",
      image: ogImageEn,
    },
    nl: {
      title: "Privacybeleid | Leanify",
      description:
        "Lees hoe Leanify persoonsgegevens verzamelt, gebruikt, beschermt en beheert binnen het fitnessplatform.",
      path: "/nl/privacy",
      image: ogImageNl,
    },
  } as const;
  const currentSeo = seo[locale];

  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        path={currentSeo.path}
        image={currentSeo.image}
        locale={locale}
        type="article"
        keywords={["Leanify", "privacy policy", "fitness app privacy", "data protection"]}
        alternateLanguages={{ en: "/privacy", nl: "/nl/privacy" }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: currentSeo.title,
          description: currentSeo.description,
          url: currentSeo.path,
          inLanguage: locale,
        }}
      />
      <Navbar />
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Blobs */}
        <div
          className="absolute top-16 right-[-4%] w-72 h-72 rounded-full opacity-40 blur-3xl pointer-events-none animate-float"
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.3), hsl(var(--vita-lavender-deep) / 0.15))" }}
        />
        <div
          className="absolute bottom-24 left-[-6%] w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none animate-float-delayed"
          style={{ background: "radial-gradient(circle, hsl(var(--vita-lavender-deep) / 0.3), hsl(var(--primary) / 0.1))" }}
        />

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h1
            {...fadeIn}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.1, duration: 0.6, ease }}
            className="text-muted-foreground font-body mb-16"
          >
            Last updated: March 19, 2026
          </motion.p>

          <motion.div
            {...fadeIn}
            transition={{ delay: 0.15, duration: 0.6, ease }}
            className="space-y-12 font-body text-muted-foreground leading-relaxed text-[15px]"
          >
            <div>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly, such as your name, email address, and fitness data when you create an account and use Leanify. We also automatically collect usage data including device information, app interactions, and performance metrics to improve our services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Provide, maintain, and improve our fitness tracking services</li>
                <li>Personalize your workout recommendations and analytics</li>
                <li>Send you updates, tips, and promotional communications (with your consent)</li>
                <li>Ensure the security and integrity of our platform</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">3. Data Sharing</h2>
              <p>
                We do not sell your personal data. We may share information with trusted third-party service providers who assist us in operating the platform, conducting our business, or serving our users — provided those parties agree to keep this information confidential. We may also share data when required by law.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">4. Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption in transit and at rest, secure authentication protocols, and regular security audits. While no system is 100% secure, we are committed to protecting your information with the highest standards.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">5. Your Rights</h2>
              <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Access, correct, or delete your personal data</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Export your data in a portable format</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">6. Cookies & Tracking</h2>
              <p>
                We use essential cookies to ensure the proper functioning of our app. Analytics cookies are used only with your consent to help us understand how you interact with Leanify so we can continuously improve the experience.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">7. Children's Privacy</h2>
              <p>
                Leanify is not intended for users under the age of 16. We do not knowingly collect personal information from children. If we learn that we have collected data from a child, we will take steps to delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date above.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@leanify.io" className="text-primary hover:underline">
                  privacy@leanify.io
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;
