import HeroSection from "../../components/layout/HeroSection/HeroSection";
import OurFeatures from "../../components/layout/OurFeatures/OurFeatures";
import WhyChooseUs from "../../components/layout/WhyChooseUs/WhyChooseUs";
import Newsletter from "../../components/layout/Newsletter/Newsletter";
import TopCars from "../../components/layout/TopCars/TopCars";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <OurFeatures />
      <TopCars></TopCars>
      <WhyChooseUs />
      <Newsletter />
    </div>
  );
};

export default HomePage;
