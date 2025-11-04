import Navbar from "../../components/layout/Navbar/Navbar";
import HeroSection from "../../pages/Home/HeroSection";
import OurFeatures from "./OurFeatures";
import WhyChooseUs from "./WhyChooseUs";
import Newsletter from "./Newsletter";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <OurFeatures />
      <WhyChooseUs />
      <Newsletter />
    </div>
  );
};

export default HomePage;
