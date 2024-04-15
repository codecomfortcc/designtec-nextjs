import ContactSection from "@/components/contact/contactsection";
import AboutSection from "@/components/home/aboutSection";
import FooterSection from "@/components/home/footerSection";
import HeroSection from "@/components/home/heroSection";
import ProductSection from "@/components/home/product/productSection";

const Homepage = () => {
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
