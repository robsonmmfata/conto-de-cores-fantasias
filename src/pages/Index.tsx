
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ClubJackBoo from "@/components/ClubJackBoo";
import OfficialStore from "@/components/OfficialStore";
import Gallery from "@/components/Gallery";
import PaintingChampionship from "@/components/PaintingChampionship";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <ClubJackBoo />
      <OfficialStore />
      <Gallery />
      <PaintingChampionship />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
