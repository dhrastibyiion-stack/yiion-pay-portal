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
          <h4 className="font-semibold mb-3">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link
              to="/terms-conditions"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
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
