import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const TermsConditions: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground py-20">
        <div className="container max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">1. Information We Access</h2>
              <p>Our extension accesses data from IndiaMART pages only to provide its intended functionality, such as extracting lead-related information visible to the user.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">2. Data Usage</h2>
              <p>The extension processes the information locally within your browser to help you organize and export leads efficiently. We do not use this data for any unrelated purposes.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">3. Data Storage</h2>
              <p>We do not store, collect, or maintain any personal or lead data on our servers. All extracted information remains under your control and is handled within your local environment unless you choose to export it.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">4. Data Sharing</h2>
              <p>We do not sell, share, or transfer any user data or extracted information to third parties.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">5. Permissions</h2>
              <p>The extension only requests permissions that are necessary for its core functionality, such as accessing IndiaMART pages to extract visible data.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">6. Security</h2>
              <p>We follow standard practices to ensure that your data is handled securely within the extension.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be reflected with an updated "Last Updated" date.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">8. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at: <span className="text-primary">9904932220</span></p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default TermsConditions;
