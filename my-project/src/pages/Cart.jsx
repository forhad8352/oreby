import React from "react";
import { Link } from "react-router-dom";
import Cartt from "../assets/cart.png";
import { RxCross2 } from "react-icons/rx";
import { FaPlus, FaMinus  } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { productIncrement, productDecrement, productCross } from "../components/slice/productSlice";

const Cart = () => {
  let dispatch = useDispatch ()
  let data = useSelector((state)=>state.product.cartItem)
 

  return (
    <div className="container mx-auto">
      <div className="py-[124px]">
        <h2 className="text-[49px] font-dmfont font-bold">Cart</h2>
        <span className="flex items-center gap-x-2 text-[12px] text-[#767676] font-dmfont font-normal">
          <Link to={"/"}> Home </Link> &gt; Cart
        </span>
      </div>
      <div className="py-[34px] bg-[#F5F5F3]">
        <div className="flex justify-between  w-[80%]">
          <div className="">
            <h4 className="text-[16px] font-dmfont font-bold pl-[20px]">
              Product
            </h4>
          </div>
          <div className="">
            <h4 className="text-[16px] font-dmfont font-bold">Price</h4>
          </div>
          <div className="">
            <h4 className="text-[16px] font-dmfont font-bold">Quantity</h4>
          </div>
          <div className="">
            <h4 className="text-[16px] font-dmfont font-bold">Total</h4>
          </div>
        </div>
      </div>
      {data.map((item,i)=>(   
      <div className="w-[80%] py-[30px]">
        <div className=" flex items-center justify-between">
          <div className="w-[23%] flex items-center justify-between ">
            <div onClick={()=>dispatch(productCross(i))}>
              <RxCross2 />
            </div>
            <div className="">
              <img src={item.thumbnail} alt="" />
            </div>
            <div className="">
              <h4 className="text-[16px] font-dmfont font-bold">
                {item.title}
              </h4>
            </div>
          </div>
          <div className="w-[21%]">
            <h4 className="text-[20px] font-dmfont font-bold"> ${item.price}</h4>
          </div>
          <div className="w-[21%]">
            <div className="flex w-40 h-[50px] border-[#767676] border-[1px] justify-around items-center">
              <div className="">
                <span onClick = {()=>dispatch(productDecrement(i))}><FaMinus/></span>
              </div>
              <div className="">
                <span className="font-dmfont font-bold text-[16px]">{item.qun}</span>
              </div>
              <div className="">
                <span onClick = {()=>dispatch(productIncrement(i))}><FaPlus/></span>
              </div>
            </div>
          </div>
          <div className="w-[4%]">
            <h4 className="text-[20px] font-dmfont font-bold"> ${item.price * item.qun}</h4>
          </div>
        </div>
      </div>
      ))}

      <div className="py-[20px] border-[1px] border-[#F0F0F0]">
      <div className="flex justify-between items-center">
        <div className="flex items-center pl-[20px]">
          <div className="w-[200px] h-[50px] flex items-center justify-around border-[1px] border-[#767676]">
            <div className="">
              <h6 className="text-[16px] font-dmfont font-normal text-[#767676]">SIZE</h6>
            </div>
            <div className="">
              <span><IoMdArrowDropdown/></span>
            </div>
          </div>
            <div className="">
              <h4 className="ml-[20px] text-[14px] font-dmfont font-bold">Apply coupon</h4>
            </div>
        </div>
        <div className="pr-[20px]">
          <h4 className=" text-[14px] font-dmfont font-bold">Update cart</h4>
        </div>
      </div>
      </div>
        <div className="mt-[54px] mb-[140px] ">
           <div className="text-end ">
           <h4 className="text-[20px] font-dmfont font-bold">Cart totals</h4>
           </div>
        <div className="">
        <div className="flex items-center justify-end pt-[24px]">
            <h6 className="text-[16px] font-dmfont font-bold w-[320px] h-[54px] border-[#F0F0F0] border-[1px] pl-[20px] pt-[14px]">Subtotal</h6>
            <h6 className="text-[16px] font-dmfont font-normal text-[#767676] w-[320px] h-[54px] border-[#F0F0F0] border-[1px] pl-[20px] pt-[14px] ">389.99 $</h6>
          </div>
          <div className="flex items-center justify-end">
            <h6 className="text-[16px] font-dmfont font-bold w-[320px] h-[54px] border-[#F0F0F0] border-[1px] pl-[20px] pt-[14px]">Total</h6>
            <h6 className="text-[16px] font-dmfont font-normal  w-[320px] h-[54px] border-[#F0F0F0] border-[1px] pl-[20px] pt-[14px]">389.99 $</h6>
          </div>
        </div>
          <div className="flex justify-end pt-[30px]">
            <Link to={"/Chekout"}><h6 className="w-[200px] h-[50px] border-[1px] border-[#767676] bg-[#262626] pt-[14px] text-[#fff] text-[14px] font-dmfont font-bold text-center hover:bg-[#fff]  hover:text-[#262626]">Proceed to Checkout</h6></Link>
          </div>
        </div>
  
    </div>
  );
};

export default Cart;
