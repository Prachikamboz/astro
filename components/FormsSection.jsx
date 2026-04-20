"use client";
import { useState } from "react";

function GenderSelect({ color }) {
  const [gender, setGender] = useState("male");
  return (
    <div className="mb-3">
      <div className="text-[12px] font-bold text-navy mb-1.5">Gender</div>
      <div className="flex gap-2.5">
        {[
          { val: "male", label: "Male 👨" },
          { val: "female", label: "Female 👩" },
        ].map((g) => (
          <button
            key={g.val}
            onClick={() => setGender(g.val)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12.5px] font-bold border-2 cursor-pointer transition-all ${
              gender === g.val
                ? `border-[${color}] text-[${color}]`
                : "border-slate-200 text-slate-400"
            }`}
            style={gender === g.val ? { borderColor: color, color } : {}}
          >
            <div
              className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
              style={
                gender === g.val
                  ? { borderColor: color, backgroundColor: color }
                  : { borderColor: "#94a3b8" }
              }
            >
              {gender === g.val && (
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </div>
            {g.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function InputField({ label, type = "text", placeholder }) {
  return (
    <div className="mb-2.5">
      <label className="block text-[12px] font-bold text-navy mb-1 tracking-wide">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-lg border-[1.5px] border-slate-200 text-[13px] font-nunito text-gray-700 bg-white outline-none focus:border-navy transition-colors placeholder:text-slate-400"
      />
    </div>
  );
}

export default function FormsSection() {
  return (
    <section className="bg-[#F5F3EF] py-9">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Moon Sign */}
          <div className="bg-white rounded-xl overflow-hidden shadow-card border border-slate-200">
            <div className="bg-navy px-5 py-4 text-white text-center">
              <h3 className="text-[16px] font-extrabold">
                Know Your <span className="text-[#FFD700]">Moon Sign</span>
              </h3>
              <div className="text-[12px] text-white/80 mt-0.5">
                Enter your birth details for accurate predictions
              </div>
            </div>
            <div className="p-4">
              <GenderSelect color="#E8650A" />
              <InputField label="Full Name" placeholder="Enter your full name" />
              <InputField label="Email" type="email" placeholder="Enter your email" />
              <InputField label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" />
              <InputField label="Birth Location" placeholder="City, State, Country" />
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                <div>
                  <label className="block text-[12px] font-bold text-navy mb-1">Date of Birth</label>
                  <input type="date" className="w-full px-3 py-2 rounded-lg border-[1.5px] border-slate-200 text-[13px] font-nunito outline-none focus:border-navy transition-colors" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-navy mb-1">Time of Birth</label>
                  <input type="time" className="w-full px-3 py-2 rounded-lg border-[1.5px] border-slate-200 text-[13px] font-nunito outline-none focus:border-navy transition-colors" />
                </div>
              </div>
              <button className="w-full bg-[#E8650A] text-white border-none py-3 rounded-full text-[14px] font-extrabold font-nunito mt-2.5 transition-colors hover:bg-[#d05a08] shadow-[0_4px_14px_rgba(232,101,10,0.3)] cursor-pointer">
                Get Moon Sign →
              </button>
            </div>
          </div>

          {/* Free Kundli */}
          <div className="bg-white rounded-xl overflow-hidden shadow-card border border-slate-200">
            <div className="bg-purple2 px-5 py-4 text-white text-center">
              <h3 className="text-[16px] font-extrabold">
                Free <span className="text-[#FFD700]">Kundli</span>
              </h3>
              <div className="text-[12px] text-white/80 mt-0.5">
                Enter your birth details for accurate predictions
              </div>
            </div>
            <div className="p-4">
              <GenderSelect color="#7C3AED" />
              <InputField label="Full Name" placeholder="Enter your full name" />
              <InputField label="Email" type="email" placeholder="Enter your email" />
              <InputField label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" />
              <InputField label="Birth Location" placeholder="City, State, Country" />
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                <div>
                  <label className="block text-[12px] font-bold text-navy mb-1">Date of Birth</label>
                  <input type="date" className="w-full px-3 py-2 rounded-lg border-[1.5px] border-slate-200 text-[13px] font-nunito outline-none focus:border-navy transition-colors" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-navy mb-1">Time of Birth</label>
                  <input type="time" className="w-full px-3 py-2 rounded-lg border-[1.5px] border-slate-200 text-[13px] font-nunito outline-none focus:border-navy transition-colors" />
                </div>
              </div>
              <button className="w-full bg-purple2 text-white border-none py-3 rounded-full text-[14px] font-extrabold font-nunito mt-2.5 transition-colors hover:opacity-90 shadow-[0_4px_14px_rgba(124,58,237,0.3)] cursor-pointer">
                Generate Free Kundli →
              </button>
            </div>
          </div>

          {/* Horoscope Matching */}
          <div className="bg-white rounded-xl overflow-hidden shadow-card border border-slate-200">
            <div className="bg-[#E8650A] px-5 py-4 text-white text-center">
              <h3 className="text-[16px] font-extrabold">
                Free <span className="text-navy">Horoscope Matching</span>
              </h3>
              <div className="text-[12px] text-white/80 mt-0.5">
                Enter your birth details for accurate predictions
              </div>
            </div>
            <div className="p-4">
              <div className="bg-slate-100 rounded-lg py-2 px-3 text-[13px] font-bold text-navy mb-3 text-center">
                Male Profile Details
              </div>
              <InputField label="Full Name" placeholder="John Smith" />
              <InputField label="Email" type="email" placeholder="Enter your email" />
              <label className="block text-[12px] font-bold text-navy mb-1">Phone Number</label>
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                <select className="w-full px-3 py-2 rounded-lg border-[1.5px] border-slate-200 text-[13px] font-nunito bg-white outline-none focus:border-navy">
                  <option>+91 🇮🇳</option>
                  <option>+1 🇺🇸</option>
                  <option>+44 🇬🇧</option>
                </select>
                <input type="tel" placeholder="XXXXX XXXXX" className="w-full px-3 py-2 rounded-lg border-[1.5px] border-slate-200 text-[13px] font-nunito outline-none focus:border-navy placeholder:text-slate-400" />
              </div>
              <InputField label="Birth Location" placeholder="City, State, Country" />
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                <div>
                  <label className="block text-[12px] font-bold text-navy mb-1">Date of Birth</label>
                  <input type="date" className="w-full px-3 py-2 rounded-lg border-[1.5px] border-slate-200 text-[13px] font-nunito outline-none focus:border-navy transition-colors" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-navy mb-1">Time of Birth</label>
                  <input type="time" className="w-full px-3 py-2 rounded-lg border-[1.5px] border-slate-200 text-[13px] font-nunito outline-none focus:border-navy transition-colors" />
                </div>
              </div>
              <button className="w-full bg-[#E8650A] text-white border-none py-3 rounded-full text-[14px] font-extrabold font-nunito mt-2.5 transition-colors hover:bg-[#d05a08] shadow-[0_4px_14px_rgba(232,101,10,0.3)] cursor-pointer">
                Match Horoscopes →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
