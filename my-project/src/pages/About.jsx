import React from "react";
import { Link } from "react-router-dom";
import Ar from "../assets/arri1.png";
import Arr from "../assets/arri11.png";
import Arrr from "../assets/arri6.png";

const About = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="pt-[124px]">
          <h2 className="text-[49px] font-dmfont font-bold">About</h2>
          <span className="flex items-center gap-x-2 text-[12px] text-[#767676] font-dmfont font-normal">
            {" "}
            <Link to={"/"}>Home</Link> &gt; About{" "}
          </span>
        </div>
        <div className="pt-[136px]">
          <div className="w-[100%]">
            <div className="flex justify-between">
              <div className="relative">
                <img src={Ar} alt="" />
                <div className=" absolute top-[80%] left-[30%]">
                  <h5 className="text-[16px] font-dmfont font-bold py-2 px-8 border-[1px] border-[#000]  hover:bg-black hover:text-[#fff] duration-1000 ease-in-out">
                    Our Brands
                  </h5>
                </div>
              </div>
              <div className="relative">
                <img src={Arrr} alt="" />
                <div className=" absolute top-[80%] left-[30%]">
                  <h5 className="text-[16px] font-dmfont font-bold py-2 px-8 border-[1px] border-[#000]  hover:bg-black hover:text-[#fff] duration-1000 ease-in-out">
                    Our Brands
                  </h5>
                </div>
              </div>
              <div className=" relative">
                <img src={Arr} alt="" />
                <div className=" absolute top-[80%] left-[30%]">
                  <h5 className="text-[16px] font-dmfont font-bold py-2 px-8 border-[1px] border-[#000]  hover:bg-black hover:text-[#fff] duration-1000 ease-in-out">
                    Our Stores
                  </h5>
                </div>
              </div>
            </div>
            <div className="pt-[128px]">
              <h3 className=" text-[39px] font-dmfont font-normal leading-[52px] ">
                Orebi is one of the world’s leading ecommerce brands and is
                internationally recognized for celebrating the essence of
                classic Worldwide cool looking style.
              </h3>
            </div>
            <div className="flex justify-between py-[120px]" >
              <div className="w-[30%]">
                <h4 className="text-[25px] font-dmfont font-bold">
                  Our Vision
                </h4>
                <p className="text-[16px] font-dmfont font-normal text-[#767676] leading-[30px] ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
              <div className="w-[30%]">
                <h4 className="text-[25px] font-dmfont font-bold">Our Story</h4>
                <p className="text-[16px] font-dmfont font-normal text-[#767676] leading-[30px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen
                </p>
              </div>
              <div className="w-[30%]">
                <h4 className="text-[25px] font-dmfont font-bold">Our Brand</h4>
                <p className="text-[16px] font-dmfont font-normal text-[#767676] leading-[30px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
