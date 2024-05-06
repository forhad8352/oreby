import {useEffect, useState} from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";

const Searchbar = () => {
  let [cateshow, setCateshow] = useState(false)
  let [cartshow, SetCartshow] = useState (false)
  let [usershow, SetUsershow] = useState (false)

  let cateMenu = useRef()
  let cartMenu = useRef ()
  let userMenu = useRef ()

  useEffect (()=>{
   document.addEventListener ( "click", (e)=>{
    if (cateMenu.current.contains (e.target)== true) {
       setCateshow (true)
    } else {
      setCateshow (false)
    }

    if (cartMenu.current.contains (e.target) == true){
      SetCartshow (!cartshow)
    } else {
      SetCartshow (false)
    }

    if (userMenu.current.contains (e.target) == true){
      SetUsershow (!usershow)
    } else {
      SetUsershow (false)
    }

   })

  },[cateshow,cartshow,usershow])

  return (
    <div className="bg-[#F5F5F3] p-4">
      <div className="container mx-auto ">
        <div className="flex items-center">
          <div className="w-[30%] ">
            <div className="flex items-center" ref={cateMenu}>
              <HiMiniBars3BottomLeft />
              <p className="pl-[10px] text-[14px] ">Shop by Category</p>
            </div>
            {cateshow &&
            <div className=" bg-[#262626] absolute z-50 lg:top-[150px] top-[48px] left-[120px] lg:w-[300px] w-[200px] ">
            <ul>
            <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Accesories</a></li>
            <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Furniture</a></li>
            <li className='py-3  relative'><a href="#"  className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal pl-5  hover:text-[#fff] hover:pl-10 duration-700'>Electronics</a></li>
            <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Clothes</a></li>
            <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Bags</a></li>
            <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Home appliances</a></li>
        </ul>
            </div>
            }
          </div>
          <div className="w-[40%]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="border-2 border-[#FFFFFF] w-full h-10 rounded-[10px] pl-[10px]"
              />
              <div className="absolute right-[15px] top-[50%] translate-y-[-50%] ">
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="flex justify-end gap-x-5">
            <div className="relative" ref={userMenu}>
                <a href="#" className="flex">
                    <FaUser className='lg:text-[24px] text-[#262626]' />
                    <IoMdArrowDropdown/>
                </a>
                {usershow &&
                    <div className="absolute z-50 top-12 right-[0px]">
                        <div className="text-center">
                            <ul>
                                <li className='text-[#262626] bg-[#FFFFFF]  h-[50px] w-[150px] leading-[50px] hover:bg-[#262626] hover:text-[#fff] duration-500 '>My Account</li>
                                <li className='text-[#262626] bg-[#FFFFFF]  h-[50px] w-[150px] leading-[50px] hover:bg-[#262626] hover:text-[#fff] duration-500 '>Log Out</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
            
            <div className="relative" ref={cartMenu}>
            <a href="#"  >
                <FaCartShopping className='lg:text-[24px] text-[#262626] ml-[15px]' />
            </a>
            {cartshow &&
            <div className="absolute z-50 top-[40px] lg:right-0 right-[-15px] ">
              <div className="flex bg-[#F5F5F3] py-[20px] px-[20px]">
                <div className="flex items-center justify-between w-[350px]">
                  <div className="h-[100px] w-[100px] bg-[#979797] mr-[20px]"></div>
                  <div className="">
                    <h4 className="text-[14px ] text-[#262626] font-dmfont font-bold">
                      Black Smart Watch
                    </h4>
                    <p className="text-[14px ] text-[#262626] font-dmfont font-bold"> $44.00</p>
                  </div>
                  <div className="ml-[30px]">
                    <RxCross2 />
                  </div>
                </div>
              </div>
              <div className="bg-[white] py-[20px] px-[20px]">
                <div className="">
                  <h3 className="">
                    <span className="text-[16px] text-[rgba(38,38,38,0.67)] font-dmfont font-normal">Subtotal:</span>{" "}
                    <span className="text-[16px] text-[rgb(38,38,38)] font-dmfont font-bold">{" "}$44.00 </span>
                  </h3>
                </div>
                <div className="flex justify-between py-[20px]">
                  <div className="">
                    <a href="#"className="py-[16px] px-[40px] border text-[16px] text-[#262626] font-dmfont font-normal hover:bg-[#ac5c77] hover:text-[white] duration-500 ">View Cart</a>
                  </div>
                  <div className="">
                    <a href="#" className="py-[16px] px-[40px] border text-[16px] text-[#262626] font-dmfont font-normal hover:bg-[#ac5c77] hover:text-[white] duration-500 ">Checkout</a>
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
