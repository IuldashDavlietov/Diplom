import { useSelector } from "react-redux";
import styles from "./SaleHome.module.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SaleHome() {

    const productsList = useSelector((state) => state.products.productsList);

    const discountList = productsList.filter(
        (product) => product.discont_price !== null
    );

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <section id="saleHome_id" className={styles.saleHome}>
            <div className={styles.container}>
                <div className={styles.saleHome_items}>
                    <div className={styles.header_h2}>
                        <h2 className={styles.header_title}>Sale</h2>
                        <div className={styles.line}></div>
                        <div className={styles.sales_btn}>
                            <Link to="/sales">
                                <button className={styles.btn_allSales}>All sales</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.sale_carusel}>
                        <Slider {...settings}>
                            {discountList.map((card) => {
                                return <Link key={card.id} to={`/products/${card.id}`} className={styles.carusel_link}><div key={card.id} className={styles.product_card}>
                                    <div className={styles.product_img}>
                                        <img src={`http://localhost:3333${card.image}`} alt={card.title} />
                                        <div className={styles.sale_absolute}>
                                            <p className={styles.absolute_text}>-{(((card.price - card.discont_price) / card.price) * 100).toFixed(1)}%</p>
                                        </div>
                                    </div>
                                    <div className={styles.product_info}>
                                        <div className={styles.product_title}>
                                            <p className={styles.title_text}>{card.title}</p>
                                        </div>
                                        <div className={styles.product_prise}>
                                            <p className={styles.prise_sale}>${card.discont_price}</p>
                                            <p className={styles.prise_default}>${card.price}</p>
                                        </div>
                                    </div>
                                </div></Link>
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SaleHome;
