import { ReportSection } from "@/lib/reportGenerator";

interface ReportCardProps {
  section: ReportSection;
  index: number;
}

const ReportCard = ({ section, index }: ReportCardProps) => {
  const Icon = section.icon;

  return (
    <div
      className="glass-card-glow page-section report-section p-6 animate-slide-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <h3 className="font-display font-bold text-lg">{section.title}</h3>
      </div>
      <div className="space-y-3">
        {section.content.map((line, i) => (
          <p key={i} className="text-muted-foreground text-sm leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ReportCard;
