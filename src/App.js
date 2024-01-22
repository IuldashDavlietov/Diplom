/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Cart from "./pages/Cart";
import { fetchCategories } from "./store/slices/categoriesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./store/slices/productsSlice";


import CategoryContent from "./components/categoryContent/CategoryContent";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoryContent />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:product_id" element={<SingleProduct />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
