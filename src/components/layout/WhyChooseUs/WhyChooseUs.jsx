import "./WhyChooseUs.scss";

import whyChooseUsImg1 from "../../../assets/icons/whyChooseUsImg1.svg";
import whyChooseUsImg2 from "../../../assets/icons/whyChooseUsImg2.png";
import whyChooseUsImg3 from "../../../assets/icons/whyChooseUsImg3.png";
import whyChooseUsImg4 from "../../../assets/icons/whyChooseUsImg4.png";
import FadeInSection from "../../animations/FadeInSection";

const WhyChooseUs = () => {
  return (
    <FadeInSection direction="up" once={false}>
      <section className="why-choose-us">
        <h2 className="why-choose-us-title">Why Choose Us?</h2>
        <div className="why-choose-us-items">
          <div className="why-choose-us-item">
            <img src={whyChooseUsImg1} alt="Special Financing Offers" />
            <h4 className="why-choose-us-item-title">Special Financing Offers</h4>
            <p className="why-choose-us-item-desc">
              Our stress-free finance department can find financial solutions to
              save you money.
            </p>
          </div>
          <div className="why-choose-us-item">
            <img src={whyChooseUsImg2} alt="Trusted Dealer" />
            <h4 className="why-choose-us-item-title">Trusted Dealer</h4>
            <p className="why-choose-us-item-desc">
              Our stress-free finance department can find financial solutions to
              save you money.
            </p>
          </div>
          <div className="why-choose-us-item">
            <img src={whyChooseUsImg3} alt="Wide Selection" />
            <h4 className="why-choose-us-item-title">Wide Selection</h4>
            <p className="why-choose-us-item-desc">
              Our stress-free finance department can find financial solutions to
              save you money.
            </p>
          </div>
          <div className="why-choose-us-item">
            <img src={whyChooseUsImg4} alt="Customer Support" />
            <h4 className="why-choose-us-item-title">Customer Support</h4>
            <p className="why-choose-us-item-desc">
              Our stress-free finance department can find financial solutions to
              save you money.
            </p>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default WhyChooseUs;
