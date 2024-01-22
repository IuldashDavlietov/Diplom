import { useParams } from "react-router-dom";
import SingleProductCard from "../components/singleProductCard/SingleProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductId } from "../store/slices/singleProduct";
import { fetchCategories } from "../store/slices/categoriesSlice";

function SingleProduct() {

  const { product_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductId(product_id));
    dispatch(fetchCategories());
  }, [dispatch, product_id]);

  const single_Product = useSelector((state) => state.product.productIdList);

  return (
    <div>
      <SingleProductCard single_Product={single_Product} />
    </div>
  )
}
export default SingleProduct;