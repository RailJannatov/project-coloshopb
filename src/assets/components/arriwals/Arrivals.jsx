import React from "react";

function Arrivals() {
  return (
    <div className="container py-10">
      <h1 className="title text-center font-bold my-10 text-4xl">
        New Arrivals
      </h1>
      <div className="filtered-arrival  flex justify-center ">
        <div className="filter-all">All</div>
        <div className="filter-women">Women's</div>
        <div className="filter-accessories">accessories</div>{" "}
        <div className="filter-wmen">Men's</div>
      </div>

    </div>
  );
}

export default Arrivals;
