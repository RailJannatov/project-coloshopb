import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../features/products/productsSlice";
import { Detail } from "./Detail";

// Presentation,Container bu patterni arashdir

// useEffect(() => {
//   if (filter === "") {
//     setFilteredProducts(products);
//   } else {
//     setFilteredProducts(
//       products.filter(
//         (product) => product.category.toLowerCase() === filter.toLowerCase()
//       )
//     );
//   }
// }, [filter, products]);

// const [filteredProducts, setFilteredProducts] = useState(products);

// console.log(filteredProducts);
// const [filter, setFilter] = useState("");

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { products, loading } = useSelector((state) => state.products);

  if (loading) {
    return (
      <div className=" container text-[100px] my-[100px] text-center">
        LOADING...
      </div>
    );
  }

  return (
    <div>
      <Detail products={products} />
    </div>
  );
}

export default Products;
