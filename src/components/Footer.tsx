import { ArrowRight, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background pt-24 pb-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div>
        <div className="text-2xl font-display font-bold tracking-tighter mb-6">VITA.</div>
        <p className="text-background/50 text-sm leading-relaxed font-body">
          The precision fitness platform for the modern athlete. Built for
          performance, designed for clarity.
        </p>
      </div>

      <div>
        <h4 className="font-display font-bold mb-6">Product</h4>
        <ul className="space-y-4 text-sm text-background/50 font-body">
          <li className="hover:text-primary cursor-pointer transition-colors">Features</li>
          <li className="hover:text-primary cursor-pointer transition-colors">Integrations</li>
          <li className="hover:text-primary cursor-pointer transition-colors">Pricing</li>
          <li className="hover:text-primary cursor-pointer transition-colors">Changelog</li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold mb-6">Connect</h4>
        <div className="flex gap-4 text-background/60">
          <Instagram className="hover:text-primary cursor-pointer transition-colors" size={22} />
          <Twitter className="hover:text-primary cursor-pointer transition-colors" size={22} />
          <Linkedin className="hover:text-primary cursor-pointer transition-colors" size={22} />
        </div>
      </div>

      <div>
        <h4 className="font-display font-bold mb-6">Stay Updated</h4>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="bg-background/5 border border-background/10 rounded-xl px-4 py-2.5 text-sm w-full focus:outline-none focus:border-primary font-body placeholder:text-background/30"
          />
          <button className="bg-primary p-2.5 rounded-xl text-primary-foreground hover:opacity-90 transition-opacity">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto pt-8 border-t border-background/10 text-center text-xs text-background/30 font-body">
      © 2024 VITA Labs Inc. All rights reserved.
    </div>
  </footer>
);

export default Footer;
