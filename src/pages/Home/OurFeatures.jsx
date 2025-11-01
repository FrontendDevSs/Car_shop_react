import "./OurFeatures.scss";
import electricCar from "../../../assets/electricCar.svg";
import electricCar2 from "../../../assets/electricCar2.svg";
import whiteArrow from "../../../assets/whiteArrow.png";

const OurFeatures = () => {
  return (
    <>
      <h2>Our Features</h2>
      <div className="wrapper">
        <div className="left-wrapper">
          <h3>Are You Looking For a Car ?</h3>
          <p>
            We are committed to providing our customers with exceptional
            service.
          </p>
          <button className="button-primary">
            Get Started{" "}
            <img
              className="button-image"
              src={whiteArrow}
              alt="White Arrow for button"
            />
          </button>
          <img src={electricCar} alt="" />
        </div>
        <div className="right-wrapper">
          <h3>Do You Want to Sell a Car ?</h3>
          <p>
            We are committed to providing our customers with exceptional
            service.
          </p>
          <button className="button-tertiary">
            Get Started{" "}
            <img
              className="button-image"
              src={whiteArrow}
              alt="White Arrow for button"
            />
          </button>
          <img src={electricCar2} alt="" />
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
