import React from "react";

function Category() {
  return (
    <div className="container">
      <div className="category-wrapper text-xl text-center flex justify-center gap-10 py-10">
        <div className="accesories relative">
          <img src="./images/banner_1.jpg.webp" />
          <div className="imges-links absolute top-1/3 right-1/3 ext-center  hover:text-gray-500 duration-300 bg-white py-5 px-10 ">Women's</div>
        </div>
        <div className="women  relative ">
          <img src="./images/banner_2.jpg.webp" />
          <div className="imges-links absolute top-1/3 right-1/3 ext-center  hover:text-gray-500 duration-300 bg-white py-5 px-10">Women's</div>
        </div>
        <div className="men relative">
          <img src="./images/men.webp" />
          <div className="imges-links absolute top-1/3 right-1/3 hover:text-gray-500 duration-300 ext-center bg-white py-5 px-10">Women's</div>
        </div>
      </div>
    </div>
  );
}

export default Category;
