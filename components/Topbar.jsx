"use client";
export default function Topbar() {
  return (
    <div className="bg-[#4B0082] py-2">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          <a
            href="tel:+919278555588"
            className="text-white text-[13px] font-semibold flex items-center gap-1.5"
          >
            <span className="w-[22px] h-[22px] rounded-full bg-white/15 flex items-center justify-center text-xs">
              📞
            </span>
            +91 9278555588
          </a>
          <a
            href="mailto:mail@vinaybajrangi.com"
            className="text-white text-[13px] font-semibold flex items-center gap-1.5"
          >
            <span className="w-[22px] h-[22px] rounded-full bg-white/15 flex items-center justify-center text-xs">
              ✉️
            </span>
            mail@vinaybajrangi.com
          </a>
        </div>
      </div>
    </div>
  );
}
