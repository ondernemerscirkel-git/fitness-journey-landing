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

const Support = () => {
    const locale = useLocale();
    const seo = {
        en: {
            title: "Support | Leanify",
            description: "Get help with Leanify. Contact our support team for any issues or feedback.",
            path: "/support",
            image: ogImageEn,
        },
        nl: {
            title: "Ondersteuning | Leanify",
            description: "Krijg hulp bij Leanify. Neem contact op met ons supportteam voor vragen of feedback.",
            path: "/nl/support",
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
                keywords={["Leanify", "support", "help", "fitness app support"]}
                alternateLanguages={{ en: "/support", nl: "/nl/support" }}
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
                        {locale === "nl" ? "Ondersteuning" : "Support"}
                    </motion.h1>
                    <motion.p
                        {...fadeIn}
                        transition={{ delay: 0.1, duration: 0.6, ease }}
                        className="text-muted-foreground font-body mb-16"
                    >
                        {locale === "nl" ? "Bedankt voor het gebruiken van Leanify." : "Thank you for using Leanify."}
                    </motion.p>

                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.15, duration: 0.6, ease }}
                        className="space-y-12 font-body text-muted-foreground leading-relaxed text-[15px]"
                    >
                        {locale === "nl" ? (
                            <>
                                <div>
                                    <h2 className="text-lg font-display font-semibold text-foreground mb-3">Contact</h2>
                                    <ul className="space-y-2 list-none p-0">
                                        <li><strong>E-mail:</strong> <a href="mailto:support@leanify.io" className="text-primary hover:underline">support@leanify.io</a></li>
                                        <li><strong>Bedrijf/Ontwikkelaar:</strong> Leanify</li>
                                        <li><strong>Typische reactietijd:</strong> 1-3 werkdagen</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-lg font-display font-semibold text-foreground mb-3">Wat mee te sturen in je bericht</h2>
                                    <p className="mb-3">Om je probleem snel op te lossen, vragen we je het volgende te vermelden:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-2">
                                        <li>App-versie</li>
                                        <li>iOS-versie</li>
                                        <li>Apparaatmodel (bijv. iPhone 15 Pro)</li>
                                        <li>Duidelijke beschrijving van het probleem</li>
                                        <li>Stappen om het probleem te reproduceren</li>
                                        <li>Screenshots of een schermopname (indien mogelijk)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-lg font-display font-semibold text-foreground mb-3">Veelvoorkomende hulponderwerpen</h2>
                                    <ul className="list-disc list-inside space-y-2 ml-2">
                                        <li>Trainingsgegevens worden niet naar verwachting weergegeven</li>
                                        <li>Problemen met rusttimer / meldingen</li>
                                        <li>Taal- of vertaalproblemen</li>
                                        <li>Problemen met het maken of bewerken van routines</li>
                                        <li>Problemen met de begeleide trainingsflow</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-lg font-display font-semibold text-foreground mb-3">Meldingen</h2>
                                    <p className="mb-3">Als herinneringen niet werken:</p>
                                    <ol className="list-decimal list-inside space-y-2 ml-2">
                                        <li>Open iOS <code>Instellingen</code> &gt; <code>Meldingen</code> &gt; <code>Leanify</code></li>
                                        <li>Zorg ervoor dat meldingen zijn toegestaan</li>
                                        <li>Open Leanify opnieuw en activeer een nieuwe timer/herinnering</li>
                                    </ol>
                                </div>

                                <div>
                                    <h2 className="text-lg font-display font-semibold text-foreground mb-3">Gegevens & Privacy</h2>
                                    <p>
                                        Leanify slaat trainingsgegevens lokaal op uw apparaat op. Als u alle app-gegevens wilt verwijderen, gebruik dan de reset-optie in de app.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-lg font-display font-semibold text-foreground mb-3">Feedback</h2>
                                    <p>
                                        Functieverzoeken en ideeën voor verbetering zijn welkom. Stuur ze naar het bovenstaande e-mailadres voor ondersteuning.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <h2 className="text-lg font-display font-semibold text-foreground mb-3">Contact</h2>
                                    <ul className="space-y-2 list-none p-0">
                                        <li><strong>Support email:</strong> <a href="mailto:support@leanify.io" className="text-primary hover:underline">support@leanify.io</a></li>
                                        <li><strong>Company/Developer:</strong> Leanify</li>
                                        <li><strong>Typical response time:</strong> 1-3 business days</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-lg font-display font-semibold text-foreground mb-3">What To Include In Your Message</h2>
                                    <p className="mb-3">To help us resolve issues quickly, please include:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-2">
                                        <li>App version</li>
                                        <li>iOS version</li>
                                        <li>Device model (for example, iPhone 15 Pro)</li>
                                        <li>Clear description of the issue</li>
                                        <li>Steps to reproduce</li>
                                        <li>Screenshots or screen recording (if possible)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-lg font-display font-semibold text-foreground mb-3">Common Help Topics</h2>
                                    <ul className="list-disc list-inside space-y-2 ml-2">
                                        <li>Workout data not showing as expected</li>
                                        <li>Rest timer / notification issues</li>
                                        <li>Language or translation issues</li>
                                        <li>Routine creation or editing problems</li>
                                        <li>Guided training flow issues</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-lg font-display font-semibold text-foreground mb-3">Notifications</h2>
                                    <p className="mb-3">If reminders are not working:</p>
                                    <ol className="list-decimal list-inside space-y-2 ml-2">
                                        <li>Open iOS <code>Settings</code> &gt; <code>Notifications</code> &gt; <code>Leanify</code></li>
                                        <li>Ensure notifications are allowed</li>
                                        <li>Reopen Leanify and trigger a new timer/reminder</li>
                                    </ol>
                                </div>

                                <div>
                                    <h2 className="text-lg font-display font-semibold text-foreground mb-3">Data & Privacy</h2>
                                    <p>
                                        Leanify stores workout data locally on your device. If you want all app data removed, use the in-app reset option.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-lg font-display font-semibold text-foreground mb-3">Feedback</h2>
                                    <p>
                                        Feature requests and improvement ideas are welcome. Please send them via the support email above.
                                    </p>
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

export default Support;
