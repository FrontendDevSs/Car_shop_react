import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h3 className="newsletter-title">Join CarShop</h3>
      <p className="newsletter-text">
        Receive pricing updates, shopping tips & more!
      </p>
      <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Your email address" required />
        <button className="button-primary newsletter-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
