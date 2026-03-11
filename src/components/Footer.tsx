import { MapPin } from "lucide-react";

const Footer = () => (
  <footer className="relative z-10 border-t border-border/30 py-10 px-4">
    <div className="container max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-accent" />
          <span className="font-display font-bold text-lg">LifeMap</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">About LifeMap</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
        </div>
      </div>
      <p className="text-center text-muted-foreground text-xs mt-6">
        © {new Date().getFullYear()} LifeMap – Discover Your Life Map
      </p>
    </div>
  </footer>
);

export default Footer;
