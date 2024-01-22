/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
import { Link, useParams } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../store/slices/productsSlice";
import { addItemCart, countPlus } from "../../store/slices/cartSlice"

function ProductCard({ productsList, sort, checkbox, minPrice, maxPrice }) {

  const { id } = useParams();
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.list);
  const [localCount, setLocalCount] = useState(1);

  const addToCart = (product) => {
    const productInCart = cartList.find((elem) => elem.id === id)

    if (productInCart) {
      dispatch(countPlus({ id: product.id, count: localCount }))
    } else {
      dispatch(addItemCart({ ...product, count: localCount }));
    }
  }

  useEffect(() => {
    if (sort || checkbox) dispatch(fetchProducts());
    setLocalCount(1)
  }, [dispatch, id, sort, checkbox]);

  const newProducts = productsList
    ? [...productsList].sort((a, b) => {
      if (sort === "low-high") {
        return a.price - b.price;
      } else if (sort === "high-low") {
        return b.price - a.price;
      } else if (sort === "titleAsc") {
        return a.title.localeCompare(b.title);
      } else if (sort === "titleDesc") {
        return b.title.localeCompare(a.title);
      } else {
        return 0;
      }
    })
    : [];

  const filteredProducts = newProducts.filter((product) => {
    const hasDiscount = checkbox && product.discont_price !== null;

    return (
      (!checkbox || hasDiscount) &&
      (!minPrice || product.price >= minPrice) &&
      (!maxPrice || product.price <= maxPrice)
    );
  });

  return (
    <>
      <div className={styles.productsPage_wrapper}>
        {filteredProducts.map((product) => {
          return (
            <div key={product.id} className={styles.product_card}>
              <div className={styles.product_img}>
                <img src={`http://localhost:3333${product.image}`} alt="" />
                <div
                  className={
                    product.discont_price === null
                      ? styles.prise_sale_none
                      : styles.sale_absolute
                  }
                >
                  <p
                    className={
                      product.discont_price === null
                        ? styles.prise_sale_none
                        : styles.absolute_text
                    }
                  >
                    -
                    {(
                      ((product.price - product.discont_price) /
                        product.price) *
                      100
                    ).toFixed(1)}
                    %
                  </p>
                </div>
                <div
                  className={styles.btn_addItemCart}
                >
                  <button onClick={() => addToCart(product)} className={styles.addToCart_btn}>
                    Add to cart</button>
                </div>
              </div>
              <Link
                to={`/products/${product.id}`}
                className={styles.product_link}
              >
                <div className={styles.product_info}>
                  <div className={styles.product_title}>
                    <p className={styles.title_text}>{product.title}</p>
                  </div>
                  <div className={styles.product_prise}>
                    <p
                      className={
                        product.discont_price === null
                          ? styles.prise_sale_none
                          : styles.prise_sale
                      }
                    >
                      {`$${product.discont_price}`}
                    </p>
                    <p
                      className={
                        product.discont_price === null
                          ? styles.prise_sale
                          : styles.prise_default
                      }
                    >
                      {`$${product.price}`}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ProductCard;
