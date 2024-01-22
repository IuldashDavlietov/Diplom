import styles from "./HeaderFromCart.module.css"
import { Link } from "react-router-dom"

function HeaderFromCart() {
  return (
    <>
      <div className={styles.header_h2}>
        <h2 className={styles.header_title}>Shopping cart</h2>
        <div className={styles.line}></div>
        <div className={styles.categories_btn}>
          <Link to="/products">
            <button className={styles.btn_allCategories}>Back to the store</button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default HeaderFromCart;