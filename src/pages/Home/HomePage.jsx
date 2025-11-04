import HeroSection from "./HomeComponents/HeroSection/OurFeatures/HeroSection/HeroSection";
import OurFeatures from "./HomeComponents/HeroSection/OurFeatures/OurFeatures/OurFeatures";
import WhyChooseUs from "./HomeComponents/WhyChooseUs/WhyChooseUs";
import Newsletter from "./HomeComponents/HeroSection/OurFeatures/Newsletter/Newsletter";
import TopCars from "./HomeComponents/TopCars/TopCars";

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
