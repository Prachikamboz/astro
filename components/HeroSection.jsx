"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ✅ added

const lifeProblems = [
  { icon: "🏠", label: "Property Astrology" },
  { icon: "💼", label: "Business Astrology" },
  { icon: "⚖️", label: "Court / legal Issues" },
  { icon: "🎯", label: "Career Astrology" },
  { icon: "🕉️", label: "All about Vastu" },
  { icon: "🌐", label: "Foreign Settlement" },
  { icon: "🏢", label: "Vastu for commercial" },
  { icon: "🕰️", label: "Past life Readings" },
];

const zodiacs = [
  { sym: "♈", name: "Aries" },
  { sym: "♉", name: "Taurus" },
  { sym: "♊", name: "Gemini" },
  { sym: "♋", name: "Cancer" },
  { sym: "♌", name: "Leo" },
  { sym: "♍", name: "Virgo" },
  { sym: "♎", name: "Libra" },
  { sym: "♏", name: "Scorpio" },
  { sym: "♐", name: "Sagittarius" },
  { sym: "♑", name: "Capricorn" },
  { sym: "♒", name: "Aquarius" },
  { sym: "♓", name: "Pisces" },
];

const hTabs = ["Daily", "Weekly", "Monthly", "Yearly"];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("Daily");

  return (
    <section className="bg-[#F5F3EF] py-5">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-5 items-start">

        {/* Life Problems Card */}
        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="text-[18px] font-extrabold text-navy leading-tight">
              <span className="text-[#E8650A]">Astrological Solutions</span> for all life&apos;s problems
            </h2>
          </div>

          <div className="grid grid-cols-4">
            {lifeProblems.map((p) => (
              <div
                key={p.label}
                className="flex flex-col items-center gap-1.5 p-4 border border-slate-100 cursor-pointer text-center hover:bg-[#FFF4ED] transition-all"
              >
                <div className="w-[58px] h-[58px] rounded-full bg-[#E8650A] flex items-center justify-center text-[22px] text-white">
                  {p.icon}
                </div>
                <div className="text-[12px] font-bold text-gray-700">
                  {p.label}
                </div>
              </div>
            ))}
          </div>

          {/* ✅ FIXED ARROWS */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#F5F3EF] border-t border-slate-100">
            
            <button className="w-7 h-7 rounded-full bg-white border flex items-center justify-center hover:bg-[#E8650A] hover:text-white transition">
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-[7px] h-[7px] rounded-full ${
                    i === 0 ? "bg-[#E8650A]" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>

            <button className="w-7 h-7 rounded-full bg-white border flex items-center justify-center hover:bg-[#E8650A] hover:text-white transition">
              <ChevronRight size={16} />
            </button>

          </div>
        </div>

        {/* Horoscope Card */}
        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          <div className="bg-[#E8650A] p-4">
            <h2 className="text-[16px] font-extrabold text-center text-white mb-2.5">
              Free Horoscope
            </h2>

            <div className="flex bg-white/15 rounded-md overflow-hidden">
              {hTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)} // ✅ arrow function working
                  className={`flex-1 py-1.5 text-[11.5px] font-bold ${
                    activeTab === tab
                      ? "bg-white text-[#E8650A]"
                      : "text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-6">
            {zodiacs.map((z) => (
              <div
                key={z.name}
                className="flex flex-col items-center p-3 border hover:bg-[#FFF4ED]"
              >
                <div className="w-[52px] h-[52px] rounded-full bg-[#E8650A] flex items-center justify-center">
                  <span className="text-white text-[28px]">{z.sym}</span>
                </div>
                <div className="text-[11px] font-bold text-gray-700">
                  {z.name}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}