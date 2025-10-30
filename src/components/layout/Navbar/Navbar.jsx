import shopingCartIcon from "/assets/shopingCart.png";
import { Link } from "react-router-dom";
import menuIcon from "/assets/menu.png";
import "./_navbar.scss";

function Navbar() {
    return (
        <div className="navbar">
            <h1>CAR SHOP</h1>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/shop">Shop</Link></li>
                <li><Link to ="/about">About</Link></li>
                <li><Link to ="/contact">Contact</Link></li>
            </ul>
            <div className="icon-div">
                <Link to ="/cart"><img className="cart-img" src={shopingCartIcon} alt="Cart-Icon" /></Link>
                <img className="menu-img" src={menuIcon} alt="Menu-Icon" />
            </div>

        </div>
    );
}
export default Navbar;
