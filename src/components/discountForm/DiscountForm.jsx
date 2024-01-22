import style from "./DicsountForm.module.css"
import gardenTools from "..//../assets/image/garden-tools.svg"
import Form from '../form/Form';


function DiscountForm() {

    return (
        <section className={style.discountForm}>
            <div className={`${style.container} ${style.discountForm_items}`}>
                <div className={style.item_h2}>
                    <h2>5% off on the first order</h2>
                </div>

                <div className={style.flex_wrapper}>
                    <div className={style.item_img}>
                        <img src={gardenTools} alt="" />
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    )
}
export default DiscountForm;