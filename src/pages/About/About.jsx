import aboutImg from "../../assets/icons/aboutImg.png";
import Newsletter from "../../components/layout/Newsletter/Newsletter";
import WhyChooseUs from "../../components/layout/WhyChooseUs/WhyChooseUs";
import "./about.scss";

function About() {
  return (
    <>
      <h1 className="about-contact-title">About us</h1>
      <img
        className="about-contact-img"
        src={aboutImg}
        alt="About Page Image"
      />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
}

export default About;
