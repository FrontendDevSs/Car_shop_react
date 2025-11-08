import contactImg from "../../assets/icons/contactImg.png";
import Newsletter from "../../components/layout/Newsletter/Newsletter";
import WhyChooseUs from "../../components/layout/WhyChooseUs/WhyChooseUs";

function About() {
  return (
    <>
      <h1 className="about-contact-title">Reach us out</h1>
      <img
        className="about-contact-img"
        src={contactImg}
        alt="Contact Page Image"
      />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
}

export default About;
