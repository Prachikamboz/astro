"use client";

export default function Footer() {
  return (
    <footer
      className="text-slate-300 pt-20 pb-8 font-nunito overflow-hidden relative footer-glow"
      style={{ background: "radial-gradient(circle at top right, #1e1e3f, #0a0a12)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div
              className="font-playfair text-[24px] mb-3.5"
              style={{
                background: "linear-gradient(to right, #fff, #ffcc33)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dr. Ramnik Sharma
            </div>
            <p className="text-[14px] leading-relaxed text-slate-400 mb-5">
              Mastering the celestial arts through the lens of Karmic Theory. We provide deep
              insights to help you navigate your destiny with clarity and purpose.
            </p>
            <div className="flex gap-3">
              {["fb", "𝕏", "in", "yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-white text-sm transition-all duration-300 hover:scale-110 hover:rotate-6 hover:bg-[#ffcc33] hover:text-black"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="text-white text-[13px] font-bold uppercase tracking-[2px] mb-6 flex items-center gap-2.5">
              Explore
              <span className="h-0.5 w-7 bg-[#ffcc33] inline-block" />
            </div>
            <div className="flex flex-col gap-3">
              {["Daily Horoscope", "Free Kundli", "Today's Panchang", "Astrology Tools", "Success Stories"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-slate-300 text-[14px] transition-all duration-300 px-3 py-2 rounded-lg -ml-3 hover:text-[#ffcc33] hover:pl-5"
                  style={{ transition: "all 0.3s ease" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-white text-[13px] font-bold uppercase tracking-[2px] mb-6 flex items-center gap-2.5">
              Services
              <span className="h-0.5 w-7 bg-[#ffcc33] inline-block" />
            </div>
            <div className="flex flex-col gap-3">
              {["Marriage Consult", "Business Growth", "Birth Rectification", "Career Roadmap", "Health Reports"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-slate-300 text-[14px] transition-all duration-300 px-3 py-2 rounded-lg -ml-3 hover:text-[#ffcc33] hover:pl-5"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="text-white text-[13px] font-bold uppercase tracking-[2px] mb-6 flex items-center gap-2.5">
              Connect
              <span className="h-0.5 w-7 bg-[#ffcc33] inline-block" />
            </div>
            <div className="flex flex-col gap-2.5 mb-4">
              {[
                { icon: "📍", text: "M-22, Sector-66, Noida, UP" },
                { icon: "📞", text: "+91 92786 65588" },
                { icon: "✉️", text: "mail@vinaybajrangi.com" },
              ].map((c) => (
                <div
                  key={c.text}
                  className="flex gap-3 text-[13px] p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span>{c.icon}</span>
                  <span className="text-slate-300">{c.text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              {["App Store", "Play Store"].map((btn) => (
                <div
                  key={btn}
                  className="flex-1 text-center text-[12px] font-semibold text-white py-2.5 px-4 rounded-xl cursor-pointer transition-all hover:border-[#ffcc33]"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {btn}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-5 text-center text-[12px] text-slate-500"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          © 2026 VinayBajrangi.com | Guided by Karma, Driven by Truth.
        </div>
      </div>
    </footer>
  );
}
