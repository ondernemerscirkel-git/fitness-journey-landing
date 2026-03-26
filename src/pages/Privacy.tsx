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
            {locale === "nl" ? "Privacybeleid" : "Privacy Policy"}
          </motion.h1>
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.1, duration: 0.6, ease }}
            className="text-muted-foreground font-body mb-16"
          >
            {locale === "nl" ? "Laatst bijgewerkt" : "Last updated"}: {new Date().toLocaleDateString(locale === "nl" ? "nl-NL" : "en-US", { month: "long", day: "numeric", year: "numeric" })}
          </motion.p>

          <motion.div
            {...fadeIn}
            transition={{ delay: 0.15, duration: 0.6, ease }}
            className="space-y-12 font-body text-muted-foreground leading-relaxed text-[15px]"
          >
            {locale === "nl" ? (
              <>
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">1. Inleiding</h2>
                  <p>
                    Leanify ("wij", "ons" of "onze") respecteert uw privacy. Dit Privacybeleid beschrijft hoe Leanify, een app voor het bijhouden van trainingen voor iOS, omgaat met uw persoonlijke informatie. Onze kernfilosofie is dat uw fitnessgegevens van u moeten blijven en op uw apparaat moeten blijven.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">2. Informatie die we gebruiken</h2>
                  <p className="mb-3">Leanify maakt gebruik van de volgende informatie die u rechtstreeks in de app invoert:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
                    <li><strong>Profielinformatie:</strong> Naam, geslacht, geboortedatum, lengte, lichaamsgewichtgeschiedenis en uw favoriete oefening.</li>
                    <li><strong>Trainingsgegevens:</strong> Routines, oefeningen, sets, herhalingen, gewichten, trainingsduur, data en sessielogboeken.</li>
                    <li><strong>Programma-instellingen:</strong> Trainingswaarden voor de begeleide bench press, doelen en voortgang van de cyclus.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">3. Gegevensverzameling en -opslag</h2>
                  <p className="mb-3">Wij geloven in minimale gegevensverzameling en maximale privacy:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li><strong>Lokale opslag:</strong> Al uw persoonlijke en trainingsgegevens worden lokaal op uw apparaat opgeslagen met behulp van SwiftData. Wij onderhouden geen centrale servers om uw fitnessgeschiedenis op te slaan.</li>
                    <li><strong>Geen verkoop:</strong> Wij verkopen uw persoonlijke gegevens niet aan derden.</li>
                    <li><strong>Geen tracking:</strong> Wij maken geen gebruik van SDK's voor advertentietracking van derden of analyse-identificaties voor reclamedoeleinden.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">4. Apparaatpermissies</h2>
                  <p className="mb-3">Om specifieke functies te kunnen bieden, kan Leanify de volgende toestemming vragen:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li><strong>Meldingen:</strong> Uitsluitend gebruikt om trainingsherinneringen, rusttimers en prompts voor begeleide sessies te verzenden. Deze toestemming is optioneel en kan op elk moment worden uitgeschakeld in uw iOS-instellingen.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">5. Delen van gegevens</h2>
                  <p>
                    Uw gegevens worden niet gedeeld met externe derden, behalve in het uiterst onwaarschijnlijke geval dat dit wettelijk vereist is. Omdat uw gegevens lokaal op uw apparaat worden opgeslagen, hebben wij er over het algemeen geen toegang toe.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">6. Gebruikerscontroles en retentie</h2>
                  <p className="mb-3">U heeft te allen tijde volledige controle over uw gegevens:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
                    <li><strong>Bewerken/Verwijderen:</strong> U kunt individuele trainingen, sets of profieldetails rechtstreeks in de app bewerken of verwijderen.</li>
                    <li><strong>Volledige reset:</strong> U kunt alle app-gegevens verwijderen via het instellingenmenu in de app.</li>
                    <li><strong>Retentie:</strong> Uw gegevens worden alleen bewaard zolang u ervoor kiest deze te bewaren. Het verwijderen van een logboek verwijdert dit permanent. Het verwijderen van de app verwijdert ook alle lokaal opgeslagen gegevens.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">7. Privacy van kinderen</h2>
                  <p>
                    Leanify is niet bedoeld voor gebruik door kinderen onder de leeftijd van 13 jaar. Wij verzamelen of vragen niet bewust om persoonlijke informatie van kinderen.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">8. Wijzigingen in dit beleid</h2>
                  <p>
                    Wij kunnen dit Privacybeleid van tijd tot tijd bijwerken. Wij zullen u op de hoogte stellen van eventuele wijzigingen door het nieuwe beleid op deze pagina te plaatsen en de datum "Laatst bijgewerkt" bij te werken.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">9. Contact met ons opnemen</h2>
                  <p>
                    Als u vragen heeft over dit Privacybeleid of hoe Leanify met uw gegevens omgaat, neem dan contact met ons op via:
                  </p>
                  <div className="mt-4 p-4 rounded-2xl bg-muted/30 border border-border/50">
                    <p className="text-foreground font-semibold">Ontwikkelaar: Leanify</p>
                    <p>Ondersteuning: <a href="mailto:support@leanify.io" className="text-primary hover:underline">support@leanify.io</a></p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">1. Introduction</h2>
                  <p>
                    Leanify ("we", "us", or "our") respects your privacy. This Privacy Policy describes how Leanify, a workout tracking application for iOS, handles your personal information. Our core philosophy is that your fitness data should remain yours and stay on your device.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">2. Information We Use</h2>
                  <p className="mb-3">Leanify uses the following information that you enter directly into the app:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
                    <li><strong>Profile Information:</strong> Name, gender, date of birth, height, bodyweight history, and your favorite exercise.</li>
                    <li><strong>Workout Data:</strong> Routines, exercises, sets, reps, weights, workout duration, dates, and session logs.</li>
                    <li><strong>Program Settings:</strong> Guided bench press training values, targets, and cycle progress.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">3. Data Collection & Storage</h2>
                  <p className="mb-3">We believe in minimal data collection and maximum privacy:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li><strong>Local Storage:</strong> All your personal and workout data is stored locally on your device using SwiftData. We do not maintain central servers to store your fitness history.</li>
                    <li><strong>No Sales:</strong> We do not sell your personal data to any third parties.</li>
                    <li><strong>No Tracking:</strong> We do not use third-party ad tracking SDKs or analytics identifiers for advertising purposes.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">4. Device Permissions</h2>
                  <p className="mb-3">To provide specific features, Leanify may request the following permission:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li><strong>Notifications:</strong> Used exclusively to send workout reminders, rest timers, and guided session prompts. This permission is optional and can be disabled at any time in your iOS Settings.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">5. Data Sharing</h2>
                  <p>
                    Your data is not shared with external third parties, except in the highly unlikely event that it is required by law. Since your data is stored locally on your device, we generally do not have access to it.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">6. User Controls & Retention</h2>
                  <p className="mb-3">You have full control over your data at all times:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
                    <li><strong>Edit/Delete:</strong> You can edit or delete individual workouts, sets, or profile details directly within the app.</li>
                    <li><strong>Full Reset:</strong> You can remove all app data through the settings menu in the app.</li>
                    <li><strong>Retention:</strong> Your data is kept only as long as you choose to keep it. Deleting a log removes it permanently. Uninstalling the app will also remove all locally stored data.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">7. Children's Privacy</h2>
                  <p>
                    Leanify is not intended for use by children under the age of 13. We do not knowingly collect or solicit personal information from children.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">8. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">9. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy or how Leanify handles your data, please contact us at:
                  </p>
                  <div className="mt-4 p-4 rounded-2xl bg-muted/30 border border-border/50">
                    <p className="text-foreground font-semibold">Developer: Leanify</p>
                    <p>Support: <a href="mailto:support@leanify.io" className="text-primary hover:underline">support@leanify.io</a></p>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;
