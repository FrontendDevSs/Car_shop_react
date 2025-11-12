import { Link } from "react-router";
import "./HeroSection.scss";
import heroImage from "../../../assets/icons/homeImg.svg";
import blueArrow from "../../../assets/icons/blueArrow.png";
import whiteArrow from "../../../assets/icons/whiteArrow.png";

const HeroSection = () => {
  return (
    <div className="home-container">
      <p className="home-subtitle">Find cars for sale and for rent near you</p>
      <h1 className="home-title">Find Your Dream Car</h1>
      <div className="home-buttons">
        <Link to="/shop" className="home-button-primary">
          Shop now{" "}
          <img className="home-btn-img" src={whiteArrow} alt="Arrow for Shop" />
        </Link>
        <Link to="/contact" className="home-button-secondary">
          Contact us{" "}
          <img
            className="home-btn-img"
            src={blueArrow}
            alt="Arrow for Contact"
          />
        </Link>
      </div>
      <img className="home-hero-img" src={heroImage} alt="Hero Section Image" />
    </div>
  );
};

export default HeroSection;
