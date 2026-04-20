"use client";
import { useState } from "react";

const reports = [
  "2026 Financial Horoscope Based on Your Birth Chart",
  "2026 Career Horoscope Based on Your Birth Chart",
  "2026 Marriage Horoscope Based on Your Birth Chart",
  "2026 Health Horoscope Based on Your Birth Chart",
];

export default function ReportsBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      className="h-[46px] flex items-center overflow-hidden relative"
      style={{
        background: "linear-gradient(90deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        borderTop: "1px solid rgba(201,146,26,0.4)",
        borderBottom: "1px solid rgba(201,146,26,0.4)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center w-full h-full">
        {/* Label */}
        <div
          className="bg-gradient-to-br from-[#C9921A] to-[#fbbf24] text-black text-[12px] font-black px-5 pr-8 h-full flex items-center uppercase tracking-widest z-10 shadow-[10px_0_20px_rgba(0,0,0,0.3)] flex-shrink-0"
          style={{ clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)" }}
        >
          Popular Reports
        </div>

        {/* Scroll */}
        <div className="overflow-hidden flex-1 pl-6">
          <div className="reports-bar-scroll flex items-center gap-16 whitespace-nowrap">
            {[...reports, ...reports].map((r, i) => (
              <span
                key={i}
                className="text-slate-200 text-[13.5px] font-medium flex items-center gap-2 cursor-pointer hover:text-[#fbbf24] transition-all hover:scale-[1.02]"
              >
                <span className="bg-red-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.6)] uppercase">
                  New
                </span>
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          className="h-full px-5 text-slate-400 hover:text-white transition-all z-10 bg-gradient-to-l from-[#0f172a] via-[#0f172a]/80 to-transparent"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
