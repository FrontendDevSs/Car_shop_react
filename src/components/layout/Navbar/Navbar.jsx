import shopingCartIcon from "../../../assets/icons/shopingCart.png";
import { Link } from "react-router-dom";
import menuIcon from "../../../assets/icons/menu.png";
import { useState } from "react";
import closeIcon from "../../../assets/icons/close.png";
import "./navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <navbar>
      <h1>CAR SHOP</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="icon-div">
        <Link to="/cart">
          {!isOpen && (
            <img className="cart-img" src={shopingCartIcon} alt="Cart-Icon" />
          )}
        </Link>
        <button
          className="menu-btn"
          onClick={() => setIsOpen(true)}
          aria-label="open menu"
        >
          {!isOpen && (
            <img className="menu-img" src={menuIcon} alt="Menu-Icon" />
          )}
        </button>
      </div>
      <aside className={`drawer ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <img src={closeIcon} alt="Close" className="close-img" />
        </button>

        <nav className="drawer-links">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>
            Shop
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </nav>
      </aside>
    </navbar>
  );
}
export default Navbar;
