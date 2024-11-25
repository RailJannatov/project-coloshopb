import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../features/products/productsSlice";

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { products, loading } = useSelector((state) => state.products);
  console.log(products);
  if (loading) return <div className=" container text-[100px] my-[100px] text-center">LOADING...</div>;
  return (
    <div className="container">
      <div className="product__wrapper my-10 grid  grid-cols-5 gap-10 text-center">
        {/* <div className="product border-r-2 w-full">
          <div className="product__img-wrapper w-full h-[250px]">
            <img
              src="./images/foto1.png"
              className="object-fit w-full h-full"
            />
          </div>
          <div className="product__title">sdncjnc</div>
          <div className="product-price">$567</div>
          <div className="product-addTo  text-white  font-semibold "><div className="mt-5 py-2 bg-red-500 inset-0  justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">ADD TO CARD</div></div>
        </div>  */}
        {Array.isArray(products) ? (
          products.map((product) => (
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
              <div className="product-price font-bold my-4">${product.price}</div>
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
  );
}

export default Products;
