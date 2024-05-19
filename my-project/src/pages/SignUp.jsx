import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='container mx-auto'>
         <div className="py-[124px]">
        <h2 className="text-[49px] font-dmfont font-bold">Sign Up</h2>
        <span className="flex items-center gap-x-2 text-[12px] text-[#767676] font-dmfont font-normal">
        <Link></Link> Home &gt; Sign Up
        </span>
      </div>
      <div className="pb-[57px]">
        <p className="w-[50%] text-[16px] font-dmfont font-normal text-[#767676] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <div className="border-b-2 border-[#F0F0F0] pt-[60px]"></div>
      </div>
      <div className="w-[60%]">
      <h2 className="text-[39px] font-dmfont font-bold">
        Your Personal Details
        </h2>
        <div className="flex justify-between pt-[42px]">
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">First Name</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">Last Name</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex justify-between pt-[24px]">
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">Email address</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="text"
              placeholder="company@domain.com"
            />
          </div>
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">Telephone</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="number"
              placeholder="Your phone number"
            />
          </div>
        </div>       
      </div>
      <div className="border-b-2 border-[#F0F0F0] pt-[60px]"></div>

      <div className="w-[60%] mt-[58px]">
      <h2 className="text-[39px] font-dmfont font-bold">
      New Customer
        </h2>
        <div className="flex justify-between pt-[42px]">
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">Address 1</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="text"
              placeholder="4279 Zboncak Port Suite 6212"
            />
          </div>
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">Address 2</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="text"
              placeholder="----"
            />
          </div>
        </div>
        <div className="flex justify-between pt-[24px]">
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">City</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="text"
              placeholder="Your City"
            />
          </div>
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">Post Code</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="number"
              placeholder="----"
            />
          </div>
        </div>
        <div className="flex justify-between pt-[24px]">
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">Division</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="text"
              placeholder="Please Select"
            />
          </div>
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">District</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="text"
              placeholder="Please Select"
            />
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#F0F0F0] pt-[60px]"></div>


      <div className="w-[60%] mt-[57px]">
      <h2 className="text-[39px] font-dmfont font-bold">
      Your Password
        </h2>
        <div className="flex justify-between pt-[42px]">
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">Password</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">Repeat Password</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="password"
              placeholder="Repeat Password"
            />
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#F0F0F0] my-[60px]"></div>
    </div>
  )
}

export default SignUp