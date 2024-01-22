import styles from "./EmptyBasket.module.css";
import { Link } from "react-router-dom";

function EmptyBasket({ count }) {
  return (
    <>
      <div className={count > 0 ? styles.emptyBasket_none : styles.emptyBasket}>
        <p className={styles.emptyBasket_text}>Looks like you have no items in your basket currently.</p>
        <div className={styles.emptyBasket_btn}>
          <Link to="/products">
            <button className={styles.btn_backToShopping}>Continue Shopping</button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default EmptyBasket;