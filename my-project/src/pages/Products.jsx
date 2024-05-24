import React, { useContext, useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";

import { Link } from "react-router-dom";
import { ApiData } from "../components/ContextApi";
import Page from "../components/pagination/Page";
import PaginationArea from "../components/pagination/PaginationArea";

const Products = () => {
  let data = useContext(ApiData)
  let [pageStart, setPageStart] = useState (1)
  let [perPage, setPerPage] = useState (6)

  let lastPage = pageStart * perPage
  let firstPage = lastPage - perPage

  let allPage = data.slice(firstPage, lastPage )

  let pageNumber = []
  for(let i = 0; i < Math.ceil(data.length / perPage); i++){
    pageNumber.push(i)
  }
  return (
    <section>
      <div className="container mx-auto">
        <div className="pt-[124px]">
          <h2 className="text-[49px] font-dmfont font-bold">Product</h2>
          <span className="flex items-center gap-x-2 text-[12px] text-[#767676] font-dmfont font-normal"> <Link to={"/"}>Home</Link> &gt; Product  </span>
        </div>
        <div className="flex">
          <div className="w-[28%]">
            <div className="pt-[130px]">
              <h4 className="text-[20px] font-dmfont font-bold ">
                Shop by Category
              </h4>
              <ul>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px] flex justify-between items-center ">
                  Category 1 <GoPlus />
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px]  ">
                  Category 2
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px] flex justify-between items-center ">
                  Category 3 <GoPlus />
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px] ">
                  Category 4
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px]">
                  Category 5
                </li>
              </ul>
            </div>
            <div className="pt-[30px]">
              <h4 className="text-[20px] font-dmfont font-bold flex justify-between items-center">
                Shop by Color <IoMdArrowDropup />{" "}
              </h4>
              <ul>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px] ">
                  Color 1{" "}
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px]  ">
                  Color 2
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px] ">
                  Color 3{" "}
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px] ">
                  Color 4
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px]">
                  Color 5
                </li>
              </ul>
            </div>
            <div className="pt-[30px]">
              <h4 className="text-[20px] font-dmfont font-bold flex justify-between items-center ">
                Shop by Brand <IoMdArrowDropup />{" "}
              </h4>
              <ul>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px] ">
                  Brand 1
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px]  ">
                  Brand 2
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px] ">
                  Brand 3
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px] ">
                  Brand 4
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px]">
                  Brand 5
                </li>
              </ul>
            </div>
            <div className="pt-[30px] pb-8">
              <h4 className="text-[20px] font-dmfont font-bold ">
                Shop by Price
              </h4>
              <ul>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px] ">
                  $0.00 - $9.99
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px]  ">
                  $10.00 - $9.99
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px]  ">
                  $20.00 - $9.99
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px] ">
                  $30.00 - $9.99
                </li>
                <li className="text-[16px] text-[#767676] font-dmfont font-medium border-b-2 py-[20px]">
                  $40.00 - $9.99
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[72%]">
            <div className="pt-[130px] flex justify-between">
              <div className="flex gap-x-6">
                <span className="border-[2px] border-[#76767649] p-3 ml-10 hover:bg-black hover:text-[#fff] duration-500">
                  {" "}
                  <IoGrid />{" "}
                </span>
                <span className="border-[2px] border-[#76767649] p-3 hover:bg-black hover:text-[#fff] duration-500">
                  {" "}
                  <TfiMenuAlt />{" "}
                </span>
              </div>
              <div className="flex justify-end">
                <div className="flex items-center ">
                  <div className="">
                    <h4 className="text-[16px] text-[#767676] font-dmfont font-medium">
                      Sort by:
                    </h4>
                  </div>
                  <div className="relative">
                    <input
                      className="text-[16px] text-[#767676] font-dmfont font-normal border-2 border-[#7676766b] ml-3 mr-8 py-2 px-[15px]"
                      type="text"
                      placeholder="Featured"
                    />
                    <div className=" absolute top-[50%] right-[40px] translate-y-[-50%]">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>
                <div className="flex items-center ">
                  <div className="">
                    <h4 className="text-[16px] text-[#767676] font-dmfont font-medium">
                      Show:
                    </h4>
                  </div>
                  <div className="relative">
                    <input
                      className="text-[16px] text-[#767676] font-dmfont font-normal border-2 border-[#7676766b] ml-3 py-2 px-[15px]"
                      type="text"
                      placeholder="30"
                    />
                    <div className=" absolute top-[50%] right-[10px] translate-y-[-50%]">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <Page allPage={allPage}/>
              <div className="text-end">
                <PaginationArea pageNumber={pageNumber}/>
              </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Products;
