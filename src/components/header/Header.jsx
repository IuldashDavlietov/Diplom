import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/image/logo.svg";
import ic_cart from "../../assets/image/cart_icon.svg";
import { useSelector } from "react-redux";

function Header() {

    const list = useSelector((state) => state.cart.list);

    const linkActive = ({ isActive}) => isActive ? styles.nav_link : styles.link_default

    const calculateCartCount = (cartItems) => {
        if (!cartItems || cartItems.length === 0) {
            return 0;
        }
        return cartItems.reduce((total, currentItem) => total + currentItem.count, 0);
    };

    let count = calculateCartCount(list)

    return (
        <header>
            <div className={styles.container}>
                <div className={styles.header_items}>
                    <div className={styles.header_logo}>
                        <Link to="/"><img src={logo} alt="logo_from_gard" /></Link>
                    </div>
                    <div className={styles.header_navigation}>
                        <ul>
                            <li><NavLink to="/" className={linkActive}>Main Page</NavLink></li>
                            <li><NavLink to="/categories" className={linkActive}>Categories</NavLink></li>
                            <li><NavLink to="/products" className={linkActive}>All products</NavLink></li>
                            <li><NavLink to="/sales" className={linkActive}>All sales</NavLink></li>
                        </ul>
                    </div>
                    <div className={styles.header_cart}>
                        <Link to="/cart"><img src={ic_cart} alt="cart" /></Link>
                        <div className={count === 0 ? styles.count_none : styles.count_cart}>{count}</div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;