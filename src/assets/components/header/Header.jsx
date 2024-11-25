import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <div className="container  ">
        <div className="grid grid-cols-12 py-10">
          <div className="logo font-bold text-2xl col-span-2">
            <span>COLO</span>
            <span className="text-red-500">SHOP</span>
          </div>
          <div className="header-list col-span-8">
            <ul className="flex px-10">
              <li>HOME</li>
              <li>SHOP</li>
              <li>PROMOTION</li>
              <li>PAGES</li>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="utility-bar text-center  col-span-2 grid grid-cols-3">
            <div className="header-search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="header-login">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="header-basket">
              <FontAwesomeIcon icon={faCartPlus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
