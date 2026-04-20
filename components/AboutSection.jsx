"use client";

export default function AboutSection() {
  return (
    <section className="bg-[#F5F3EF] py-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-start">
          <div>
            <h2 className="text-[24px] font-extrabold text-navy mb-3">About Us</h2>
            <p className="text-[13.5px] text-gray-600 leading-[1.8] mb-3">
              Dr. Ramnik Sharma is one of the leading professionals in his field. He is very well
              known as the most famous astrologer in India. He is the most searched astrologer on
              Google, as he is one of the top astrologers in India in all the main branches of Vedic
              astrology.
            </p>
            <p className="text-[13.5px] text-gray-600 leading-[1.8] mb-3">
              Dr. Bajrangi has received various awards, has a Ph.D. in Vedic Astrology, and boasts
              25 years of extensive experience. He has conducted over 500,000 personal consultations
              in addition to his online astrology reports which are used by thousands.
            </p>
            <p className="text-[13.5px] text-gray-600 leading-[1.8] mb-3">
              His global clientele for Kundali analysis, and his unparalleled expertise is supported
              by numerous publications in the top media houses, including ANI News, Times of India,
              Hindustan Times, Outlook India, The Week, Mid Day, DNA, Deccan Herald, Deccan
              Chronicle, Business Standard, Amar Ujala, etc.
            </p>
            <div className="text-[17px] font-extrabold text-gray-800 mt-5 mb-2">
              Methodology – Determined And Accurate
            </div>
            <p className="text-[13.5px] text-gray-600 leading-[1.8] mb-1.5">
              Dr. Ramnik Sharma believes that the most reliable predictions from the science of
              Astrology are obtained using the Navamsa Kundali (D-9 Chart) with a few other
              Divisional Charts. His engineering background and disciplined approach make each
              consultation precise and deeply insightful.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#E8650A] text-white px-6 py-3 rounded-full font-extrabold text-[14px] shadow-[0_4px_14px_rgba(232,101,10,0.3)] mt-1.5 transition-colors hover:bg-[#d05a08]"
            >
              Know More....
            </a>
          </div>

          <div
            className="rounded-[14px] min-h-[280px] flex items-center justify-center relative overflow-hidden about-img-pattern"
            style={{ background: "linear-gradient(135deg,#1a237e,#283593)" }}
          >
            <div className="absolute top-4 right-4 bg-white/15 backdrop-blur-md rounded-xl px-4 py-3 text-center border border-white/20 z-10">
              <div className="font-playfair text-[1.4rem] font-bold text-white">500K+</div>
              <div className="text-[11px] text-white/70 mt-0.5">Consultations</div>
            </div>
            <div className="text-[90px] relative z-10">👨‍💼</div>
          </div>
        </div>
      </div>
    </section>
  );
}
