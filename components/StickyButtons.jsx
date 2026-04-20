"use client";

export default function StickyButtons() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] flex shadow-[0_-4px_24px_rgba(0,0,0,0.25)]">
      <button className="flex-1 bg-[#E8650A] text-white py-3.5 text-[14px] font-extrabold cursor-pointer flex items-center justify-center gap-2 hover:bg-[#d05a08] transition-colors font-nunito">
        👥 Book Appointment
      </button>
      <button className="flex-1 bg-[#0D7377] text-white py-3.5 text-[14px] font-extrabold cursor-pointer flex items-center justify-center gap-2 hover:bg-[#14a085] transition-colors font-nunito">
        🎙️ Take Voice Report
      </button>
    </div>
  );
}
