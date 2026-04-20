"use client";
export default function Logobar() {
  return (
    <div className="bg-white border-b border-slate-200 py-2.5">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-[54px] h-[54px] rounded-full border-2 border-navy flex items-center justify-center overflow-hidden flex-shrink-0 bg-white">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
              <circle cx="30" cy="30" r="28" fill="#1a237e" stroke="#E8650A" strokeWidth="2.5" />
              <text x="30" y="38" textAnchor="middle" fill="#FFD700" fontSize="19" fontWeight="900" fontFamily="serif">VB</text>
            </svg>
          </div>
          <div>
            <div className="font-playfair text-[20px] font-extrabold text-navy leading-tight">
              Dr. Ramnik Sharma
            </div>
            <div className="text-[11px] text-slate-500 tracking-wide mt-0.5">
              Best Online Astrologer in India
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-[360px] relative ml-2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-slate-100 border-[1.5px] border-slate-200 rounded-lg py-2 pl-9 pr-3 text-[13px] text-gray-700 outline-none focus:border-navy transition-colors placeholder:text-slate-400"
          />
        </div>

        {/* Nav Links */}
        <div className="flex gap-1.5 flex-wrap ml-auto hidden md:flex">
          {[
            { label: "🎓 Astro Courses", bg: "bg-navy" },
            { label: "📝 Blogs", bg: "bg-teal" },
            { label: "📰 News", bg: "bg-purple" },
            { label: "🎬 Web Story", bg: "bg-[#e67e22]" },
            { label: "🙏 Online Puja", bg: "bg-red" },
            { label: "📖 Chalisa Sangrah", bg: "bg-[#8e44ad]" },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[12px] font-bold text-white transition-all hover:opacity-85 hover:-translate-y-px whitespace-nowrap ${item.bg}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-1 px-2.5 py-1.5 border-[1.5px] border-slate-200 rounded-lg text-[12px] font-bold cursor-pointer text-navy whitespace-nowrap">
            🇮🇳 INR
          </div>
          <div className="w-8 h-8 rounded-full border-[1.5px] border-slate-200 flex items-center justify-center cursor-pointer text-[15px] text-slate-500">
            👤
          </div>
        </div>
      </div>
    </div>
  );
}
