import { LandingContent } from "./_components/landing-content";
import { LandingFooter } from "./_components/landing-footer";
import { LandingHero } from "./_components/landing-hero";
import { LandingNavbar } from "./_components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
