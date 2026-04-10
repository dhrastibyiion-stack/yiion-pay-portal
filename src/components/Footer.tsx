import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container">
      <div className="grid sm:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="font-display text-lg font-bold text-primary mb-3 block">
            Yiion Extension
          </Link>
          <p className="text-sm text-muted-foreground">
            Secure & seamless browser extension payments.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Home", "Features", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-3">
            {["Twitter", "LinkedIn", "GitHub"].map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Yiion Extension. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
