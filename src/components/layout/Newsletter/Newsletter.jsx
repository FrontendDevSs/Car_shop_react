import { useState } from "react";
import "./Newsletter.scss";
import btnUp from "../../../assets/icons/btnUp.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email!");
      return;
    }

    alert("Thank you for subscribing! ");
    setEmail("");
  };

  return (
    <div className="newsletter">
      <h3 className="newsletter-title">Join CarShop</h3>
      <p className="newsletter-text">
        Receive pricing updates, shopping tips & more!
      </p>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="button newsletter-button" type="submit">
          Sign Up
        </button>
      </form>
      <button
        className="btn-up"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={btnUp} alt="Scroll to top" />
      </button>
    </div>
  );
};

export default Newsletter;
