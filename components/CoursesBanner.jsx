"use client";

const courses = [
  {
    name: "Jyotish Beej",
    sub: "Foundation · Origins · Awakening",
    level: "LEVEL-1",
  },
  {
    name: "Jyotish Ankur",
    sub: "Emergence · Clarity · Growth",
    level: "LEVEL-2",
  },
  {
    name: "Jyotish Pallav",
    sub: "Expansion · Understanding",
    level: "LEVEL-3",
  },
];

export default function CoursesBanner() {
  return (
    <section
      className="overflow-hidden relative"
      style={{ background: "linear-gradient(135deg,#7B1200 0%,#c0392b 40%,#922B21 100%)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 py-5 grid grid-cols-1 lg:grid-cols-[1fr_220px] items-center gap-6">
        <div>
          <div className="text-[22px] font-extrabold text-white mb-4">
            Astrology Courses Launched - Enroll Now
          </div>
          <div className="flex gap-3.5 overflow-x-auto courses-slider pb-1">
            {courses.map((c) => (
              <div
                key={c.name}
                className="flex-shrink-0 w-[195px] bg-white rounded-xl overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
              >
                <div
                  className="h-[115px] flex items-center justify-center relative overflow-hidden p-3"
                  style={{ background: "linear-gradient(135deg,#1a0000,#5c0a0a)" }}
                >
                  <span className="absolute top-2 left-2 bg-[#FFD700] text-black text-[9px] font-extrabold px-1.5 py-0.5 rounded-sm tracking-wide">
                    ASTROLOGY COURSE
                  </span>
                  <div className="text-center">
                    <div className="font-playfair text-[16px] font-extrabold text-[#FFD700] leading-tight">
                      {c.name}
                    </div>
                    <div className="text-[9px] text-white/70 mt-1 tracking-wide">{c.sub}</div>
                    <div className="text-[9px] text-white/50 uppercase tracking-widest mt-1">
                      {c.level}
                    </div>
                  </div>
                </div>
                <div className="py-2 px-2.5 text-[12px] font-extrabold text-gray-700 text-center border-t border-slate-100">
                  {c.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center gap-3">
          <div
            className="w-[150px] h-[170px] rounded-xl flex items-end justify-center overflow-hidden text-[90px] relative border border-white/15"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            👨‍💼
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <div className="flex items-center justify-center gap-1.5 rounded-md py-1.5 px-2.5 text-white text-[11px] font-bold bg-[#1877F2]">
              f &nbsp; 447,302+
            </div>
            <div
              className="flex items-center justify-center gap-1.5 rounded-md py-1.5 px-2.5 text-white text-[11px] font-bold"
              style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}
            >
              ◈ &nbsp; 211,320+
            </div>
            <div className="flex items-center justify-center gap-1.5 rounded-md py-1.5 px-2.5 text-white text-[11px] font-bold bg-[#FF0000]">
              ▶ &nbsp; 1,208,551+
            </div>
          </div>
        </div>

        <div className="text-[10.5px] text-white/70 text-right absolute top-5 right-6 bg-white/12 px-2.5 py-1.5 rounded-md border border-white/15 leading-relaxed hidden xl:block">
          International clients can pay via
          <br />
          PayPal at{" "}
          <a href="mailto:mail@vinaybajrangi.com" className="text-[#FFD700] font-bold">
            mail@vinaybajrangi.com
          </a>
        </div>
      </div>
    </section>
  );
}
