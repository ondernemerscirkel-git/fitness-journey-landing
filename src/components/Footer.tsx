import { Instagram, Twitter, Linkedin } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="bg-foreground text-background pt-24 pb-0 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-20">
        <div>
          <div className="text-2xl font-display font-semibold tracking-tighter mb-6">
            {t.footer.brand}
          </div>
          <p className="text-background/40 text-sm leading-relaxed font-body">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-6">{t.footer.productHeading}</h4>
          <ul className="space-y-4 text-sm text-background/40 font-body">
            {t.footer.productLinks.map((link) => (
              <li
                key={link}
                className="hover:text-primary cursor-pointer transition-colors duration-200"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-6">{t.footer.connectHeading}</h4>
          <div className="flex gap-5 text-background/40">
            <Instagram
              className="hover:text-primary cursor-pointer transition-colors duration-200"
              size={20}
              strokeWidth={1.5}
            />
            <Twitter
              className="hover:text-primary cursor-pointer transition-colors duration-200"
              size={20}
              strokeWidth={1.5}
            />
            <Linkedin
              className="hover:text-primary cursor-pointer transition-colors duration-200"
              size={20}
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-background/10">
        <p className="py-8 text-center text-xs text-background/25 font-body">
          © {new Date().getFullYear()} Vellic Labs Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
