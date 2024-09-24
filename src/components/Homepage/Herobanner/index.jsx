import React, { useState } from "react";

const checkicon = new URL("../../../assets/icon/check.png", import.meta.url)
  .href;
const Banner1 = new URL("../../../assets/image/banner1-1.jpg", import.meta.url)
  .href;
const Banner2 = new URL("../../../assets/image/banner1-2.jpg", import.meta.url)
  .href;
const Lemonimage = new URL(
  "../../../assets/icon/lemon-slice.png",
  import.meta.url
).href;
const Leafimage = new URL("../../../assets/icon/Basil.png", import.meta.url)
  .href;
const Vegetableone = new URL(
  "../../../assets/icon/vegetable-one.png",
  import.meta.url
).href;
const Vegetabletwo = new URL(
  "../../../assets/icon/vegetable-two.png",
  import.meta.url
).href;

function HomeHerobanner() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { offsetWidth, offsetHeight } = event.currentTarget;
    const xPos = (clientX / offsetWidth) * 2 - 1;
    const yPos = (clientY / offsetHeight) * 2 - 1;
    setMousePos({ x: xPos, y: yPos });
  };

  const moveFactor = 10;

  return (
    <div className="w-full relative" onMouseMove={handleMouseMove}>
      <div className="container mx-auto grid grid-cols-12 gap-[30px] px-[15px]">
        <div className="col-span-5 text-white">
          <div className="relative z-[1] py-[297px] max-1xl:py-[200px] max-lg:py-[80px]">
            <h1 className="text-3xl text-left text-black font-bold leading-[3rem] max-2xl:leading-[48px] max-2xl:text-lg">
              <span className="text-cs-green">Botanica</span> - Organic Food{" "}
              <br className="hidden max-2xl:flex" /> WooCommerce Wordpress Theme
            </h1>
            <p className="pt-[24px] text-[14px] text-cs-black-thin text-left leading-6">
              Botanica is astounding theme is great for all kinds of websites:
              organic food, natural health products, food blogs, natural medical
              products, for any bakery, restaurant, ice cream shop, coffee shop,
              grocery store, …
            </p>
            <div className="pt-8 text-cs-black-thin block">
              {[
                "Built with Tailwind CSS v3.3.1",
                "Drag & Drop Elementor Page Builder",
                "Multi-Headers & Multi-Footers",
                "High Converting WooCommerce Wordpress Theme",
                "Maximum Customizability",
                "Outstanding Support",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex justify-start items-center gap-[25px] mb-[9px]"
                >
                  <img
                    className="w-[16px] h-[16px] mb-[4px]"
                    src={checkicon}
                    alt="checkicon"
                  />
                  <span className="text-[14px] font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-7 h-full max-w-[740px] max-2xl:max-w-[729px]">
          <div className="relative w-full h-full">
            <div
              className="absolute top-[7.125rem] left-[-6rem]"
              style={{
                transform: `translate(${-mousePos.x * moveFactor}px, ${
                  -mousePos.y * moveFactor
                }px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <img src={Lemonimage} alt="Lemonimage" />
            </div>
            <div
              className="absolute bottom-[2.5rem] left-[-90px]"
              style={{
                transform: `translate(${-mousePos.x * moveFactor}px, ${
                  -mousePos.y * moveFactor
                }px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <img src={Leafimage} alt="Leafimage" />
            </div>
            <div className="absolute bottom-0 left-0 z-[2] shadow-[0_30px_35px_0px_rgba(0,0,0,0.35)] max-w-[478px] max-2xl:max-w-[420px] max-lg:max-w-[260px]">
              <img src={Banner1} alt="Banner1" />
            </div>
            <div className="absolute top-0 right-0 z-[1] shadow-[0_30px_35px_0px_rgba(0,0,0,0.35)] max-w-[307px] max-2xl:max-w-[240px] max-lg:max-w-[180px]">
              <img src={Banner2} alt="Banner2" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-1/3 left-[60px] max-w-[110px] max-3xl:hidden"
        style={{
          transform: `translate(${-mousePos.x * moveFactor}px, ${
            -mousePos.y * moveFactor
          }px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img src={Vegetableone} alt="Vegetableone" />
      </div>
      <div
        className="absolute top-1/3 right-[60px] max-w-[110px] max-3xl:hidden"
        style={{
          transform: `translate(${-mousePos.x * moveFactor}px, ${
            -mousePos.y * moveFactor
          }px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img src={Vegetabletwo} alt="Vegetabletwo" />
      </div>
    </div>
  );
}

export default HomeHerobanner;
