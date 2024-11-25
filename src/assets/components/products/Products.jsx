import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../features/products/productsSlice";

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { products, loading } = useSelector((state) => state.products);
  console.log(products);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(
          (product) => product.category.toLowerCase() === filter.toLowerCase()
        )
      );
    }
  }, [filter, products]);

  if (loading)
    return (
      <div className=" container text-[100px] my-[100px] text-center">
        LOADING...
      </div>
    );
  return (
    <>
      <div className="container py-10">
        <h1 className="title text-center font-bold my-10 text-4xl">
          New Arrivals
        </h1>
        <div className="filtered-arrival  flex justify-center ">
          <div className="filter-all" onClick={() => setFilter("")}>
            All
          </div>
          <div className="filter-women" onClick={() => setFilter("groceries")}>
            Groceries
          </div>
          <div
            className="filter-accessories"
            onClick={() => setFilter("beauty")}
          >
            Beauty
          </div>{" "}
          <div className="filter-wmen" onClick={() => setFilter("furniture")}>
            Furniture
          </div>
        </div>
      </div>
      <div className="container">
        <div className="product__wrapper my-10 grid  grid-cols-5 gap-10 text-center">
          {Array.isArray(filteredProducts) ? (
            filteredProducts.map((product) => (
              <div className="product group hover:shadow-2xl duration-500  border-r-2 w-full">
                <div className="product__img-wrapper w-full h-[250px]">
                  <img
                    src={product.images}
                    className="object-fit w-full h-full"
                  />
                </div>
                <div className="product__title text-xl font-semibold py-3 h-[80px]">
                  {product.title}
                </div>
                <div className="product-price font-bold my-4">
                  ${product.price}
                </div>
                <div className="product-addTo  text-white  font-semibold ">
                  <div className="mt-5 py-2 bg-red-500 inset-0  justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    ADD TO CARD
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
