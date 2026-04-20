"use client";

const panchItems = [
  { label: "Month", val: "Amanta: Chaitra", sub: "Purnimanta: Vaishakh" },
  { label: "Samvat", val: "Vikram: 2083 Raudra", sub: "Shaka: 1948 Prabhau" },
  { label: "Tithi", val: "Amavasya", sub: "Till 2026-04-17 17:21:39" },
  { label: "Nakshatra", val: "Ashwini", sub: "Till 2026-04-18 09:43:51" },
  { label: "Yog", val: "Vishkumbha", sub: "Till 2026-04-18 03:46:59" },
  { label: "Karan", val: "Naag", sub: "Purnimanta: 2026-04-17" },
];

const services = [
  "Online Report for Horoscope Matching",
  "Will you qualify in UPSC exam 2026/Govt Job?",
  "Should You Invest in the Stock Market?",
  "Know About Child Birth From Birth Chart",
  "Do you have the Yoga to do Business?",
  "Know the Timing of your Marriage",
  "Assess status and personality of your Future Life Partner",
  "2026 Financial Horoscope Based on Your Birth Chart",
  "2026 Career Horoscope Based on Your Birth Chart",
  "2026 Marriage Horoscope Based on Your Birth Chart",
  "2026 Health Horoscope Based on Your Birth Chart",
  "2026 Stock Market Horoscope Based on Your Birth Chart",
];

export default function PanchangServices() {
  return (
    <section className="bg-[#F5F3EF] py-9">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Panchang */}
          <div className="bg-white rounded-xl overflow-hidden shadow-card border border-slate-200">
            <div className="bg-[#E8650A] px-4 py-3 flex items-center justify-between">
              <div>
                <h3 className="text-[16px] font-extrabold text-white">Aaj Ka Panchang</h3>
                <div className="text-[12px] text-white/85 mt-0.5 flex items-center gap-1">
                  📍 New Delhi, India
                </div>
              </div>
              <a href="#" className="bg-white text-[#E8650A] px-3.5 py-1.5 rounded-full text-[12px] font-extrabold whitespace-nowrap flex-shrink-0">
                Detailed Panchang
              </a>
            </div>
            <div className="text-center py-2 text-[12.5px] font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
              Friday, 17 April 2026
            </div>
            <div className="grid grid-cols-4">
              {[
                { icon: "☀️", time: "5:53:52", bg: "bg-[#E8650A]" },
                { icon: "🌇", time: "18:48:1", bg: "bg-[#E8650A]" },
                { icon: "🌕", time: "5:26:7", bg: "bg-navy" },
                { icon: "🌑", time: "18:49:59", bg: "bg-navy" },
              ].map((t, i) => (
                <div key={i} className={`flex flex-col items-center justify-center py-3.5 cursor-pointer transition-opacity hover:opacity-90 ${t.bg}`}>
                  <div className="text-[22px] text-white mb-1">{t.icon}</div>
                  <div className="text-[15px] font-extrabold text-white font-nunito">{t.time}</div>
                </div>
              ))}
            </div>
            <div className="p-3.5">
              <div className="grid grid-cols-2 gap-2.5">
                {panchItems.map((p) => (
                  <div key={p.label} className="bg-[#F5F3EF] rounded-lg px-3 py-2.5">
                    <div className="text-[10.5px] font-bold text-slate-500 tracking-wider uppercase mb-0.5">{p.label}</div>
                    <div className="text-[13.5px] font-bold text-navy leading-tight">{p.val}</div>
                    <div className="text-[10.5px] text-slate-400 mt-0.5">{p.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-xl overflow-hidden shadow-card border border-slate-200">
            <div className="bg-[#E8650A] px-4 py-3.5">
              <h3 className="text-[16px] font-extrabold text-white text-center">Our Services</h3>
            </div>
            <div>
              {services.map((s) => (
                <div key={s} className="flex items-center gap-2.5 px-4 py-2.5 border-b border-slate-100 cursor-pointer hover:bg-[#FFF4ED] transition-colors last:border-b-0">
                  <span className="text-[#E8650A] text-[14px] flex-shrink-0 font-extrabold">›</span>
                  <span className="text-[12.5px] font-semibold text-gray-700 flex-1 leading-tight">{s}</span>
                  <a href="#" className="bg-[#E8650A] text-white px-3.5 py-1.5 rounded-full text-[11px] font-extrabold flex-shrink-0 whitespace-nowrap hover:bg-[#d05a08] transition-colors">
                    Book Now →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
