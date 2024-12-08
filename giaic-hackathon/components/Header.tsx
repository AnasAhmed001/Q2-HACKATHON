import React from "react";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="h-11 bg-[#7E33E0] flex justify-around text-white">
        <div className="w-1/2 flex m-3 pl-20 items-center gap-12">
          <div className="flex items-center">
            <CiMail />
            <h1 className="ml-3">mhhasanul@gmail.com</h1>
          </div>
          <div className="flex items-center">
            <FiPhoneCall />
            <h1 className="ml-3">(12345)67890</h1>
          </div>
        </div>
        <div>
            <ul className="flex flex-row gap-4 items-center mr-5 pt-2 ">
              <li>English</li>
              <li>USD</li>
              <li>Login</li><h1><CgProfile /></h1>
              <li>Wishlist</li>
              <li><BsCart2 /></li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
