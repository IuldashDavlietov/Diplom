import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "../../assets/image/logo.svg"
import ic_cart from "../../assets/image/cart_icon.svg"
import { useSelector } from "react-redux"

function Header() {

    const list = useSelector((state) => state.cart.list)

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
                            <li><Link to="/" className={styles.nav_link}>Main Page</Link></li>
                            <li><Link to="/categories" className={styles.nav_link}>Categories</Link></li>
                            <li><Link to="/products" className={styles.nav_link}>All products</Link></li>
                            <li><Link to="/sales" className={styles.nav_link}>All sales</Link></li>
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