"use client";
import { useState } from "react";

const navItems = [
  { label: "Home", active: true },
  { label: "Horoscope", dropdown: true },
  { label: "Celebrity Horoscope" },
  { label: "Astrology", dropdown: true },
  { label: "Life Problems", dropdown: true },
  { label: "Calculators" },
  { label: "Kundli", dropdown: true },
  { label: "Services" },
  { label: "Why Dr. Bajrangi", dropdown: true },
  { label: "Sanatan Dharm" },
  { label: "Calendar", dropdown: true },
];

export default function Navbar({ onMenuToggle }) {
  return (
    <nav
      className="sticky top-0 z-[1000] border-b-2 border-[#fbbf24]"
      style={{
        background: "linear-gradient(90deg, rgba(75,0,130,0.9) 0%, rgba(26,35,126,0.9) 100%)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-center h-14">
        <div className="hidden lg:flex items-center">
          {navItems.map((item) => (
            <div key={item.label} className="nav-item-wrap group relative flex items-center">
              <a
                href="#"
                className={`text-white/90 text-[13px] font-bold uppercase tracking-wide px-3.5 py-2.5 mx-0.5 rounded-lg transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5 whitespace-nowrap flex items-center gap-1 ${
                  item.active
                    ? "bg-[#F97316] shadow-[0_4px_15px_rgba(249,115,22,0.5)]"
                    : ""
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <span className="text-[#fbbf24] text-[11px] ml-0.5 transition-transform duration-300 group-hover:rotate-180 inline-block">
                    ▾
                  </span>
                )}
              </a>
            </div>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden ml-auto bg-[#F97316] p-2 rounded-full shadow-lg"
        >
          <div className="w-5 h-0.5 bg-white mb-1"></div>
          <div className="w-5 h-0.5 bg-white mb-1"></div>
          <div className="w-5 h-0.5 bg-white"></div>
        </button>
      </div>
    </nav>
  );
}
