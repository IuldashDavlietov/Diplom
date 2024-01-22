import style from './NotFound.module.css';
import kaktus from '../../assets/image/kaktus-404.svg'
import icon4 from "../../assets/image/icon-4.svg"
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate()

    return (
        <section className={style.notFound_page}>
            <div className={style.notFound_items}>
                <div className={style.item_404}>
                    <img className={style.icon4} src={icon4} alt="4" />
                    <img className={style.kaktus_img} src={kaktus} alt="kaktus" />
                    <img className={style.icon4} src={icon4} alt="4" />
                </div>
                <div className={style.notFound_info}>
                    <h3 className={style.notFound_h3}>Page Not Found</h3>
                    <p className={style.notFound_text}>We’re sorry, the page you requested could not be found.
                        Please go back to the homepage.</p>
                </div>
                <div className={style.goHome_btn}>
                    <button onClick={() => navigate('/')} className={style.notFound_btn}>Go Home</button>
                </div>
            </div>
        </section>
    )
}

export default NotFound;