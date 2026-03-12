import { Share2, Link2, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ShareSectionProps {
  userName?: string;
  url?: string;
}

const ShareSection = ({ userName = "LifeMap Report", url = window.location.href }: ShareSectionProps) => {
  const { toast } = useToast();

  /**
   * Handle the primary share button
   * Uses Web Share API if available, falls back to clipboard copy
   */
  const handleShare = async () => {
    try {
      if (navigator.share) {
        // Use native share API (mobile devices, some browsers)
        await navigator.share({
          title: `${userName}'s LifeMap`,
          text: "Discover your cosmic insights with LifeMap",
          url: url,
        });
      } else {
        // Fallback: copy to clipboard
        await copyToClipboard(url);
      }
    } catch (error) {
      // User cancelled share dialog or share failed
      if ((error as Error).name !== "AbortError") {
        console.error("Share failed:", error);
        toast({
          description: "Unable to share. Try copying the link instead.",
          variant: "destructive",
        });
      }
    }
  };

  /**
   * Copy report link to clipboard with visual feedback
   */
  const handleCopyLink = async () => {
    try {
      await copyToClipboard(url);
      toast({
        description: "✨ Link copied. Share your LifeMap!",
        duration: 3000,
      });
    } catch {
      toast({
        description: "Failed to copy link. Please try again.",
        variant: "destructive",
      });
    }
  };

  /**
   * Open WhatsApp with the report link
   * WhatsApp will handle the text encoding
   */
  const handleWhatsAppShare = () => {
    try {
      const message = `Check out my LifeMap report here: ${url}`;
      const encoded = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/?text=${encoded}`;
      
      // Open WhatsApp in a new window
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("WhatsApp share failed:", error);
      toast({
        description: "Unable to open WhatsApp.",
        variant: "destructive",
      });
    }
  };

  /**
   * Helper function to copy text to clipboard
   * Supports both modern Clipboard API and legacy methods
   */
  const copyToClipboard = async (text: string): Promise<void> => {
    if (navigator.clipboard && window.isSecureContext) {
      // Modern approach
      await navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      
      try {
        textArea.select();
        document.execCommand("copy");
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  return (
    <section className="relative z-10 py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        {/* Card Container with cosmic styling */}
        <div className="glass-card-glow p-8 md:p-10">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold glow-text mb-2">
              Share Your LifeMap
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Let your friends discover their cosmic insights too.
            </p>
          </div>

          {/* Button Grid - Responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {/* Share Report Button */}
            <button
              onClick={handleShare}
              className="group relative px-4 py-3 rounded-xl font-display font-semibold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
                color: "hsl(var(--primary-foreground))",
                boxShadow: "0 0 20px hsl(var(--glow-primary) / 0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 30px hsl(var(--glow-primary) / 0.6), 0 0 60px hsl(var(--glow-accent) / 0.3)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 20px hsl(var(--glow-primary) / 0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <Share2 className="w-4 h-4" />
              <span>Share Report</span>
            </button>

            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              className="group relative px-4 py-3 rounded-xl font-display font-semibold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                border: "1px solid hsl(var(--primary) / 0.5)",
                color: "hsl(var(--primary))",
                backgroundColor: "hsl(var(--primary) / 0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "hsl(var(--primary) / 0.15)";
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--primary))";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 20px hsl(var(--glow-primary) / 0.3)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "hsl(var(--primary) / 0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--primary) / 0.5)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <Link2 className="w-4 h-4" />
              <span>Copy Link</span>
            </button>

            {/* WhatsApp Share Button */}
            <button
              onClick={handleWhatsAppShare}
              className="group relative px-4 py-3 rounded-xl font-display font-semibold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                border: "1px solid hsl(var(--primary) / 0.5)",
                color: "hsl(var(--primary))",
                backgroundColor: "hsl(var(--primary) / 0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "hsl(var(--primary) / 0.15)";
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--primary))";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 20px hsl(var(--glow-primary) / 0.3)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "hsl(var(--primary) / 0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--primary) / 0.5)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Helpful hint text */}
          <p className="text-center text-muted-foreground text-xs md:text-sm mt-6">
            Share your cosmic blueprint and inspire others to explore their own cosmic journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShareSection;
