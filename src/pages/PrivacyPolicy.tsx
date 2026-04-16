import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
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
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">1. Information We Access</h2>
              <p>Our extension accesses data from IndiaMART pages only to provide its intended functionality, such as extracting lead-related information that is already visible to the user while browsing the platform. We do not access any hidden or unrelated data beyond what is required for this purpose.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">2. Data Usage</h2>
              <p>The extension processes the information locally within your browser environment to help you organize, manage, and export leads efficiently. This processing is strictly limited to the functionality of the extension, and we do not use this data for any unrelated purposes, marketing activities, or sale of information.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">3. Data Storage</h2>
              <p>We store, collect, or maintain any personal data or lead information on our servers at any point in time. All extracted information remains within your browser or device and is fully under your control. Users are solely responsible for how they choose to store or use the exported data.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">4. Data Sharing</h2>
              <p>We do not sell, share, distribute, or transfer any user data or extracted lead information to third parties under any circumstances. Your data privacy is fully respected and protected.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">5. Permissions</h2>
              <p>The extension only requests permissions that are strictly necessary for its core functionality. This includes accessing IndiaMART pages to read and extract visible data required for lead generation features. No unnecessary or intrusive permissions are requested.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">6. Security</h2>
              <p>We follow standard industry practices to ensure that your data is handled securely within the browser. Since no data is transmitted to external servers, the risk of data exposure is minimized.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">7. Contact Us</h2>
              <p>If you have any questions, concerns, or feedback regarding this Privacy Policy, you can contact us directly at: <span className="text-primary">9904932220</span></p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PrivacyPolicy;
