import { Link } from "react-router-dom";
import "./HeroSection.scss";
import heroImage from "../../../assets/icons/homeImg.svg";
import blueArrow from "../../../assets/icons/blueArrow.png";
import whiteArrow from "../../../assets/icons/whiteArrow.png";

const HeroSection = () => {
  return (
    <div className="home-container">
      <p>Find cars for sale and for rent near you</p>
      <h1>Find Your Dream Car</h1>
      <div className="buttons">
        <Link to="/shop" className="button-primary">
          Shop now{" "}
          <img className="btn-img" src={whiteArrow} alt="Arrow for Shop" />
        </Link>
        <Link to="/contact" className="button-secondary">
          Contact us{" "}
          <img className="btn-img" src={blueArrow} alt="Arrow for Contact" />
        </Link>
      </div>
      <img src={heroImage} alt="Hero Section Image" />
    </div>
  );
};

export default HeroSection;
