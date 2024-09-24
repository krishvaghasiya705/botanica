import React from "react";
import { Link, NavLink } from "react-router-dom";
import Homeicon from "../../assets/svg/Homeicon";

// <--------------------img-------------------->
const Botanicalogo = new URL("../../assets/icon/botaniuca.png", import.meta.url)
  .href;
const Purchaseicon = new URL("../../assets/icon/purchase.png", import.meta.url)
  .href;

const navLinks = [
  { name: "Demos", path: "/" },
  { name: "Page Inner", path: "/" },
  { name: "Features", path: "/" },
  { name: "Online Documentation", path: "/" },
  { name: "FAQs", path: "/" },
];

const Header = () => {
  return (
    <header className="bg-white font-font-bai sticky top-0 z-[9]">
      <div className="container mx-auto px-[20px] max-lg:px-[15px] max-lg:py-[15px]">
        <div className="flex justify-between items-center py-[20px] max-lg:py-[0]">
          <div className="flex items-center gap-[25px]">
            <div className="group">
              <Link
                to="/"
                className="w-[50px] h-[50px] bg-[#ebebeb] flex items-center justify-center rounded transition duration-300 ease-in-out group-hover:bg-cs-green"
                aria-label="home Logo"
              >
                <Homeicon
                  width={20}
                  height={20}
                  fill="#01693a"
                  stroke="#01693a"
                  className=" group-hover:fill-[#FFF] group-hover:stroke-[#FFF] transition duration-300 ease-in-out"
                />
              </Link>
            </div>

            <div className="max-w-[144px] flex items-center">
              <img
                src={Botanicalogo}
                alt="Botanical Logo"
                className="h-auto object-contain"
              />
            </div>
          </div>

          <nav className="flex gap-[50px] items-center max-lg:gap-[24px]">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="text-cs-grey text-[14px] font-[600] hover:text-cs-green transition-colors duration-300 max-lg:hidden"
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to={"/"}
              className="hidden text-cs-grey text-[14px] font-[600] hover:text-cs-green transition-colors duration-300 max-lg:block max-md:hidden"
            >
              Online Documentation
            </NavLink>
            <NavLink
              to={"/"}
              className="hidden text-cs-grey text-[14px] font-[600] hover:text-cs-green transition-colors duration-300 max-lg:block max-md:hidden"
            >
              FAQs
            </NavLink>
          </nav>

          <Link to="/" className="h-[50px]">
            <button className="text-white px-3 max-md:min-w-[154px] min-w-[140px] h-[50px] leading-[46px] rounded-[50px] border-[1px] bg-cs-green flex justify-center items-center transition-all duration-300 hover:bg-[#014c2e] max-xms:min-w-[50px] max-xms:p-[0]">
              <div className="relative flex justify-center items-center mr-[5px] max-xms:mr-0 purchase-button-icon before:absolute before:z-0 before:content-[''] before:w-[24px] before:h-[24px] before:bg-white before:inline-block before:rounded-[50%] before:opacity-[0.25] before:top-0 before:left-0 before:scale-1 before:animate-scale ">
                <img
                  className="h-[24px] w-[24px]"
                  src={Purchaseicon}
                  alt="Purchase Icon"
                />
              </div>
              <span className="text-[0.8125rem] max-md:pr-2.5 max-xms:hidden">
                Purchase Now
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
