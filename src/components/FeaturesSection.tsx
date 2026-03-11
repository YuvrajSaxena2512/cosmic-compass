import { Sparkles, TrendingUp, Heart, Hash, Sun, Clock } from "lucide-react";

const features = [
  { icon: TrendingUp, label: "Career Prediction", desc: "Discover your ideal career path" },
  { icon: Sparkles, label: "Personality Insights", desc: "Understand your true self" },
  { icon: Heart, label: "Relationship Analysis", desc: "Decode your love language" },
  { icon: Hash, label: "Numerology Report", desc: "Numbers that define you" },
  { icon: Sun, label: "Kundli Overview", desc: "Your cosmic birth chart" },
  { icon: Clock, label: "Life Timeline", desc: "Major life phases ahead" },
];

const FeaturesSection = () => {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 glow-text">
          11 Cosmic Insights
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Unlock deep knowledge about every dimension of your life through ancient wisdom and modern astrology.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`glass-card p-5 md:p-6 text-center group hover:glow-border transition-all duration-500 animate-slide-up`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-sm md:text-base mb-1">{f.label}</h3>
              <p className="text-muted-foreground text-xs">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#form" className="btn-cosmic-outline inline-block text-sm">
            Unlock All 11 Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
