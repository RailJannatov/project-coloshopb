import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="flex justify-between my-10">
        <div className="flex gap-14 py-2 text-gray-500">
          <div>Blog</div>
          <div>FAQs</div>
          <div>Contact</div>
        </div>
        <div>
          <img src="./images/fo.png" />
        </div>
      </div>
      <div className=" text-gray-500 mb-[100px]">©2018 All Rights Reserverd. This template is made with  by <span className="text-red-500">Colorlib</span></div>
    </div>
  );
}

export default Footer;
