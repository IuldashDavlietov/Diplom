import { useDispatch, useSelector } from "react-redux";
import styles from "./DiscountedItem.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../store/slices/productsSlice";

function DiscountedItems() {
  const productsList = useSelector((state) => state.products.productsList);

  const dispatch = useDispatch();

  const discountList = productsList.filter(
    (product) => product.discont_price !== null
  );

  const [sort, setSort] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    sort && dispatch(fetchProducts());
  }, [dispatch, sort]);

  const newProducts = discountList
    ? [...discountList].sort((a, b) => {
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
    return (
      (!minPrice || product.price >= minPrice) &&
      (!maxPrice || product.price <= maxPrice)
    );
  });

  return (
    <section className={styles.discountedItems}>
      <div className={styles.container}>
        <div className={styles.discountedItems_items}>
          <div className={styles.discountedItems_nav}>
            <Link to="/">
              <button className={styles.nav_btn_mainPage}>Main page</button>
            </Link>
            <div className={styles.nav_line}></div>
            <button className={styles.nav_btn_products}>All sales</button>
          </div>

          <div className={styles.discountedItems_header_h2}>
            <h2 className={styles.h2_text}>Discounted items</h2>
          </div>

          <div className={styles.discountedItems_filter}>
            <div className={styles.price}>
              <p className={styles.filter_price}>Price</p>
              <input
                onChange={(e) => setMinPrice(e.target.value)}
                className={styles.inp_from}
                type="number"
                placeholder="from"
                value={minPrice}
              />
              <input
                onChange={(e) => setMaxPrice(e.target.value)}
                className={styles.inp_to}
                type="number"
                placeholder="to"
                value={maxPrice}
              />
            </div>

            <div className={styles.sorted}>
              <label className={styles.label_sort} htmlFor="products_select">
                Sorted
              </label>
              <select
                onChange={(e) => setSort(e.target.value)}
                className={styles.select_sort}
                name="products_select"
                id="products_select"
              >
                <option value="default">by default</option>
                <option value="low-high">Price (Low to High)</option>
                <option value="high-low">Price (High to Low)</option>
                <option value="titleAsc">Title (A to Z)</option>
                <option value="titleDesc">Title (Z to A)</option>
              </select>
            </div>
          </div>

          <div className={styles.productsPage_wrapper}>
            {filteredProducts.map((product) => {
              return (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className={styles.product_link}
                >
                  <div key={product.id} className={styles.product_card}>
                    <div className={styles.product_img}>
                      <img
                        src={`http://localhost:3333${product.image}`}
                        alt=""
                      />
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
                    </div>

                    <div className={styles.product_info}>
                      <div className={styles.product_title}>
                        <p className={styles.title_text}>{product.title}</p>
                      </div>
                      <div className={styles.product_prise}>
                        <p
                          className={styles.prise_sale}
                        >{`$${product.discont_price}`}</p>
                        <p
                          className={styles.prise_default}
                        >{`$${product.price}`}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default DiscountedItems;
