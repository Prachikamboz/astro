"use client";

const serviceTypes = [
  { icon: "👥", label: "Consultation" },
  { icon: "📄", label: "Online Report" },
  { icon: "🎙️", label: "Voice Report" },
  { icon: "🔄", label: "Life Readings" },
];

const promoBanners = [
  {
    title: (
      <>
        Know What Your <span className="text-[#FFD700]">Future Life Partner</span> Will Be Like
      </>
    ),
    sub: "Get detailed personality & compatibility insights",
    bg: "linear-gradient(135deg,#1565C0,#1976D2)",
  },
  {
    title: (
      <>
        Know <span className="text-[#FFD700]">When You Will Get Married</span>
      </>
    ),
    sub: "Precise marriage timing from your birth chart",
    bg: "linear-gradient(135deg,#7B1FA2,#9C27B0)",
  },
  {
    title: (
      <>
        Know If You Have <span className="text-[#FFD700]">The Yoga to Do Business</span>
      </>
    ),
    sub: "Business potential analysis from Vedic astrology",
    bg: "linear-gradient(135deg,#2E7D32,#388E3C)",
  },
];

export default function ServiceTypes() {
  return (
    <section className="bg-white py-7">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {serviceTypes.map((s) => (
            <div
              key={s.label}
              className="bg-[#E8650A] rounded-xl px-4 py-5 flex flex-col items-center gap-2.5 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(232,101,10,0.3)]"
            >
              <div className="text-[36px] text-white">{s.icon}</div>
              <div className="text-[14px] font-extrabold text-white text-center">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {promoBanners.map((p, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden cursor-pointer transition-transform hover:-translate-y-0.5 min-h-[90px]"
            >
              <div
                className="p-5 text-white min-h-[90px] flex flex-col justify-center h-full"
                style={{ background: p.bg }}
              >
                <div className="text-[16px] font-extrabold leading-tight mb-1">{p.title}</div>
                <div className="text-[12px] text-white/80">{p.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
