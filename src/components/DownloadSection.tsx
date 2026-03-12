import { Download, Loader } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import html2pdf from "html2pdf.js";

interface DownloadSectionProps {
  userName?: string;
}

const DownloadSection = ({ userName = "LifeMap Report" }: DownloadSectionProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Download the LifeMap report as a PDF
   * Captures the entire report section and converts it to PDF
   * Applies temporary pdf-mode styling for better PDF readability
   */
  const downloadLifeMapPDF = async () => {
    try {
      setIsLoading(true);

      // Get the report element
      const reportElement = document.getElementById("lifemap-report");
      
      if (!reportElement) {
        throw new Error("Report element not found");
      }

      // Add pdf-mode class for print-friendly styling
      reportElement.classList.add("pdf-mode");

      // Clone the element to avoid modifying the original
      const clonedElement = reportElement.cloneNode(true) as HTMLElement;

      // Configure PDF options for high quality output
      const options = {
        margin: [15, 15] as [number, number],  // [top/bottom, left/right] in mm
        filename: "LifeMap_Report.pdf",     // Output filename
        image: { type: "jpeg" as const, quality: 1 },  // Maximum quality
        html2canvas: {
          scale: 3,                         // 3x scale for maximum clarity
          useCORS: true,                    // Handle cross-origin images
          scrollY: 0,                       // Capture from top
          logging: false,                   // Suppress logging
          backgroundColor: "#ffffff",       // White background for PDF
        },
        jsPDF: {
          unit: "mm",                       // Unit: millimeters
          format: "a4",                     // Paper format
          orientation: "portrait" as const, // Portrait orientation
        },
        pagebreak: {
          mode: ["css", "legacy"],          // Use CSS and legacy page-break rules
        },
      };

      // Generate and download PDF
      await html2pdf().set(options).from(clonedElement).save();

      // Show success message
      toast({
        description: "✨ Your LifeMap PDF has been downloaded!",
        duration: 3000,
      });
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast({
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      // Remove pdf-mode class after PDF generation
      const reportElement = document.getElementById("lifemap-report");
      if (reportElement) {
        reportElement.classList.remove("pdf-mode");
      }
      setIsLoading(false);
    }
  };

  return (
    <section className="relative z-10 py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        {/* Card Container with cosmic styling */}
        <div className="glass-card-glow p-8 md:p-10">
          {/* Ready Message Section */}
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold glow-text mb-3">
              Your LifeMap is Ready
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Download your cosmic life insights as a PDF and keep it with you always.
            </p>
          </div>

          {/* Loading State or Button */}
          {isLoading ? (
            <div className="flex items-center justify-center gap-3 py-8">
              <Loader className="w-5 h-5 animate-spin text-accent" />
              <span className="font-display font-semibold text-base">
                Preparing your LifeMap PDF...
              </span>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={downloadLifeMapPDF}
                disabled={isLoading}
                className="group relative px-8 py-4 rounded-xl font-display font-semibold text-base transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
                  color: "hsl(var(--primary-foreground))",
                  boxShadow: "0 0 20px hsl(var(--glow-primary) / 0.4)",
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 30px hsl(var(--glow-primary) / 0.6), 0 0 60px hsl(var(--glow-accent) / 0.3)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 20px hsl(var(--glow-primary) / 0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <Download className="w-5 h-5" />
                <span>Download My LifeMap PDF</span>
              </button>
            </div>
          )}

          {/* Helpful hint text */}
          <p className="text-center text-muted-foreground text-xs md:text-sm mt-8">
            Your LifeMap will be saved as a high-quality PDF that you can print, share, or keep for future reference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
