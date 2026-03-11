import { Star, Sparkles, Moon, Sun, TrendingUp, Heart, DollarSign, Hash, Eye, Clover, Clock } from "lucide-react";

export interface ReportSection {
  icon: React.ElementType;
  title: string;
  content: string[];
}

export const generateReport = (name: string, dob: string): ReportSection[] => {
  const date = new Date(dob);
  const month = date.getMonth();
  const day = date.getDate();

  const signs = ["Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"];
  const signDates = [20,19,21,20,21,21,23,23,23,23,22,22];
  let sunSign = signs[month];
  if (day >= signDates[month]) sunSign = signs[(month + 1) % 12];

  const moonSigns = ["Cancer","Scorpio","Pisces","Taurus","Virgo","Capricorn","Aries","Leo","Sagittarius","Gemini","Libra","Aquarius"];
  const moonSign = moonSigns[month % 12];
  const ascendant = signs[(month + 4) % 12];

  const lifePathNum = String(date.getFullYear() + (month + 1) + day)
    .split("")
    .reduce((a, b) => a + Number(b), 0) % 9 || 9;

  return [
    {
      icon: Sparkles,
      title: "Personality Insights",
      content: [
        `${name}, you carry the energy of a deep thinker with a creative soul.`,
        "Your strengths lie in intuition, empathy, and an ability to see patterns others miss.",
        "Your thinking style blends analytical reasoning with emotional intelligence, making you exceptionally adaptable.",
        "Areas for growth include setting firmer boundaries and trusting your instincts more quickly.",
      ],
    },
    {
      icon: Sun,
      title: "Sun Sign Report",
      content: [
        `Your Sun Sign is ${sunSign} — the core of your identity and purpose.`,
        `As a ${sunSign}, you are driven by ambition and a deep desire for authenticity.`,
        "Your life's purpose revolves around creating lasting impact and inspiring those around you.",
        "Embrace your natural leadership qualities to unlock your highest potential.",
      ],
    },
    {
      icon: Moon,
      title: "Moon Sign Report",
      content: [
        `Your Moon Sign is ${moonSign} — governing your emotions and inner world.`,
        "You process emotions deeply and need time for reflection to stay balanced.",
        "Your emotional intelligence is your superpower in relationships and creative pursuits.",
        "Create sacred spaces for solitude to recharge your emotional energy.",
      ],
    },
    {
      icon: Eye,
      title: "Ascendant (Rising Sign)",
      content: [
        `Your Ascendant is ${ascendant} — how the world perceives you.`,
        "First impressions reveal someone magnetic, composed, and quietly powerful.",
        "Others are drawn to your aura of mystery and depth of character.",
        "Use this natural charisma to open doors in both personal and professional life.",
      ],
    },
    {
      icon: TrendingUp,
      title: "Career Prediction",
      content: [
        "Your cosmic alignment favors creative and analytical fields alike.",
        "Best career paths: Technology, design, psychology, entrepreneurship, or healing arts.",
        "Your work style thrives in environments that value innovation and autonomy.",
        "A major career breakthrough is indicated in the next 2–3 years — stay open to unexpected opportunities.",
      ],
    },
    {
      icon: Heart,
      title: "Relationship Insights",
      content: [
        "In love, you seek deep emotional connection over surface-level attraction.",
        "Your ideal partner matches your intellectual curiosity and emotional depth.",
        `Most compatible signs: ${signs[(month + 4) % 12]} and ${signs[(month + 8) % 12]}.`,
        "Your loyalty and devotion make you a transformative partner — but remember to communicate your needs.",
      ],
    },
    {
      icon: DollarSign,
      title: "Money & Wealth Traits",
      content: [
        "You have a natural instinct for wealth creation, though you may undervalue your skills.",
        "Your financial habits lean towards strategic saving with occasional impulsive generosity.",
        "Best wealth-building approach: Long-term investments and creative side ventures.",
        "A period of financial growth is approaching — prepare by building solid foundations now.",
      ],
    },
    {
      icon: Hash,
      title: "Numerology Report",
      content: [
        `Your Life Path Number is ${lifePathNum} — a number of ${lifePathNum === 1 ? "leadership" : lifePathNum === 7 ? "wisdom" : lifePathNum === 9 ? "compassion" : "transformation"} and purpose.`,
        `Destiny Number: ${(lifePathNum + 3) % 9 || 9} — revealing your soul's ultimate mission.`,
        "These numbers suggest a life of meaningful impact and spiritual evolution.",
        "Align your daily choices with these numbers for enhanced flow and synchronicity.",
      ],
    },
    {
      icon: Star,
      title: "Kundli Overview",
      content: [
        "Your birth chart reveals a strong planetary alignment favoring wisdom and resilience.",
        `Key planetary influences: ${sunSign} Sun, ${moonSign} Moon, ${ascendant} Rising.`,
        "Your chart shows a powerful conjunction that amplifies your creative and leadership abilities.",
        "Understanding your Kundli helps you navigate challenges with cosmic awareness.",
      ],
    },
    {
      icon: Clover,
      title: "Lucky Elements",
      content: [
        `Lucky Numbers: ${lifePathNum}, ${(lifePathNum * 3) % 10}, ${(lifePathNum + 7) % 10}`,
        `Lucky Colors: ${["Violet", "Indigo", "Emerald", "Gold", "Silver", "Crimson", "Sapphire", "Amber", "Teal"][lifePathNum - 1]} and ${["Midnight Blue", "Rose Gold", "Forest Green", "Pearl White", "Royal Purple", "Copper", "Sky Blue", "Coral", "Champagne"][lifePathNum - 1]}`,
        `Lucky Days: ${["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Wednesday"][lifePathNum - 1]} and ${["Thursday", "Saturday", "Friday", "Sunday", "Tuesday", "Monday", "Saturday", "Wednesday", "Friday"][lifePathNum - 1]}`,
        "Align important decisions with your lucky elements for maximum cosmic support.",
      ],
    },
    {
      icon: Clock,
      title: "Life Timeline",
      content: [
        "Ages 0–18: Foundation period — building identity and discovering innate talents.",
        "Ages 18–30: Exploration phase — rapid growth, key relationships, and career foundations.",
        "Ages 30–45: Manifestation era — reaping rewards of early efforts, major life milestones.",
        "Ages 45+: Wisdom chapter — mentorship, legacy building, and spiritual deepening.",
      ],
    },
  ];
};
