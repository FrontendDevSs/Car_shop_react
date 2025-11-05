import Navbar from "../../components/layout/Navbar/Navbar";
import HeroSection from "../../pages/Home/HeroSection";
import OurFeatures from "./OurFeatures";
import WhyChooseUs from "./WhyChooseUs";
import Newsletter from "./Newsletter";
import TopCars from "./TopCars";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <OurFeatures />
      <TopCars />
      <WhyChooseUs />
      <Newsletter />
    </div>
  );
};

export default HomePage;
