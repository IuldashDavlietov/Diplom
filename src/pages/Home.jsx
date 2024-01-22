import React from 'react';
import DiscountsProducts from '../components/discounts-products/Discounts_products';
import DiscountForm from '../components/discountForm/DiscountForm';
import CategoriesHome from '../components/categoriesHome/CategoriesHome';
import SaleHome from '../components/saleHome/SaleHome';

function Home() {
  return (
    <>
      <DiscountsProducts />
      <CategoriesHome />
      <DiscountForm />
      <SaleHome />
    </>
  )
}
export default Home;