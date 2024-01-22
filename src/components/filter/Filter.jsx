import styles from "./Filter.module.css"

function Filter({ setSort, setCheckbox, setMinPrice, setMaxPrice, minPrice, maxPrice }) {
  return (
    <>
      <div className={styles.productsPage_filter}>
        <div className={styles.price}>
          <p className={styles.filter_price}>Price</p>
          <input onChange={(e) => setMinPrice(e.target.value)} className={styles.inp_from} type="number" placeholder='from' value={minPrice} />
          <input onChange={(e) => setMaxPrice(e.target.value)} className={styles.inp_to} type="number" placeholder='to' value={maxPrice} />
        </div>

        <div className={styles.discountedItems}>
          <label className={styles.label_discount} htmlFor="products_checkbox">Discounted items</label>
          <input onClick={(e) => setCheckbox(e.target.checked)} className={styles.inp_checkbox} id="products_checkbox" type="checkbox" />
        </div>
        <div className={styles.sorted}>
          <label className={styles.label_sort} htmlFor="products_select">Sorted</label>
          <select onChange={(e) => setSort(e.target.value)}
            className={styles.select_sort}
            name="products_select"
            id="products_select" >
            <option value="default">by default</option>
            <option value="low-high">Price (Low to High)</option>
            <option value="high-low">Price (High to Low)</option>
            <option value="titleAsc">Title (A to Z)</option>
            <option value="titleDesc">Title (Z to A)</option>
          </select>
        </div>
      </div>
    </>
  )
}
export default Filter;