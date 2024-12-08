import React from "react";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="w-[1920px] h-11 bg-[#7E33E0] flex text-white">
        <div className="flex m-3 pl-20 items-center gap-12">
          <div className="flex items-center">
            <CiMail />
            <h1 className="ml-4">mhhasanul@gmail.com</h1>
          </div>
          <div className="flex items-center">
            <FiPhoneCall />
            <h1 className="ml-4">(12345)67890</h1>
          </div>
        </div>
        <div>
            
        </div>
      </div>
    </>
  );
};

export default Header;
