import styles from "./SingleProductCard.module.css";
import { countPlus } from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import minus from "../../assets/image/icon-minus.svg";
import plus from "../../assets/image/icon-plus.svg";
import { Link } from "react-router-dom";
import { addItemCart } from "../../store/slices/cartSlice";

function SingleProductCard({ single_Product }) {

  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.list);
  const [localCount, setLocalCount] = useState(1);

  const { id, title, image, description, price, discont_price, categoryId } = single_Product;
  const categoriesList = useSelector((state) => state.categories.categoriesList);

  const categoryTitle = () => {
    if (categoryId) {
      const matchingCategory = categoriesList.find((elem) => categoryId === elem.id);
      return matchingCategory ? matchingCategory.title : null;
    }
    return null;
  };


  let titleOfCategory = categoryTitle();


  const increment = () => {
    setLocalCount(carrentCount => carrentCount + 1)
  }

  const decrement = () => {
    if (localCount > 0) {
      setLocalCount(carrentCount => carrentCount - 1)
    }
  }

  const addToCart = () => {
    const productInCart = cartList.find((elem) => elem.id === id)

    if (productInCart) {
      dispatch(countPlus({ id: id, count: localCount }))
    } else {
      dispatch(addItemCart({ ...single_Product, count: localCount }))
    }
  }

  return (
    <section className={styles.singleProductCard}>
      <div key={id} className={styles.container}>
        <div className={styles.categoriesPage_nav}>
          <Link to="/">
            <button className={styles.nav_btn_mainPage}>Main page</button>
          </Link>
          <div className={styles.nav_line}></div>
          <Link to="/categories">
            <button className={styles.nav_btn_categories}>Categories</button>
          </Link>
          <div className={styles.nav_line}></div>
          <Link to={`/categories/${categoryId}`}>
            <button className={styles.nav_btn_categories}>
              {titleOfCategory}
            </button>
          </Link>
          <div className={styles.nav_line}></div>
          <button className={styles.nav_btn_product}>{title}</button>
        </div>
        <div className={styles.singleProductCard_items}>
          <div className={styles.singleProductCard_img}>
            <img
              className={styles.img_item}
              src={`http://localhost:3333${image}`}
              alt=""
            />
          </div>
          <div className={styles.singleProductCard_info}>
            <h3 className={styles.headerFromProduct}>{title}</h3>
            <div className={styles.pricesFromProduct}>
              <div
                className={
                  discont_price === null
                    ? styles.prise_sale_none
                    : styles.basicPrice
                }
              >
                <p
                  className={
                    discont_price === null
                      ? styles.prise_sale_none
                      : styles.basicPrice
                  }
                >
                  ${discont_price}
                </p>
              </div>
              <div
                className={
                  discont_price === null
                    ? styles.basicPrice
                    : styles.throughPrice
                }
              >
                <p
                  className={
                    discont_price === null
                      ? styles.basicPrice
                      : styles.throughPrice
                  }
                >
                  ${price}
                </p>
              </div>
              <div
                className={
                  discont_price === null
                    ? styles.prise_sale_none
                    : styles.saleFromPrice
                }
              >
                <p
                  className={
                    discont_price === null
                      ? styles.prise_sale_none
                      : styles.saleFromPrice
                  }
                >
                  -{(((price - discont_price) / price) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
            <div className={styles.btns_from_cart}>
              <div className={styles.count}>
                <button className={styles.btn_minus} onClick={decrement}>
                  <img src={minus} alt="minus" />
                </button>
                <div className={styles.quantity_of_product}>{localCount}</div>
                <button className={styles.btn_plus} onClick={increment}>
                  <img src={plus} alt="plus" />
                </button>
              </div>
              <button className={styles.btn_addToCart} onClick={addToCart}>
                Add to cart
              </button>
            </div>
            <div className={styles.description_items}>
              <h4 className={styles.description_header}>Description</h4>
              <div className={styles.description_text}>
                <p className={styles.text}>{description}</p>
                <button className={styles.read_more}>Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SingleProductCard;