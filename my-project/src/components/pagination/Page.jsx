import React from 'react'
import { IoIosHeart } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";

const Page = ({allPage}) => {
  return (
<div className="flex justify-between pt-[60px] pl-[38px] flex-wrap">
    {allPage.map((item)=>(
      <div className="w-[32%] mb-[50px]">
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
            <span><TfiReload /></span>
          </div>
          <div className="flex justify-end items-center gap-x-2 mr-4">
            <p className="text-[16px] text-[#767676] font-dmfont font-medium py-2 hover:text-[#000] hover:font-bold">
              Add to Cart
            </p>
            <span><IoCartSharp /></span>
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

</div>
  )
}

export default Page