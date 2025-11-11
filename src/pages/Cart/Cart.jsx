import { Link } from "react-router-dom";
import { useCartStore } from "../../hooks/cartStore";
import "./Cart.scss";
import WhyChooseUs from "../../components/layout/WhyChooseUs/WhyChooseUs";
import Newsletter from "../../components/layout/Newsletter/Newsletter";
import TrashCan from "../../assets/icons/TrashCan.png";
import whiteArrow from "../../assets/icons/whiteArrow.png";

const Cart = () => {
  const { cart, removeFromCart } = useCartStore();
  const total = cart.reduce((sum, car) => sum + car.price * car.qty, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p className="cart-empty-text">No items in the cart.</p>
          <Link to="/shop" className="cart-button">
            Shop Now <img src={whiteArrow} alt="Arrow pointing to shop" />
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((car) => (
              <div className="cart-item" key={car._id}>
                <img
                  src={car.image}
                  alt={`Image of ${car.brand} ${car.model}`}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h3 className="cart-item-title">
                    {car.brand} {car.model}
                  </h3>
                  <p className="cart-item-description">
                    {car.description?.short || "No description available"}
                  </p>
                </div>
                <p className="cart-item-qty">X{car.qty}</p>
                <p className="cart-item-price">${car.price * car.qty}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(car._id)}
                >
                  <img src={TrashCan} alt="Remove item" />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-summary-info">
              <h2 className="cart-summary-title">Total Price:</h2>
              <p className="cart-summary-total">${total.toLocaleString()}</p>
            </div>
            <Link to="/shop" className="cart-button">
              Continue to payment
            </Link>
          </div>
        </>
      )}

      <WhyChooseUs />
      <Newsletter />
    </div>
  );
};

export default Cart;
