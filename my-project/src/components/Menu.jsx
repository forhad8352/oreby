import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';


const Menu = () => {
        let [show, setShow] = useState(false) 
        let handleMenu = ()=> {
         setShow (!show)
        }
  return (
    <div className='py-7'>
        <div className="container mx-auto">
                <div className="flex items-center justify-between">
                        <div className="w-[15%]">
                                <img src={Logo} alt="" />
                        </div>
                        <div className="w-[85%]">
                                <ul className={`lg:flex justify-center absolute lg:static text-center z-50 ${show == true ?
                                                'top-[50px] left-0 bg-[#7e3939] w-full duration-700':'top-[50px] left-[-100%] w-full duration-700'}`}> 
                                        <li className=' font-dmfont lg:text-[#767676] text-[#000] font-medium text-[14px] hover:text-[#262626] hover:font-bold hover:duration-700 px-5 py-2 lg:py-0'><Link to={"/"}>Home</Link></li>
                                        <li className=' font-dmfont lg:text-[#767676] text-[#000] font-medium text-[14px] hover:text-[#262626] hover:font-bold hover:duration-700 px-5 py-2 lg:py-0'> <Link to={"/Products"}>Shop</Link></li>
                                        <li className=' font-dmfont lg:text-[#767676] text-[#000] font-medium text-[14px] hover:text-[#262626] hover:font-bold hover:duration-700 px-5 py-2 lg:py-0'> <Link to={"/About"}>About</Link>  </li>
                                        <li className=' font-dmfont lg:text-[#767676] text-[#000] font-medium text-[14px] hover:text-[#262626] hover:font-bold hover:duration-700 px-5 py-2 lg:py-0'> <Link to={"/Contact"}>Contact</Link></li>
                                        <li className=' font-dmfont lg:text-[#767676] text-[#000] font-medium text-[14px] hover:text-[#262626] hover:font-bold hover:duration-700 px-5 py-2 lg:py-0'>Journal</li>
                                </ul>
                        </div>
                        <div className="lg:hidden" onClick={handleMenu}>
                        { show == true ? <RxCross1/>  : <FaBars/> }                      
                                              
                </div>
                </div>
        </div>
    </div>
  )
}

export default Menu