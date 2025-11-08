import { Link } from "react-router";
import "./OurFeatures.scss";
import electricCar from "../../../assets/icons/electricCar.svg";
import electricCar2 from "../../../assets/icons/electricCar2.svg";
import whiteArrow from "../../../assets/icons/whiteArrow.png";

const OurFeatures = () => {
  return (
    <div className="why-choose-us">
      <h2>Our Features</h2>
      <div className="wrapper">
        <div className="left-wrapper">
          <h3>Are You Looking For a Car ?</h3>
          <p>
            We are committed to providing our customers with exceptional
            service.
          </p>
          <Link to="/shop" className="button button-primary">
            Get Started
            <img className="button-image" src={whiteArrow} alt="White Arrow" />
          </Link>
          <img src={electricCar} alt="Electric Car" />
        </div>
        <div className="right-wrapper">
          <h3>Do You Want to Sell a Car ?</h3>
          <p>
            We are committed to providing our customers with exceptional
            service.
          </p>
          <Link to="/shop" className="button button-tertiary">
            Get Started
            <img className="button-image" src={whiteArrow} alt="White Arrow" />
          </Link>
          <img src={electricCar2} alt="Electric Car" />
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
