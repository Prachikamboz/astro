import "./globals.css";

export const metadata = {
  title: "Dr. Ramnik Sharma — Best Online Astrologer",
  description: "Best Online Astrologer in India – Vedic Astrology, Kundli, Horoscope & More",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-nunito">{children}</body>
    </html>
  );
}
