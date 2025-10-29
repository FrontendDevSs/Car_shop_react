import shopingCartIcon from "/assets/shopingCart.png";
import menuIcon from "/assets/menu.png";
import "./_navbar.scss";

function Navbar() {
    return (
        <div className="navbar">
            <h1>CAR SHOP</h1>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="icon-div">
                <img className="cart-img" src={shopingCartIcon} alt="Cart-Icon" />
                <img className="menu-img" src={menuIcon} alt="Menu-Icon" />
            </div>

        </div>
    );
}
export default Navbar;

//functionalities for burger menu to be added next
//routing to be added at the end