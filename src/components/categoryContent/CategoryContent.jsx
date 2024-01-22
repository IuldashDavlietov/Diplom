import styles from "./CategoryContent.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoryId } from "../../store/slices/categorySlice";
import { fetchCategories } from "../../store/slices/categoriesSlice";
import { Link } from "react-router-dom";

function CategoryContent() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const categoryIdList = useSelector((state) => state.category.categoryIdList);
  const categoryIdListData = categoryIdList?.data || [];

  const categoriesList = useSelector(
    (state) => state.categories.categoriesList
  );

  const categoryTitle = () => {
    if (
      categoryIdListData &&
      categoryIdListData[0] &&
      categoryIdListData[0].categoryId
    ) {
      const matchingCategory = categoriesList.find(
        (elem) => categoryIdListData[0].categoryId === elem.id
      );
      return matchingCategory ? matchingCategory.title : null;
    }
    return null;
  };

  let title = categoryTitle();

  useEffect(() => {
    dispatch(fetchCategoryId(id));
    dispatch(fetchCategories());
  }, [dispatch, id]);

  return (
    <>
      <section className={styles.categoryContent}>
        <div className={styles.container}>
          <div className={styles.categoriesPage_nav}>
            <Link to="/">
              <button className={styles.nav_btn_mainPage}>Main page</button>
            </Link>
            <div className={styles.nav_line}></div>
            <Link to="/categories">
              <button className={styles.nav_btn_categories}>Categories</button>
            </Link>
            <div className={styles.nav_line}></div>
            <button className={styles.nav_btn_categoryTitle}>{title}</button>
          </div>

          <div className={styles.productsPage_wrapper}>
            {categoryIdListData.map((product) => {
              return (
                <Link
                  to={`/products/${product.id}`}
                  className={styles.product_link}
                  key={product.id}
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
                          className={
                            product.discont_price === null
                              ? styles.prise_sale_none
                              : styles.prise_sale
                          }
                        >{`$${product.discont_price}`}</p>
                        <p
                          className={
                            product.discont_price === null
                              ? styles.prise_sale
                              : styles.prise_default
                          }
                        >{`$${product.price}`}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export default CategoryContent;
