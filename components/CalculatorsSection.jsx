"use client";

const calcs = [
  { icon: "🔭", label: "Ascendant Calculator", bg: "radial-gradient(circle,#3a0070,#7b1fa2)" },
  { icon: "💎", label: "Gemstone Suggestion", bg: "radial-gradient(circle,#1b5e20,#388e3c)" },
  { icon: "📿", label: "Rudraksha Suggestion", bg: "radial-gradient(circle,#4a2500,#8d4e00)" },
  { icon: "22", label: "Numerology For You", bg: "#1a237e", isText: true },
  { icon: "🐍", label: "Kaalsarp Dosha", bg: "radial-gradient(circle,#003366,#1565c0)" },
  { icon: "🪐", label: "Sadesati Calculator", bg: "radial-gradient(circle,#0d0d2b,#1a237e)" },
  { icon: "🦅", label: "Pitra Dosha Calculator", bg: "radial-gradient(circle,#1a1a1a,#333)" },
  { icon: "🔴", label: "Manglik Dosha Calculator", bg: "radial-gradient(circle,#7f0000,#c62828)" },
  { icon: "🌙", label: "Moon Sign Calculator", bg: "radial-gradient(circle,#1a1a3e,#37474f)" },
];

export default function CalculatorsSection() {
  return (
    <section className="bg-navy py-9">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-5">
          <h2 className="font-playfair text-[1.55rem] font-bold text-white">
            Free Vedic Astrology Calculators
          </h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
          {calcs.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center gap-2 cursor-pointer text-center transition-transform hover:-translate-y-1"
            >
              <div
                className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center text-[28px] shadow-[0_4px_14px_rgba(0,0,0,0.25)] mx-auto"
                style={{ background: c.bg }}
              >
                {c.isText ? (
                  <span className="font-playfair text-[22px] font-extrabold text-[#FFD700]">
                    {c.icon}
                  </span>
                ) : (
                  c.icon
                )}
              </div>
              <div className="text-[11px] font-bold text-white leading-tight">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
