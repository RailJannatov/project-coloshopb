import React, { useState } from "react";
import { Card } from "./Card";

export const Detail = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (type) => {
    if (type === "all") {
      setFilteredProducts(products);
      return;
    }
    setFilteredProducts(
      products.filter((product) => product.category.toLowerCase() === type)
    );
  };

  return (
    <>
      <div className="container py-10">
        <h1 className="title text-center font-bold my-10 text-4xl">
          New Arrivals
        </h1>
        <div className="filtered-arrival  flex justify-center ">
          {/* <div className="filter-all" onClick={() => setFilter("")}>
          All
        </div> */}
          <div className="filter-all" onClick={() => handleFilter("all")}>
            All
          </div>
          <div
            className="filter-women"
            onClick={() => handleFilter("groceries")}
          >
            Groceries
          </div>
          {/* <div className="filter-women" onClick={() => setFilter("groceries")}>
          Groceries
        </div> */}
          <div
            className="filter-accessories"
            onClick={() => handleFilter("beauty")}
          >
            Beauty
          </div>
          {/* <div
          className="filter-accessories"
          onClick={() => setFilter("beauty")}
        >
          Beauty
        </div>{" "} */}
          <div
            className="filter-wmen"
            onClick={() => handleFilter("furniture")}
          >
            Furniture
          </div>
          {/* <div className="filter-wmen" onClick={() => setFilter("furniture")}>
          Furniture
        </div> */}
        </div>
      </div>
      <div className="container">
        <div className="product__wrapper my-10 grid  grid-cols-5 gap-10 text-center">
          {filteredProducts?.map((product) => (
            <Card {...product} />
          ))}
        </div>
      </div>
    </>
  );
};
