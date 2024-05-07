import React, { useEffect, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import axios from "axios";
import Slider from "react-slick";
import { GrNext, GrPrevious  } from "react-icons/gr";

function SampleNextArrow(props) {
        const {onClick } = props;
        return (
          <div className="absolute top-[40%] right-0 h-[50px] w-[50px] bg-gray-200 rounded-full text-center !leading-[50px] translate-y-[-40%]" onClick={onClick}
          ><GrNext className="inline-block"/></div>
        );
      }
      
      function SamplePrevArrow(props) {
        const {onClick } = props;
        return (
          <div className="absolute top-[40%] left-0 h-[50px] w-[50px] bg-gray-200 rounded-full text-center !leading-[50px] translate-y-[-40%] z-50" onClick={onClick}
          ><GrPrevious className="inline-block"/></div>
        );
      }



const Arrivals = () => {
  
const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        };

  let [products, setProducts] = useState([]);
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products);
    });
  };
  useEffect(() => {
    getData();
  }, []);

 

  return (
    <section className="mb-[150px]">
      <div className="container mx-auto">
        <div className="">
          <h2 className="text-[39px] font-dmfont font-bold pb-[48px]">
            New Arrivals
          </h2>
        </div>
        <Slider {...settings}>
        {products.map((item) => (
          <div className="!w-[96%] my-3">
            <div className="relative group overflow-hidden">
              <img src={item.thumbnail} alt="" className="w-[100%] h-[300px]" />
              <div className="absolute bg-[#F5F5F5] py-8 bottom-[-120px] right-0 w-full opacity-0 group-hover:bottom-[0px] group-hover:opacity-100 duration-500 ease-in-out ">
                <div className="flex justify-end items-center gap-x-2 mr-4">
                  <p className="text-[16px] text-[#767676] font-dmfont font-medium py-2 hover:text-[#000] hover:font-bold">
                    Add to Wish List
                  </p>
                  <span>
                    <IoIosHeart />
                  </span>
                </div>
                <div className="flex justify-end items-center gap-x-2 mr-4">
                  <p className="text-[16px] text-[#767676] font-dmfont font-medium py-2 hover:text-[#000] hover:font-bold">
                    Compare
                  </p>
                  <span>
                    <TfiReload />
                  </span>
                </div>
                <div className="flex justify-end items-center gap-x-2 mr-4">
                  <p className="text-[16px] text-[#767676] font-dmfont font-medium py-2 hover:text-[#000] hover:font-bold">
                    Add to Cart
                  </p>
                  <span>
                    <IoCartSharp />
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-between pt-[24px]">
                <p className="text-[20px] font-dmfont font-bold">
                {item.title}
                </p>
                <span className="text-[16px] text-[#767676] font-dmfont font-medium hover:text-[#000] hover:font-bold">
                  ${item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
        
      
       
      </div>
    </section>
  );
};

export default Arrivals;
