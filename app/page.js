"use client";
import { useState } from "react";
import Topbar from "@/components/Topbar";
import Logobar from "@/components/Logobar";
import Navbar from "@/components/Navbar";
import ReportsBar from "@/components/ReportsBar";
import HeroSection from "@/components/HeroSection";
import CoursesBanner from "@/components/CoursesBanner";
import PopularReports from "@/components/PopularReports";
import PanchangServices from "@/components/PanchangServices";
import CalculatorsSection from "@/components/CalculatorsSection";
import FormsSection from "@/components/FormsSection";
import ServiceTypes from "@/components/ServiceTypes";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatWidget from "@/components/FloatWidget";
import StickyButtons from "@/components/StickyButtons";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="pb-[52px]">
      <Topbar />
      <Logobar />
      <Navbar onMenuToggle={() => setMenuOpen(true)} />
      <ReportsBar />
      <HeroSection />
      <CoursesBanner />
      <PopularReports />
      <PanchangServices />
      <CalculatorsSection />
      <FormsSection />
      <ServiceTypes />
      <AboutSection />
      <Footer />
      <FloatWidget />
      <StickyButtons />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </main>
  );
}
