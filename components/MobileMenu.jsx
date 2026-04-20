"use client";

const mobileLinks = [
  "Home",
  "Horoscope",
  "Astrology",
  "Life Problems",
  "Calculators",
  "Free Kundli",
  "Services",
];

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-[300] flex flex-col items-center justify-center gap-6 text-[18px] font-bold">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 bg-transparent border-none text-[26px] cursor-pointer text-navy"
      >
        ✕
      </button>
      {mobileLinks.map((link) => (
        <a
          key={link}
          href="#"
          onClick={onClose}
          className="text-navy hover:text-[#E8650A] transition-colors"
        >
          {link}
        </a>
      ))}
      <a
        href="#"
        onClick={onClose}
        className="bg-[#E8650A] text-white px-8 py-3 rounded-full mt-2 hover:bg-[#d05a08] transition-colors"
      >
        Book Appointment
      </a>
    </div>
  );
}
