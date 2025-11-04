import "./WhyChooseUs.scss";

import whyChooseUsImg1 from "../../../assets/whyChooseUsImg1.svg";
import whyChooseUsImg2 from "../../../assets/whyChooseUsImg2.png";
import whyChooseUsImg3 from "../../../assets/whyChooseUsImg3.png";
import whyChooseUsImg4 from "../../../assets/whyChooseUsImg4.png";

const WhyChooseUs = () => {
  return (
    <>
      <div className="features-wrapper">
        <h1 className="features-title">Why Choose Us?</h1>
        <div className="features-section">
          <div className="feature-item">
            <img src={whyChooseUsImg1} alt="" />
            <h4>Special Financing Offers</h4>
            <p>
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          </div>
          <div className="feature-item">
            <img src={whyChooseUsImg2} alt="" />
            <h4>Special Financing Offers</h4>
            <p>
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          </div>{" "}
          <div className="feature-item">
            <img src={whyChooseUsImg3} alt="" />
            <h4>Special Financing Offers</h4>
            <p>
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          </div>{" "}
          <div className="feature-item">
            <img src={whyChooseUsImg4} alt="" />
            <h4>Special Financing Offers</h4>
            <p>
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
