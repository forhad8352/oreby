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
import { GrNext, GrPrevious  } from "react-icons/gr";

function SampleNextArrow(props) {
        const {onClick } = props;
        return (
          <div className="absolute top-[50%] right-0 h-[50px] w-[50px] bg-gray-200 rounded-full text-center !leading-[50px] translate-y-[-40%] z-[100]" onClick={onClick}
          ><GrNext className="inline-block"/></div>
        );
      }
      
      function SamplePrevArrow(props) {
        const {onClick } = props;
        return (
          <div className="absolute top-[50%] left-0 h-[50px] w-[50px] bg-gray-200 rounded-full text-center !leading-[50px] translate-y-[-40%] z-[100]" onClick={onClick}
          ><GrPrevious className="inline-block"/></div>
        );
      }



const Phone = () => {
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
                responsive: [
                  {
                    breakpoint: 624,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]             
              };            
  return (
    <div className='lg:mb-[120px] mb-8'>
        <div className="container mx-auto">
                <div className="">
                        <img src={Phne} alt="" />
                </div>
       
       <div className="w-[100%] lg:mt-[100px] mt-[40px]">
        <div className="">
          <h2 className=' font-dmfont font-bold lg:text-[39px] text-[25px] lg:pb-[48px] pb-[25px]'>Special Offers</h2>
        </div>
       <Slider {...settings}>
        <div>
          <img className='w-[94%]' src={Ar} alt=""/>
          <div className="flex justify-between w-[94%] pt-4">
            <h4 className='text-[16px] font-dmfont font-semibold'>Clock</h4>
            <span className='text-[16px] font-dmfont font-semibold'>$99</span>
          </div>
        </div>
        <div>
          <img  className='w-[94%]' src={Arr} alt="" />
          <div className="flex justify-between w-[94%] pt-4">
            <h4 className='text-[16px] font-dmfont font-semibold'>Bag</h4>
            <span className='text-[16px] font-dmfont font-semibold'>$399</span>
          </div>
        </div>
        <div>
          <img  className='w-[94%]' src={Ari} alt="" />
          <div className="flex justify-between w-[94%] pt-4">
            <h4 className='text-[16px] font-dmfont font-semibold'>Ceramic</h4>
            <span className='text-[16px] font-dmfont font-semibold'>$299</span>
          </div>
        </div>
        <div>
          <img  className='w-[94%]' src={Arii} alt="" />
          <div className="flex justify-between w-[94%] pt-4">
            <h4 className='text-[16px] font-dmfont font-semibold'>Bag</h4>
            <span className='text-[16px] font-dmfont font-semibold'>$569</span>
          </div>
        </div>
        <div>
          <img  className='w-[94%]' src={Arir} alt="" />
          <div className="flex justify-between w-[94%] pt-4">
            <h4 className='text-[16px] font-dmfont font-semibold'>Cap</h4>
            <span className='text-[16px] font-dmfont font-semibold'>$59</span>
          </div>
        </div>
        <div>
          <img  className='w-[94%]' src={Aroo} alt="" />
          <div className="flex justify-between w-[94%] pt-4">
            <h4 className='text-[16px] font-dmfont font-semibold'>Table</h4>
            <span className='text-[16px] font-dmfont font-semibold'>$999</span>
          </div>
        </div>
        <div>
          <img  className='w-[94%]' src={Aruy} alt="" />
          <div className="flex justify-between w-[94%] pt-4">
            <h4 className='text-[16px] font-dmfont font-semibold'>Airphn</h4>
            <span className='text-[16px] font-dmfont font-semibold'>$999</span>
          </div>
        </div>
        <div>
          <img  className='w-[94%]' src={Aryt} alt="" />
          <div className="flex justify-between w-[94%] pt-4">
            <h4 className='text-[16px] font-dmfont font-semibold'>Teddy</h4>
            <span className='text-[16px] font-dmfont font-semibold'>$59</span>
          </div>
        </div>
        <div>
          <img  className='w-[94%]' src={Argh} alt="" />
          <div className="flex justify-between w-[94%] pt-4">
            <h4 className='text-[16px] font-dmfont font-semibold'>Busket</h4>
            <span className='text-[16px] font-dmfont font-semibold'>$199</span>
          </div>
        </div>  
      </Slider> 
       </div>
        </div>        
        </div>
  
  )
}

export default Phone