import { MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/8 blur-[100px] pointer-events-none" />

      <div className="flex items-center gap-2 mb-6">
        <MapPin className="w-8 h-8 text-accent" />
        <h1 className="font-display text-4xl md:text-6xl font-bold glow-text">LifeMap</h1>
      </div>

      <p className="font-display text-lg md:text-2xl text-foreground/90 mb-4 max-w-md">
        11 Cosmic Insights to Map Your Life.
      </p>

      <p className="text-muted-foreground text-sm md:text-base max-w-lg mb-10 leading-relaxed">
        Enter your birth details and discover powerful insights about your personality, career, relationships, and destiny.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#form" className="btn-cosmic text-sm md:text-base">
          Generate My LifeMap
        </a>
        <a href="#features" className="btn-cosmic-outline text-sm md:text-base">
          Discover Your Destiny
        </a>
      </div>

      {/* Sacred geometry hint */}
      <div className="absolute bottom-10 opacity-20 pointer-events-none">
        <div className="w-24 h-24 border border-primary/30 rotate-45 animate-rotate-slow" />
      </div>
    </section>
  );
};

export default HeroSection;
