import "./HeroSection.scss";

import Button from "../../components/ui/button/Button";
import heroImage from "../../../assets/homeImg.svg";
import blueArrow from "../../../assets/blueArrow.png";
import whiteArrow from "../../../assets/whiteArrow.png";

const HeroSection = () => {
  return (
    <div className="home-container">
      <p>Find cars for sale and for rent near you</p>
      <h1>Find Your Dream Car</h1>
      <div className="buttons">
        <button className="button-primary">
          Shop now{" "}
          <img
            className="btn-img"
            src={whiteArrow}
            alt="Arrow image for button"
          />
        </button>
        <button className="button-secondary">
          Contact us{" "}
          <img
            className="btn-img"
            src={blueArrow}
            alt="Arrow image for button"
          />
        </button>
      </div>

      <img src={heroImage} alt="Hero Section Image" />
    </div>
  );
};

export default HeroSection;
