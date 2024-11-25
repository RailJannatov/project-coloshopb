import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-[#F2F2F2] py-10 mt-[100px] ">
        <div className="container">
          <div className="flex justify-between">
            <div>
              <div className="text-2xl">Newsletter</div>
              <p>
                Subscribe to our newsletter and get 20% off your first purchase
              </p>
            </div>
            <div>
              <input
                type="text"
                className="h-[40px] w-[250px] px-4"
                placeholder="Your email"
              />
              <button className="px-5 h-[40px] text-white font-semibold hover:bg-red-400  bg-red-500">
                SUBSCRIPE
              </button>
            </div>
          </div>
        </div>
      </div>

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
        <div className=" text-gray-500 mb-[100px]">
          ©2018 All Rights Reserverd. This template is made with by{" "}
          <span className="text-red-500">Colorlib</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
