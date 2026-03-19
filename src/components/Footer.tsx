import { ArrowRight, Instagram, Twitter, Linkedin } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="bg-foreground text-background pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="text-2xl font-display font-bold tracking-tighter mb-6">{t.footer.brand}</div>
          <p className="text-background/50 text-sm leading-relaxed font-body">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">{t.footer.productHeading}</h4>
          <ul className="space-y-4 text-sm text-background/50 font-body">
            {t.footer.productLinks.map((link) => (
              <li key={link} className="hover:text-primary cursor-pointer transition-colors">{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">{t.footer.connectHeading}</h4>
          <div className="flex gap-4 text-background/60">
            <Instagram className="hover:text-primary cursor-pointer transition-colors" size={22} />
            <Twitter className="hover:text-primary cursor-pointer transition-colors" size={22} />
            <Linkedin className="hover:text-primary cursor-pointer transition-colors" size={22} />
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">{t.footer.newsletterHeading}</h4>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder={t.footer.emailPlaceholder}
              className="bg-background/5 border border-background/10 rounded-xl px-4 py-2.5 text-sm w-full focus:outline-none focus:border-primary font-body placeholder:text-background/30"
            />
            <button className="bg-primary p-2.5 rounded-xl text-primary-foreground hover:opacity-90 transition-opacity">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-background/10 text-center text-xs text-background/30 font-body">
        {t.footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
