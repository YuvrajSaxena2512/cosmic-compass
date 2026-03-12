import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Starfield from "@/components/Starfield";
import ReportCard from "@/components/ReportCard";
import ShareSection from "@/components/ShareSection";
import Footer from "@/components/Footer";
import { generateReport } from "@/lib/reportGenerator";
import { MapPin, RotateCcw, Sparkles } from "lucide-react";

const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  useEffect(() => {
    if (!formData) navigate("/");
    window.scrollTo(0, 0);
  }, [formData, navigate]);

  if (!formData) return null;

  const sections = generateReport(formData.fullName, formData.dob);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Starfield />

      {/* Header */}
      <header className="relative z-10 py-6 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-6 h-6 text-accent" />
          <span className="font-display font-bold text-xl">LifeMap</span>
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold glow-text">
          Your LifeMap Report
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          Cosmic blueprint for <span className="text-foreground font-medium">{formData.fullName}</span>
        </p>
      </header>

      {/* Report Cards */}
      <main className="relative z-10 px-4 pb-12">
        <div className="container max-w-2xl mx-auto space-y-5">
          {sections.map((section, i) => (
            <ReportCard key={section.title} section={section} index={i} />
          ))}
        </div>
      </main>

      {/* Ready Message Section */}
      <section className="relative z-10 py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-accent mb-2">
          <Sparkles className="w-5 h-5" />
          <span className="font-display font-bold text-lg">Your LifeMap is ready</span>
          <Sparkles className="w-5 h-5" />
        </div>
        <p className="text-muted-foreground text-sm">
          Your cosmic blueprint has been generated. Now it's time to share your insights.
        </p>
      </section>

      {/* Share Section - NEW sharing feature */}
      <ShareSection userName={formData.fullName} url={window.location.href} />

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4 text-center">
        <div className="container max-w-lg mx-auto glass-card p-8">
          <h2 className="font-display text-2xl font-bold mb-3 glow-text">
            Your LifeMap Is Just the Beginning
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Explore another reading or continue your cosmic journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => navigate("/")} className="btn-cosmic text-sm flex items-center justify-center gap-2">
              <RotateCcw className="w-4 h-4" />
              Generate Another Report
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Report;
