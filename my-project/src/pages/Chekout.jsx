import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Chekout = () => {
  return (
    <div className='container mx-auto'>
        <div className="py-[124px]">
        <h2 className="text-[49px] font-dmfont font-bold">Checkout</h2>
        <span className="flex items-center gap-x-2 text-[12px] text-[#767676] font-dmfont font-normal">
           Home &gt; Checkout
        </span>
      </div>
      <div className="">
       <h6 className='text-[16px] font-dmfont font-normal text-[#767676]'>Have a coupon?<span className='text-[16px] font-dmfont font-normal text-[#000]'>Click here to enter your code</span></h6> 
      </div>
      <div className="">
        <h2 className='text-[39px] font-dmfont font-bold'>Billing Details</h2>
       <div className="w-[60%]">
       <div className="flex pt-[42px]">
          <div className="w-[26%]">
            <h4 className="text-[16px] font-dmfont font-bold">First Name *</h4>
            <input
              className="py-[8px] pr-[280px] border-b-2 border-[#F0F0F0]"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="w-[26%] ml-[280px]">
            <h4 className="text-[16px] font-dmfont font-bold">Last Name *</h4>
            <input
              className="py-[8px] pr-[280px] border-b-2 border-[#F0F0F0]"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
       </div>
         <div className="w-[60%] mt-[24px]">
                <h4 className='text-[16px] font-dmfont font-bold'>Companye Name (optional)</h4>
                <input className='w-[1000px] py-[8px] border-b-2 border-[#F0F0F0]' type="text" placeholder='Company Name' />
         </div>
         <div className="w-[60%] mt-[24px]">
                <h4 className='text-[16px] font-dmfont font-bold'>Country *</h4>
                <div className="flex justify-around items-center">
                <input className='pr-[800px] py-[8px] border-b-2 border-[#F0F0F0]' type="text" placeholder='Please select' />
                 <i className=''><IoMdArrowDropdown/></i>
                </div>
         </div>
         <div className="w-[60%] mt-[24px]">
                <h4 className='text-[16px] font-dmfont font-bold'>Street Address *</h4>
                <div className="">
                <input className='w-[1000px] py-[8px] border-b-2 border-[#F0F0F0]' type="text" placeholder='House number and street name' />
                </div>
                <div className="mt-2">
                <input className='w-[1000px] py-[8px] border-b-2 border-[#F0F0F0]' type="text" placeholder='Apartment, suite, unit etc. (optional)' />  
                </div>
         </div>
         <div className="w-[60%] mt-[24px]">
                <h4 className='text-[16px] font-dmfont font-bold'>Town/City *</h4>
                <input className='w-[1000px] py-[8px] border-b-2 border-[#F0F0F0]' type="text" placeholder='Town/City' />
         </div>
         <div className="w-[60%] mt-[24px]">
                <h4 className='text-[16px] font-dmfont font-bold'>County (optional)</h4>
                <input className='w-[1000px] py-[8px] border-b-2 border-[#F0F0F0]' type="text" placeholder='County' />
         </div>
         <div className="w-[60%] mt-[24px]">
                <h4 className='text-[16px] font-dmfont font-bold'>Post Code *</h4>
                <input className='w-[1000px] py-[8px] border-b-2 border-[#F0F0F0]' type="text" placeholder='Post Code' />
         </div>
         <div className="w-[60%] mt-[24px]">
                <h4 className='text-[16px] font-dmfont font-bold'>Phone *</h4>
                <input className='w-[1000px] py-[8px] border-b-2 border-[#F0F0F0]' type="text" placeholder='Phone' />
         </div>
         <div className="w-[60%] mt-[24px] mb-10">
                <h4 className='text-[16px] font-dmfont font-bold'>Email Address *</h4>
                <input className='w-[1000px] py-[8px] border-b-2 border-[#F0F0F0]' type="text" placeholder='Email Address' />
         </div>
        
      </div>
    </div>
  )
}

export default Chekout