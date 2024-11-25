export const Card = ({ images, title, price }) => (
  <div className="product group hover:shadow-2xl duration-500  border-r-2 w-full">
    <div className="product__img-wrapper w-full h-[250px]">
      <img src={images} className="object-fit w-full h-full" />
    </div>
    <div className="product__title text-xl font-semibold py-3 h-[80px]">
      {title}
    </div>
    <div className="product-price font-bold my-4">${price}</div>
    <div className="product-addTo  text-white  font-semibold ">
      <div className="mt-5 py-2 bg-red-500 inset-0  justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        ADD TO CARD
      </div>
    </div>
  </div>
);
