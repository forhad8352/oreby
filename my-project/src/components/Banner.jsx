import React from "react";
import Ban from "../assets/banner.png";
import { TbReload } from "react-icons/tb";
import { FaTruck } from "react-icons/fa6";
import { RiNumber2 } from "react-icons/ri";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "50px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          padding: "8px 0",
          width: "30px",
          fontWeight: "500",
          color: "black",
          borderRight: "3px #fff solid",
        }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="">
          <img src={Ban} alt="" />
        </div>
        <div className="">
          <img src={Ban} alt="" />
        </div>
        <div className="">
          <img src={Ban} alt="" />
        </div>
        <div className="">
          <img src={Ban} alt="" />
        </div>
      </Slider>

      <div className="border-b-[2px] border-[#6d6d6d46] ">
        <div className="container mx-auto py-5">
          <div className="flex justify-between">
            <div className="flex items-center">
              <RiNumber2 />
              <p className="lg:text-[16px] text-[10px] font-dmfont font-medium text-[#6D6D6D] lg:pl-3">
                Two years warranty
              </p>
            </div>
            <div className="flex items-center">
              <FaTruck />
              <p className="lg:text-[16px] text-[10px] font-dmfont font-medium text-[#6D6D6D] lg:pl-3">
                Free shipping
              </p>
            </div>
            <div className="flex items-center">
              <TbReload />
              <p className="lg:text-[16px] text-[10px] font-dmfont font-medium text-[#6D6D6D] lg:pl-3">
                Return policy in 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
