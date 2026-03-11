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
  const year = date.getFullYear();

  const signs = ["Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"];
  const signDates = [20,19,21,20,21,21,23,23,23,23,22,22];
  let sunSign = signs[month];
  if (day >= signDates[month]) sunSign = signs[(month + 1) % 12];

  const moonSigns = ["Cancer","Scorpio","Pisces","Taurus","Virgo","Capricorn","Aries","Leo","Sagittarius","Gemini","Libra","Aquarius"];
  const moonSign = moonSigns[month % 12];
  const ascendant = signs[(month + 4) % 12];

  const lifePathNum = String(year + (month + 1) + day)
    .split("")
    .reduce((a, b) => a + Number(b), 0) % 9 || 9;

  const elements: Record<string, string> = {
    Aries: "Fire", Taurus: "Earth", Gemini: "Air", Cancer: "Water",
    Leo: "Fire", Virgo: "Earth", Libra: "Air", Scorpio: "Water",
    Sagittarius: "Fire", Capricorn: "Earth", Aquarius: "Air", Pisces: "Water",
  };
  const rulers: Record<string, string> = {
    Aries: "Mars", Taurus: "Venus", Gemini: "Mercury", Cancer: "Moon",
    Leo: "Sun", Virgo: "Mercury", Libra: "Venus", Scorpio: "Pluto",
    Sagittarius: "Jupiter", Capricorn: "Saturn", Aquarius: "Uranus", Pisces: "Neptune",
  };
  const qualities: Record<string, string> = {
    Aries: "Cardinal", Taurus: "Fixed", Gemini: "Mutable", Cancer: "Cardinal",
    Leo: "Fixed", Virgo: "Mutable", Libra: "Cardinal", Scorpio: "Fixed",
    Sagittarius: "Mutable", Capricorn: "Cardinal", Aquarius: "Fixed", Pisces: "Mutable",
  };

  const sunElement = elements[sunSign] || "Fire";
  const sunRuler = rulers[sunSign] || "Sun";
  const sunQuality = qualities[sunSign] || "Cardinal";
  const moonElement = elements[moonSign] || "Water";
  const ascElement = elements[ascendant] || "Air";

  const compatSigns = [signs[(month + 4) % 12], signs[(month + 8) % 12], signs[(month + 6) % 12]];

  const lifePathTraits: Record<number, string> = {
    1: "leadership, independence, and pioneering spirit",
    2: "diplomacy, partnership, and emotional sensitivity",
    3: "creativity, self-expression, and joyful communication",
    4: "stability, hard work, and building lasting foundations",
    5: "freedom, adventure, and embracing change",
    6: "responsibility, nurturing, and harmonious service",
    7: "wisdom, introspection, and spiritual seeking",
    8: "ambition, material mastery, and executive power",
    9: "compassion, universal love, and humanitarian vision",
  };

  const destinyNum = (lifePathNum + 3) % 9 || 9;
  const soulUrgeNum = (lifePathNum + 5) % 9 || 9;
  const expressionNum = (lifePathNum + 2) % 9 || 9;

  const wealthFields = [
    ["Technology & AI startups", "Real estate investment", "Stock market trading"],
    ["Consulting & advisory services", "Digital marketing agencies", "Content creation & monetization"],
    ["E-commerce & online retail", "Healthcare & wellness industry", "Financial planning & wealth management"],
    ["Creative arts & design", "Education technology", "Sustainable energy ventures"],
    ["SaaS product development", "Franchise ownership", "Import-export business"],
    ["Cryptocurrency & blockchain", "Property development", "Luxury goods & services"],
    ["Coaching & personal development", "Media & entertainment", "Agricultural innovation"],
    ["App development & tech solutions", "Restaurant & hospitality chains", "Insurance & fintech"],
    ["Social enterprise & impact investing", "Publishing & intellectual property", "Freelance consulting empire"],
  ];

  const currentAge = new Date().getFullYear() - year;

  return [
    {
      icon: Sparkles,
      title: "Personality Insights",
      content: [
        `${name}, you carry the energy of a deep thinker with a creative soul, shaped by the ${sunElement} element and guided by ${sunRuler}.`,
        `Core Personality Type: You are a visionary ${sunQuality} personality — someone who initiates change and inspires others through authentic action.`,
        "Your Top 5 Strengths: Intuition, empathy, pattern recognition, adaptability, and strategic thinking set you apart from the crowd.",
        "Your thinking style blends analytical reasoning with emotional intelligence, making you exceptionally versatile in problem-solving.",
        `Shadow Traits to Watch: Overthinking, perfectionism, and occasional self-doubt can slow your momentum — awareness is the first step to mastery.`,
        "Communication Style: You express yourself best through thoughtful, well-crafted dialogue. People remember your words long after conversations end.",
        "Decision-Making Pattern: You tend to weigh logic and intuition equally, which leads to well-rounded but sometimes delayed decisions.",
        "Emotional Intelligence Score: Exceptionally high — you naturally read rooms, sense unspoken tensions, and adapt your approach accordingly.",
        "Areas for Growth: Setting firmer boundaries, trusting your instincts more quickly, and embracing imperfection will accelerate your personal evolution.",
        "Hidden Talent: You have an untapped gift for teaching and mentoring — sharing knowledge amplifies your own growth exponentially.",
      ],
    },
    {
      icon: Sun,
      title: "Sun Sign Report",
      content: [
        `Your Sun Sign is ${sunSign} — the core of your identity, ego, and life purpose.`,
        `Element: ${sunElement} | Quality: ${sunQuality} | Ruling Planet: ${sunRuler}`,
        `As a ${sunSign}, you are driven by a deep desire for authenticity and meaningful achievement in everything you pursue.`,
        `${sunRuler} as your ruling planet gifts you with ${sunRuler === "Mars" ? "fierce determination and courage" : sunRuler === "Venus" ? "charm, beauty, and artistic sensibility" : sunRuler === "Mercury" ? "quick wit and intellectual brilliance" : sunRuler === "Jupiter" ? "expansive optimism and philosophical depth" : sunRuler === "Saturn" ? "discipline, patience, and enduring ambition" : "unique vision and transformative power"}.`,
        "Your life's purpose revolves around creating lasting impact — you're not here for temporary wins but for legacy-building achievements.",
        `The ${sunElement} element in your chart fuels your ${sunElement === "Fire" ? "passion, creativity, and bold action" : sunElement === "Earth" ? "practicality, determination, and material wisdom" : sunElement === "Air" ? "intellectual curiosity, social grace, and communication mastery" : "emotional depth, intuitive power, and healing abilities"}.`,
        "Your solar energy peaks during periods of creative expression and authentic leadership — seek roles that let you shine.",
        "Potential Pitfalls: Avoid ego-driven decisions and stay humble in success — your greatest power comes from serving something larger than yourself.",
        "Solar Return Insight: Each birthday marks a fresh cosmic cycle — set powerful intentions within 48 hours of your birthday for maximum manifestation energy.",
        "Embrace your natural leadership qualities and don't shrink from the spotlight when it finds you.",
      ],
    },
    {
      icon: Moon,
      title: "Moon Sign Report",
      content: [
        `Your Moon Sign is ${moonSign} — governing your emotions, instincts, and deepest inner world.`,
        `Moon Element: ${moonElement} | This shapes how you process feelings and seek emotional security.`,
        `With a ${moonSign} Moon, your emotional landscape is ${moonElement === "Water" ? "deep, intuitive, and profoundly empathetic" : moonElement === "Earth" ? "stable, grounded, and security-oriented" : moonElement === "Fire" ? "passionate, spontaneous, and intensely expressive" : "intellectual, communicative, and emotionally adaptable"}.`,
        "You process emotions deeply and need time for reflection to stay balanced — rushing through feelings leads to inner conflict.",
        "Your emotional triggers often connect to themes of security, recognition, and belonging — understanding these patterns is liberating.",
        "Emotional Superpower: Your ability to sense others' emotional states gives you a rare gift in relationships and creative pursuits.",
        "Stress Response Pattern: Under pressure, you tend to withdraw inward first, process deeply, then emerge with clarity — honor this natural rhythm.",
        `Nurturing Style: You show love through ${moonElement === "Water" ? "deep emotional presence and empathetic listening" : moonElement === "Earth" ? "practical acts of service and creating stability" : moonElement === "Fire" ? "enthusiastic encouragement and protective loyalty" : "stimulating conversation and mental connection"}.`,
        "Create sacred spaces for solitude to recharge your emotional energy — nature, meditation, and creative expression are your best healing tools.",
        "Your Moon sign suggests a strong connection to your mother or maternal figures — these relationships hold important life lessons for you.",
      ],
    },
    {
      icon: Eye,
      title: "Ascendant (Rising Sign)",
      content: [
        `Your Ascendant is ${ascendant} — the mask you wear and how the world first perceives you.`,
        `Rising Element: ${ascElement} | This colors your physical appearance, style, and first-impression energy.`,
        `With ${ascendant} Rising, first impressions reveal someone ${ascElement === "Fire" ? "dynamic, confident, and magnetically energetic" : ascElement === "Earth" ? "composed, reliable, and quietly powerful" : ascElement === "Air" ? "charming, intellectual, and socially graceful" : "mysterious, emotionally perceptive, and deeply alluring"}.`,
        "Your physical presence commands attention — people notice you before you even speak, drawn by an intangible aura of depth.",
        "Others are drawn to your natural charisma and see you as someone who has their life together, even when you feel uncertain.",
        `Style & Aesthetic: Your rising sign favors ${ascElement === "Fire" ? "bold colors, statement pieces, and confident fashion choices" : ascElement === "Earth" ? "classic, refined, and high-quality wardrobe staples" : ascElement === "Air" ? "trendy, eclectic, and intellectually expressive fashion" : "dark, flowing, and mysteriously elegant attire"}.`,
        `Social Persona: You naturally take on the role of ${ascendant === "Aries" || ascendant === "Leo" ? "the leader and initiator in social settings" : ascendant === "Libra" || ascendant === "Gemini" ? "the connector and communicator" : ascendant === "Cancer" || ascendant === "Pisces" ? "the empathetic listener and emotional anchor" : "the strategic observer and quiet influencer"}.`,
        `Your Ascendant also influences your physical constitution — pay attention to ${ascElement === "Fire" ? "inflammation, head, and energy management" : ascElement === "Earth" ? "digestion, bones, and physical endurance" : ascElement === "Air" ? "respiratory health, nervous system, and mental rest" : "fluid balance, emotional eating, and immune support"}.`,
        "Use this natural charisma to open doors in both personal and professional life — your first impression is your secret weapon.",
      ],
    },
    {
      icon: TrendingUp,
      title: "Career Prediction",
      content: [
        `Your cosmic alignment of ${sunSign} Sun, ${moonSign} Moon, and ${ascendant} Rising creates a powerful career blueprint.`,
        `Dominant Career Energy: ${sunElement} element dominance suggests you excel in ${sunElement === "Fire" ? "leadership, entrepreneurship, and performance-based roles" : sunElement === "Earth" ? "finance, management, architecture, and operations" : sunElement === "Air" ? "communications, technology, law, and media" : "healthcare, psychology, arts, and spiritual services"}.`,
        "Top 5 Career Paths: Technology & innovation, creative design, psychology & counseling, entrepreneurship, and healing arts.",
        "Your work style thrives in environments that value innovation, autonomy, and intellectual freedom — avoid rigid, micromanaged workplaces.",
        `Leadership Style: You lead through ${sunQuality === "Cardinal" ? "initiative and decisive action" : sunQuality === "Fixed" ? "determination, loyalty, and steady vision" : "adaptability, innovation, and creative problem-solving"}.`,
        "Ideal Work Environment: Remote-friendly, mission-driven organizations or your own ventures where you control the vision and pace.",
        "Skills to Develop: Public speaking, strategic networking, and financial literacy will accelerate your career trajectory significantly.",
        "Side Hustle Potential: Your chart strongly supports building income streams through content creation, consulting, or digital products.",
        `Career Timing: A major breakthrough is indicated ${currentAge < 30 ? "in your late 20s to early 30s" : currentAge < 40 ? "within the next 2-3 years" : "in this current phase"} — stay open to unexpected opportunities and be ready to pivot.`,
        "Avoid Career Trap: Don't settle for financial security alone — your soul needs purpose-driven work to truly thrive and avoid burnout.",
        `Your planetary ruler suggests peak productivity hours in the ${sunElement === "Fire" ? "morning (6am–12pm)" : sunElement === "Earth" ? "mid-morning to afternoon (9am–3pm)" : sunElement === "Air" ? "afternoon to evening (2pm–8pm)" : "late evening to night (8pm–2am)"}.`,
      ],
    },
    {
      icon: Heart,
      title: "Relationship Insights",
      content: [
        `Love Profile: ${sunSign} Sun with ${moonSign} Moon creates a partner who is both ${sunElement === "Fire" ? "passionate and intensely loyal" : sunElement === "Earth" ? "devoted and endlessly reliable" : sunElement === "Air" ? "intellectually stimulating and communicative" : "emotionally profound and deeply nurturing"}.`,
        "In love, you seek deep emotional connection over surface-level attraction — small talk bores you, but soul-level conversation captivates you.",
        "Your ideal partner matches your intellectual curiosity and emotional depth while complementing your blind spots.",
        `Most Compatible Signs: ${compatSigns[0]}, ${compatSigns[1]}, and ${compatSigns[2]} — these signs harmonize with your elemental and emotional needs.`,
        `Challenging Matches: ${signs[(month + 3) % 12]} and ${signs[(month + 9) % 12]} — these require more conscious effort but can become powerful growth partnerships.`,
        "Your Love Language: A blend of quality time and acts of service — you show love through presence and thoughtful actions, not grand gestures.",
        "Attachment Style: You lean towards ${moonElement === "Water" ? "anxious attachment — you love deeply but fear abandonment" : moonElement === "Earth" ? "secure attachment — you're stable but need consistency from partners" : moonElement === "Fire" ? "passionate attachment — you love intensely but need independence" : "avoidant tendencies — you value mental connection but need personal space"}.",
        "Red Flags You Ignore: Your empathetic nature sometimes makes you overlook manipulation, inconsistency, and emotional unavailability — trust actions over words.",
        "Relationship Timing: Your chart suggests significant romantic milestones around ages ${Math.max(18, currentAge)}, ${Math.max(25, currentAge + 3)}, and ${Math.max(30, currentAge + 7)}.",
        "Your loyalty and devotion make you a transformative partner — but remember to communicate your needs openly instead of expecting others to intuit them.",
        "Friendship Insight: You prefer a small circle of deep, meaningful friendships over a large network of acquaintances — quality over quantity defines your social world.",
      ],
    },
    {
      icon: DollarSign,
      title: "Money & Wealth Traits",
      content: [
        `Wealth Archetype: With your ${sunSign} energy and Life Path ${lifePathNum}, you are a "${lifePathNum <= 3 ? "Creative Wealth Builder" : lifePathNum <= 6 ? "Strategic Accumulator" : "Visionary Investor"}" — someone who builds wealth through ${lifePathNum <= 3 ? "innovation and unique ideas" : lifePathNum <= 6 ? "disciplined planning and smart systems" : "big-picture thinking and transformative ventures"}.`,
        "You have a natural instinct for wealth creation, though you may undervalue your skills and charge less than you're worth.",
        "Financial Personality: Your spending habits lean towards strategic saving with occasional impulsive generosity — you're generous to a fault with loved ones.",
        `Fields You'll Excel In Financially: ${wealthFields[lifePathNum - 1].join(", ")}.`,
        `Money Mindset Block: Your biggest financial obstacle is ${sunElement === "Fire" ? "impatience — you want results too fast and may abandon profitable ventures prematurely" : sunElement === "Earth" ? "fear of risk — your need for security can cause you to miss high-reward opportunities" : sunElement === "Air" ? "scattered focus — too many ideas dilute your earning potential" : "emotional spending — your mood directly impacts your financial decisions"}.`,
        "Best Wealth-Building Strategy: Long-term investments, real estate, and creative side ventures that leverage your unique skills and knowledge.",
        "Income Streams: Your chart supports building 3-5 income streams — don't rely on a single source. Diversification is your financial superpower.",
        `Investment Style: You perform best with ${sunElement === "Fire" ? "growth stocks, startups, and aggressive portfolios" : sunElement === "Earth" ? "real estate, index funds, and stable dividend stocks" : sunElement === "Air" ? "tech stocks, cryptocurrency, and intellectual property" : "value investing, bonds, and socially responsible funds"}.`,
        `Peak Earning Years: Your chart indicates significant wealth accumulation between ages ${Math.max(28, currentAge)} and ${Math.max(45, currentAge + 15)}.`,
        "Financial Habits to Adopt: Automate savings (at least 20% of income), invest in financial education, and build an emergency fund covering 6 months of expenses.",
        "Generosity & Wealth: Interestingly, your chart shows that the more generously you give (to worthy causes), the more wealth flows back to you — abundance follows generosity.",
        "A period of financial growth is approaching — prepare by eliminating debt, building skills, and positioning yourself in high-growth industries.",
      ],
    },
    {
      icon: Hash,
      title: "Numerology Report",
      content: [
        `Your Life Path Number is ${lifePathNum} — the master number of ${lifePathTraits[lifePathNum]}.`,
        `This number reveals your life's core purpose: to embody ${lifePathTraits[lifePathNum]} in everything you do.`,
        `Destiny Number: ${destinyNum} — this reveals your soul's ultimate mission and the legacy you're meant to leave behind.`,
        `Soul Urge Number: ${soulUrgeNum} — this governs your deepest desires, secret motivations, and what truly makes your heart sing.`,
        `Expression Number: ${expressionNum} — this shapes how you present yourself to the world and the talents you're meant to develop.`,
        `Birthday Number: ${day} — this adds a unique flavor to your personality: ${day <= 10 ? "originality and pioneering energy" : day <= 20 ? "cooperation and emotional sensitivity" : "practical wisdom and material mastery"}.`,
        "Personal Year Cycle: You are currently in a ${(year + month + day) % 9 || 9} Personal Year — a period of ${((year + month + day) % 9 || 9) <= 3 ? 'new beginnings and planting seeds' : ((year + month + day) % 9 || 9) <= 6 ? 'building, nurturing, and stabilizing' : 'harvesting rewards and preparing for transformation'}.",
        "Karmic Lessons: Your number pattern suggests past-life themes around ${lifePathNum <= 3 ? "self-expression and creative courage" : lifePathNum <= 6 ? "responsibility, service, and unconditional love" : "spiritual wisdom, trust, and letting go of control"}.",
        "These numbers combined suggest a life of meaningful impact, spiritual evolution, and continuous growth.",
        "Align your daily choices with these numbers for enhanced flow and synchronicity — notice when these numbers appear in your life as cosmic confirmations.",
        "Master Number Influence: ${lifePathNum === 1 || lifePathNum === 2 ? "You carry echoes of Master Number 11 — heightened intuition and spiritual awareness" : lifePathNum === 4 || lifePathNum === 8 ? "You resonate with Master Number 22 — the Master Builder energy of manifesting grand visions" : "You connect with Master Number 33 — the Master Teacher energy of healing and uplifting others"}.",
      ],
    },
    {
      icon: Star,
      title: "Kundli Overview",
      content: [
        "Your birth chart (Kundli) reveals a powerful cosmic blueprint designed for wisdom, resilience, and purposeful living.",
        `Key Planetary Configuration: ${sunSign} Sun, ${moonSign} Moon, ${ascendant} Rising — this triad forms the foundation of your cosmic identity.`,
        `Elemental Balance: Your chart shows strong ${sunElement} and ${moonElement} energy — ${sunElement === moonElement ? "creating a concentrated and powerful elemental focus" : "creating a dynamic interplay between different modes of expression"}.`,
        `Ruling Planet Influence: ${sunRuler} governs your primary life direction, blessing you with ${sunRuler === "Mars" ? "warrior energy and unstoppable drive" : sunRuler === "Venus" ? "artistic gifts and magnetic attraction" : sunRuler === "Mercury" ? "brilliant communication and adaptable intelligence" : sunRuler === "Jupiter" ? "wisdom, luck, and expansive opportunities" : sunRuler === "Saturn" ? "discipline, longevity, and karmic mastery" : "visionary gifts and transformative power"}.`,
        "Your chart shows a powerful conjunction that amplifies your creative and leadership abilities — rare planetary alignments support your ambitions.",
        `Planetary Strength: Your strongest houses are the ${(month % 3) + 1}st, ${(month % 3) + 5}th, and ${(month % 3) + 9}th houses — governing ${(month % 3) === 0 ? "self, creativity, and philosophy" : (month % 3) === 1 ? "wealth, partnerships, and transformation" : "communication, service, and career"}.`,
        "Dasha Period: Your current planetary period favors focused effort in career and personal development — use this energy wisely.",
        "Yogas in Your Chart: Positive yogas indicate potential for material success, intellectual achievement, and spiritual growth.",
        "Manglik Status: Your chart ${day % 2 === 0 ? "shows mild Manglik influence — easily balanced through awareness and compatible partnerships" : "is largely free from Manglik effects — relationships flow with greater ease"}.",
        "Understanding your Kundli helps you navigate challenges with cosmic awareness and make decisions aligned with your highest potential.",
      ],
    },
    {
      icon: Clover,
      title: "Lucky Elements",
      content: [
        `Lucky Numbers: ${lifePathNum}, ${(lifePathNum * 3) % 10}, ${(lifePathNum + 7) % 10}, ${(lifePathNum * 2 + 1) % 10}, and ${(lifePathNum + 4) % 10}`,
        `Primary Lucky Color: ${["Violet", "Indigo", "Emerald", "Gold", "Silver", "Crimson", "Sapphire", "Amber", "Teal"][lifePathNum - 1]} — wear this during important meetings and decisions.`,
        `Secondary Lucky Color: ${["Midnight Blue", "Rose Gold", "Forest Green", "Pearl White", "Royal Purple", "Copper", "Sky Blue", "Coral", "Champagne"][lifePathNum - 1]} — use in your environment and accessories.`,
        `Power Color: ${["Red", "Blue", "Yellow", "Green", "Orange", "White", "Black", "Purple", "Pink"][lifePathNum - 1]} — this color amplifies your confidence and energy.`,
        `Lucky Days: ${["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Wednesday"][lifePathNum - 1]} and ${["Thursday", "Saturday", "Friday", "Sunday", "Tuesday", "Monday", "Saturday", "Wednesday", "Friday"][lifePathNum - 1]} — schedule important activities on these days.`,
        `Lucky Gemstone: ${["Amethyst", "Moonstone", "Emerald", "Ruby", "Diamond", "Pearl", "Blue Sapphire", "Yellow Sapphire", "Red Coral"][lifePathNum - 1]} — wearing this stone can enhance your natural planetary vibrations.`,
        `Lucky Metal: ${["Silver", "Gold", "Copper", "Platinum", "Bronze", "Silver", "Iron", "Gold", "Copper"][lifePathNum - 1]} — incorporating this metal in jewelry amplifies your cosmic connection.`,
        `Lucky Direction: ${["North", "South-East", "East", "South", "West", "North-West", "North-East", "South-West", "East"][lifePathNum - 1]} — face this direction during meditation, study, or important work.`,
        `Auspicious Time of Day: ${sunElement === "Fire" ? "Sunrise to mid-morning" : sunElement === "Earth" ? "Late morning to afternoon" : sunElement === "Air" ? "Afternoon to sunset" : "Twilight to midnight"} — your energy peaks during these hours.`,
        "Align important decisions — job interviews, business launches, proposals — with your lucky elements for maximum cosmic support.",
      ],
    },
    {
      icon: Clock,
      title: "Life Timeline",
      content: [
        "Ages 0–12: Foundation Period — building core identity, discovering innate talents, and forming foundational beliefs that shape your entire life journey.",
        "Ages 13–18: Awakening Phase — identity exploration, first meaningful relationships, academic direction crystallizes, and early signs of life purpose emerge.",
        "Ages 18–25: Exploration Era — rapid personal growth, higher education or skill building, first career steps, and pivotal relationship experiences.",
        "Ages 25–30: Definition Phase — career establishment, financial independence, deeper self-awareness, and life-defining decisions about partnerships and direction.",
        "Ages 30–35: Acceleration Period — professional momentum builds, potential for marriage/family milestones, and increased confidence in your unique path.",
        "Ages 35–42: Manifestation Era — reaping rewards of early efforts, major life milestones achieved, leadership roles emerge, and wealth accumulation accelerates.",
        "Ages 42–50: Mastery Phase — peak career influence, mentorship opportunities, reassessing life priorities, and aligning actions with deeper purpose.",
        "Ages 50–60: Wisdom Chapter — sharing accumulated knowledge, legacy projects take shape, relationships deepen, and spiritual awareness expands significantly.",
        "Ages 60–75: Legacy Period — enjoying fruits of lifelong effort, mentoring next generations, pursuing passion projects, and contributing to community.",
        "Ages 75+: Transcendence Phase — spiritual fulfillment, deep inner peace, leaving an enduring legacy, and inspiring others through the wisdom of a life fully lived.",
        `Current Phase Insight (Age ~${currentAge}): You are ${currentAge < 18 ? "in your foundation years — focus on learning and self-discovery" : currentAge < 25 ? "in your exploration era — take risks and gather diverse experiences" : currentAge < 30 ? "defining your path — make bold moves now" : currentAge < 42 ? "in your manifestation era — your efforts are about to pay off significantly" : "in your mastery phase — your wisdom and experience are your greatest assets"}.`,
      ],
    },
  ];
};
