"use client";

export default function FloatWidget() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[150] hidden lg:flex flex-col rounded-l-xl overflow-hidden shadow-[-4px_0_12px_rgba(0,0,0,0.2)]">
      {["Horoscope Matching", "When Will You Get Married"].map((label) => (
        <div
          key={label}
          className="bg-navy text-white py-4 px-2 text-[11.5px] font-bold cursor-pointer border-b border-white/15 last:border-b-0 hover:bg-[#E8650A] transition-colors"
          style={{ writingMode: "vertical-lr", textOrientation: "mixed", whiteSpace: "nowrap" }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
