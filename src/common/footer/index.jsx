import React from "react";
import { Link } from "react-router-dom";
import Facebookicon from "../../assets/svg/Facebookicon";
import Behanceicon from "../../assets/svg/Behanceicon";
import Dribbleicon from "../../assets/svg/Dribbleicon";
import Instagramicon from "../../assets/svg/Instagramicon";

const Botanicalogo = new URL("../../assets/icon/botaniuca.png", import.meta.url)
  .href;

const FooterLinks = [
  { name: "Why Choose Us", path: "/why" },
  { name: "Our Portfolio", path: "/our" },
  { name: "How To Get Support", path: "/how" },
  { name: "License Policy", path: "/license" },
  { name: "Refund Policy", path: "/refund" },
  { name: "FAQs", path: "/faqs" },
];

const Footer = () => {
  return (
    <footer className="bg-cs-blue font-font-bai">
      <div className="container mx-auto px-[15px]">
        <div className="flex max-lg:flow-root">
          <div className="w-[42%] float-left bg-cs-blue-dark text-center py-[100px] order-1 max-lg:w-full max-lg:pt-[80px] max-lg:pb-[50px] max-lg:bg-transparent">
            <Link to={"/"} className="flex justify-center">
              <img
                className="max-w-[144px]"
                src={Botanicalogo}
                alt="Botanicalogo"
              />
            </Link>
            <p className="pt-[30px] text-white text-[0.6875rem] uppercase">
              Copyright © 2023{" "}
              <Link to={"/"} className="text-cs-green font-bold">
                Rising Bamboo
              </Link>
              . All rights reserved.
            </p>
            <div className="flex justify-center gap-[10px] pt-[48px]">
              <div className="rounded-full group">
                <Link
                  to={"/"}
                  className="h-[50px] w-[50px] rounded-full bg-white flex justify-center items-center group-hover:bg-cs-green transition duration-300 ease-in-out"
                >
                  <Facebookicon
                    width={18}
                    height={18}
                    fill="#000"
                    className=" group-hover:fill-white transition duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="rounded-full group">
                <Link
                  to={"/"}
                  className="h-[50px] w-[50px] rounded-full bg-white flex justify-center items-center group-hover:bg-cs-green transition duration-300 ease-in-out"
                >
                  <Behanceicon
                    width={16}
                    height={16}
                    fill="#000"
                    className=" group-hover:fill-white transition duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="rounded-full group">
                <Link
                  to={"/"}
                  className="h-[50px] w-[50px] rounded-full bg-white flex justify-center items-center group-hover:bg-cs-green transition duration-300 ease-in-out"
                >
                  <Dribbleicon
                    width={16}
                    height={16}
                    fill="#000"
                    className=" group-hover:fill-white transition duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="rounded-full group">
                <Link
                  to={"/"}
                  className="h-[50px] w-[50px] rounded-full bg-white flex justify-center items-center group-hover:bg-cs-green transition duration-300 ease-in-out"
                >
                  <Instagramicon
                    width={18}
                    height={18}
                    fill="#000"
                    className=" group-hover:fill-white transition duration-300 ease-in-out"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[29%] float-left py-[100px] text-left text-white -order-1 max-lg:py-0 max-lg:pb-[50px] max-lg:w-[50%] max-md:w-full">
            <p className="font-bold text-base uppercase">
              What Is The Support Time
            </p>

            <p className="text-[0.8125rem] leading-6 pt-4 pr-10">
              All of your emails will be reviewed and checked manually
              carefully. However, based on the number support tickets and the
              nature of the request itself
            </p>
            <ul className="pt-2.5 text-[13px] font-semibold">
              <li className="relative pl-[20px] mt-[11px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-cs-green before:absolute before:left-0 before:top-[8px]">
                <span className="text-cs-green">Support Time</span> : Monday –
                Friday
              </li>
              <li className="relative pl-[20px] mt-[11px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-cs-green before:absolute before:left-0 before:top-[8px]">
                <span className="text-cs-green">Response Time</span> : 24 Hours
                – 48 Hours
              </li>
              <li className="relative pl-[20px] mt-[11px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-cs-green before:absolute before:left-0 before:top-[8px]">
                <span className="text-cs-green">Timezone</span> : Our Timezone
                is GMT+7
              </li>
            </ul>
          </div>
          <div className="w-[29%] float-left py-[100px] max-md:text-left text-right text-white order-2 max-lg:py-0 max-lg:pb-[50px] max-lg:w-[50%] max-md:!w-full">
            <p className="font-bold text-base uppercase">Information</p>
            <div className="pt-[8px] flex flex-col items-end max-md:items-start">
              {FooterLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="w-fit pt-[11px] text-[0.8125rem] hover:text-cs-green transition duration-300 ease-in-out"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
