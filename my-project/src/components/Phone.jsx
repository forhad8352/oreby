import React from 'react'
import Phne from '../assets/phn.png'
import Ar from '../assets/arri1.png'
import Arr from '../assets/arri2.png'
import Ari from '../assets/arri3.png'
import Arii from '../assets/arri4.png'
import Arir from '../assets/arri5.png'
import Aroo from '../assets/arri6.png'
import Aruy from '../assets/arri7.png'
import Aryt from '../assets/arri9.png'
import Argh from '../assets/arri10.png'
import Slider from "react-slick";

const Phone = () => {
        const settings = {
                infinite: true,
                arrows: false,
                autoplay: true,
                speed: 2000,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplaySpeed: 2000,             
              };            
  return (
    <div className='lg:mb-[120px] mb-4'>
        <div className="container mx-auto">
                <div className="">
                        <img src={Phne} alt="" />
                </div>
       
       <div className="mt-[100px]">
       <Slider {...settings}>
        <div>
          <img src={Ar} alt=""/>
        </div>
        <div>
          <img src={Arr} alt="" />
        </div>
        <div>
          <img src={Ari} alt="" />
        </div>
        <div>
          <img src={Arii} alt="" />
        </div>
        <div>
          <img src={Arir} alt="" />
        </div>
        <div>
          <img src={Aroo} alt="" />
        </div>
        <div>
          <img src={Aruy} alt="" />
        </div>
        <div>
          <img src={Aryt} alt="" />
        </div>
        <div>
          <img src={Argh} alt="" />
        </div>  
      </Slider> 
       </div>
        </div>        
        </div>
  
  )
}

export default Phone