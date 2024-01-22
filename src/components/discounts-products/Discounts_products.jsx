import React from 'react'
import style from "./Disc_prod.module.css";
import { Link } from 'react-scroll';

function DiscountsProducts() {
  return (
    <section className={style.discounts_products}>
      <div className={`${style.container} ${style.presentation}`}>
        <h1 className={style.section_text}>
          Amazing Discounts on Garden Products!
        </h1>
        <Link to='saleHome_id' smooth={true} duration={500}>
          <button className={style.section_btn}>Check out</button>
        </Link>
      </div>
    </section>
  )
}
export default DiscountsProducts;