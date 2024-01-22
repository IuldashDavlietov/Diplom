import { useDispatch, useSelector } from "react-redux";
import styles from "./Carusel.module.css";
import Slider from "react-slick";
import { fetchCategories } from "../../store/slices/categoriesSlice";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function CategoriesCarusel() {

    const categoriesList = useSelector((state) => state.categories.categoriesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <>
            <Slider {...settings}>
                {categoriesList.map((item) => {
                    return <Link to={`/categories/${item.id}`} key={item.id} className={styles.link_carusel}><div key={item.id} className={styles.carusel_item}>
                        <div className={styles.carusel_img}>
                            <img src={`http://localhost:3333${item.image}`} alt="" />
                        </div>
                        <div className={styles.carusel_title}>
                            <p className={styles.title_text}>{item.title}</p>
                        </div>
                    </div></Link>
                })}
            </Slider>
        </>
    )
}
export default CategoriesCarusel;