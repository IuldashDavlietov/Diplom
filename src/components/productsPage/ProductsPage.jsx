import Filter from "../filter/Filter";
import ProductCard from "../productCard/ProductCard";
import styles from "./ProductsPage.module.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../store/slices/productsSlice";



function ProductsPage() {

    const productsList = useSelector((state) => state.products.productsList);
    
    const [sort, setSort] = useState('');
    const [checkbox, setCheckbox] = useState(false)
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    
    

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(id))
   
    }, [dispatch,id]);



  return (
    <section className={styles.productsPage}>
        <div className={styles.container}>
            <div className={styles.productsPage_items}>

                <div className={styles.productsPage_nav}>
                    <Link to='/'><button className={styles.nav_btn_mainPage}>Main page</button></Link>
                    <div className={styles.nav_line}></div>
                    <button className={styles.nav_btn_products}>All products</button>
                </div>

                <div className={styles.productsPage_header_h2}>
                        <h2 className={styles.h2_text}>All products</h2>
                </div>

                <Filter  setSort={setSort}
                 setCheckbox={setCheckbox}
                 setMinPrice={setMinPrice}
                 setMaxPrice={setMaxPrice}
                 minPrice={minPrice}
                 maxPrice={maxPrice}
                 
                 />
                <ProductCard productsList={productsList}
                 sort={sort}
                 checkbox={checkbox}
                 minPrice={minPrice}
                 maxPrice={maxPrice}/>
            
                
            </div>
        </div>

    </section>
  )
}

export default ProductsPage