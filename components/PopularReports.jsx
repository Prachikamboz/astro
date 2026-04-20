"use client";

const reports = [
  {
    title: "Personal Destiny Report",
    headerClass: "bg-navy",
    features: [
      "Discover your karmic path",
      "Understand hidden strengths",
      "Future opportunities",
      "Life purpose insights",
    ],
    price: "₹699",
    oldPrice: "₹4100",
    btnStyle: {},
  },
  {
    title: "Life Journey Map Report",
    headerClass: "bg-purple2",
    features: [
      "Career direction analysis",
      "Health & finance timing",
      "Planetary influences",
      "Major life opportunities",
    ],
    price: "₹999",
    oldPrice: "₹5100",
    btnStyle: { borderColor: "#7C3AED", color: "#7C3AED" },
  },
  {
    title: "Love & Relationship Report",
    headerClass: "bg-red",
    features: [
      "Compatibility insights",
      "Relationship patterns",
      "Marriage timing",
      "Love life guidance",
    ],
    price: "₹599",
    oldPrice: "₹3100",
    btnStyle: { borderColor: "#c0392b", color: "#c0392b" },
  },
];

export default function PopularReports() {
  return (
    <section className="bg-white py-11">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-[#C9921A] text-[16px] mb-1.5 block">✦ ✦</span>
          <h2 className="font-playfair text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold text-navy mb-2">
            Most Popular <span className="text-[#E8650A]">Reports</span> ✦ ✦
          </h2>
          <p className="text-slate-500 text-sm max-w-[500px] mx-auto">
            Trusted by 50,000+ seekers worldwide for clarity and life guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {reports.map((r) => (
            <div
              key={r.title}
              className="rounded-xl overflow-hidden shadow-card border border-slate-200 transition-transform hover:-translate-y-1"
            >
              <div className={`p-4 text-white text-center ${r.headerClass}`}>
                <h3 className="text-[15px] font-extrabold">{r.title}</h3>
              </div>
              <div className="p-5 bg-white">
                {r.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-[13px] text-gray-600 mb-2.5 leading-relaxed">
                    <span className="text-green-600 text-[15px] flex-shrink-0">✅</span>
                    {f}
                  </div>
                ))}
                <div className="flex items-baseline gap-2.5 my-4">
                  <span className="text-[22px] font-extrabold text-gray-800">{r.price}</span>
                  <span className="text-[14px] text-slate-400 line-through">{r.oldPrice}</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="flex-1 text-center py-2 px-2 rounded-lg text-[12.5px] font-bold border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all"
                    style={r.btnStyle}
                  >
                    Know More →
                  </a>
                  <a
                    href="#"
                    className="flex-1 text-center py-2 px-2 rounded-lg text-[12.5px] font-bold bg-[#E8650A] text-white hover:bg-[#d05a08] transition-all"
                  >
                    Buy Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Karma Report */}
        <div className="max-w-[580px] mx-auto">
          <div className="rounded-xl overflow-hidden shadow-card border border-slate-200 hover:-translate-y-1 transition-transform">
            <div className="p-4 text-white text-center bg-[#283593]">
              <h3 className="text-[15px] font-extrabold">Karma Report</h3>
            </div>
            <div className="p-5 bg-white">
              <p className="text-[13px] text-gray-600 leading-relaxed italic mb-3.5">
                A seven-phase intelligence engine reads your horoscope the way a scholar reads
                scripture — finding not events, but <em>causes</em>. Not fate, but{" "}
                <em>karma in motion</em>.
              </p>
              <div className="flex items-baseline gap-2.5 my-4">
                <span className="text-[22px] font-extrabold text-gray-800">₹5999</span>
                <span className="text-[14px] text-slate-400 line-through">₹31000</span>
              </div>
              <div className="flex gap-2">
                <a href="#" className="flex-1 text-center py-2 px-2 rounded-lg text-[12.5px] font-bold border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all">
                  Know More →
                </a>
                <a href="#" className="flex-1 text-center py-2 px-2 rounded-lg text-[12.5px] font-bold bg-[#E8650A] text-white hover:bg-[#d05a08] transition-all">
                  Buy Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
