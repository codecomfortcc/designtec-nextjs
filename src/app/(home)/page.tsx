'use client'
import { animateMainImage } from "@/animations/animate";
import ContactSection from "@/components/contact/contactsection";
import AboutSection from "@/components/home/aboutSection";
import FooterSection from "@/components/home/footerSection";
import HeroSection from "@/components/home/heroSection";
import ProductSection from "@/components/home/product/productSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Homepage = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    animateMainImage();
  }
  , []);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <FooterSection />
    </div>
  );
};

export default Homepage;
