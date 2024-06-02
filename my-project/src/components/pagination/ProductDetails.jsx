import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalf  } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux'
import { addToCart } from "../slice/productSlice";

const ProductDetails = () => {
  let [show, setShow] = useState(false);
  let [showw, setShoww] = useState(false);
  
  let [singleProduct, setSingleProduct] = useState([]);
  let productId = useParams();
  const dispatch = useDispatch()

  let clientRating = Array.from({length:5},(elm, index)=>{
      let number = index + 0.5
      return(
        singleProduct.rating > index + 1 ? <FaStar/> :
        singleProduct.rating > number ? <FaStarHalf/> : <FaRegStar/>
      )
  })

  let handleAddtoCart = (item)=>{
    dispatch(addToCart({...item, qun:1}))
  }

  let dataId = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleProduct(response.data);
      });
  };

  useEffect(() => {
    dataId();
  }, []);

  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap justify-between pt-4">
        {singleProduct?.images?.map((item) => (
          <div className="w-[48%]">
            <img className="w-full h-[800px]" src={item} alt="" />
          </div>
        ))}
      </div>
      <div className="w-[50%]">
        <h2 className="text-[39px] font-dmfont font-bold leading-[50px] mb-4">
          Product
        </h2>
        <div className="flex items-center">
          <div className="flex">
          <p className="text-[#FFD881] flex text-[20px]">{clientRating}</p>
          </div>
          <div className="ml-[25px]">
            <p>1 Review</p>
          </div>
        </div>
        <div className="flex items-center mt-[24px] border-b-[1px] border-[#F0F0F0] pb-6">
          <h6 className="text-[16px] font-dmfont font-normal text-[#767676] pr-6">
            <s> $88.00 </s>
          </h6>
          <h5 className="text-[20px] font-dmfont font-bold">$44.00</h5>
        </div>
        <div className="flex items-center my-9">
          <h5 className="font-dmfont font-bold text-[16px]">COLOR:</h5>
          <div className="ml-[50px] ">
            <span class="h-[20px] w-[20px] rounded-[50%] inline-block bg-[#000000] mr-3 hover:w-[25px] hover:h-[25px] duration-1100"></span>
            <span class="h-[20px] w-[20px] rounded-[50%] inline-block bg-[#FF8686] mr-3 hover:w-[25px] hover:h-[25px] duration-1100"></span>
            <span class="h-[20px] w-[20px] rounded-[50%] inline-block bg-[#7ED321] mr-3 hover:w-[25px] hover:h-[25px] duration-1100"></span>
            <span class="h-[20px] w-[20px] rounded-[50%] inline-block bg-[#B6B6B6] mr-3 hover:w-[25px] hover:h-[25px] duration-1100"></span>
            <span class="h-[20px] w-[20px] rounded-[50%] inline-block bg-[#15CBA5] mr-3 hover:w-[25px] hover:h-[25px] duration-1100"></span>
          </div>
        </div>
        <div className="flex items-center">
          <h5 className=" font-dmfont text-[16px] font-bold">SIZE:</h5>
          <div className="flex ml-[76px] border-[1px] border-[#F0F0F0] w-40 h-[40px] justify-around items-center">
            <div className="">
              <span className="font-dmfont text-[16px] font-normal text-[#767676]">
                S
              </span>
            </div>
            <div className="">
              <span className="font-dmfont text-[16px] font-normal text-[#767676]">
                {" "}
                &#9207;
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center py-[30px] border-b-[1px] border-[#F0F0F0]">
          <h5 className=" font-dmfont text-[16px] font-bold">QUANTITY:</h5>
          <div className="flex ml-[29px] border-[1px] border-[#F0F0F0] w-40 h-[40px] justify-around items-center">
            <div className="">
              <span className="font-dmfont text-[16px] font-normal text-[#767676]">
                +
              </span>
            </div>
            <div className="">
              <span className="font-dmfont text-[16px] font-normal text-[#767676]">
                1
              </span>
            </div>
            <div className="">
              <span className="font-dmfont text-[16px] font-normal text-[#767676]">
                -
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center py-[24px] border-b-[1px] border-[#F0F0F0]">
          <div className="">
            <span className="font-dmfont text-[16px] font-bold">STATUS:</span>
          </div>
          <div className="font-dmfont text-[16px] font-normal text-[#767676] ml-[27px]">
            <span>In Stock</span>
          </div>
        </div>
        <div className="flex items-center py-[24px] border-b-[1px] border-[#F0F0F0]">
          <div className="">
            <h4 className="w-[200px] h-[50px] border-[1px] border-[#262626] text-center pt-[14px] font-dmfont font-bold text-[14px] hover:bg-[#262626] hover:text-[#fff] duration-700 ease-in-out">
              Add to Wish List
            </h4>
          </div>
          <div onClick={()=>handleAddtoCart(singleProduct)} className="ml-[20px]">
            <Link to="/Cart">
            <h4 className="w-[200px] h-[50px] border-[1px] border-[#262626] text-center pt-[14px] font-dmfont font-bold text-[14px] hover:bg-[#262626] hover:text-[#fff] duration-700 ease-in-out">
              Add to Cart
            </h4>
            </Link>
          </div>
          
        </div>

        <div className=" py-[24px] border-b-[1px] border-[#F0F0F0]">
          <div onClick={() => setShow(!show)} className="">
            <div className="flex justify-between items-center">
              <h4 className="font-dmfont text-[16px] font-bold">
                FEATURES & DETAILS
              </h4>
              {show == true ? (
                <span>
                  {" "}
                  <RxCross2 className="font-dmfont text-[18px] font-bold text-[#000]" />
                </span>
              ) : (
                <span>
                  <FaPlus className="font-dmfont text-[16px] font-bold text-[#000]" />
                </span>
              )}
            </div>
            {show && (
              <p className="text-[16px] text-[#767676] font-dmfont font-normal pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                maiores autem eius nisi. Repudiandae, dolores quisquam.
                Accusantium rem distinctio iusto ullam fuga? Quam deleniti nemo
                consectetur quis veniam quibusdam harum tempore neque dolorem,
                corrupti cupiditate eligendi accusantium, excepturi molestias
                fugiat.
              </p>
            )}
          </div>
        </div>

        <div className=" py-[24px] border-b-[1px] border-[#F0F0F0]">
          <div onClick={() => setShoww(!showw)} className="">
            <div className="flex justify-between items-center">
              <h4 className="font-dmfont text-[16px] font-bold">
                SHIPPING & RETURNS
              </h4>
              {showw == true ? (
                <span>
                  {" "}
                  <RxCross2 className="font-dmfont text-[18px] font-bold text-[#000]" />
                </span>
              ) : (
                <span>
                  <FaPlus className="font-dmfont text-[16px] font-bold text-[#000]" />
                </span>
              )}
            </div>
            {showw && (
              <p className="text-[16px] text-[#767676] font-dmfont font-normal pt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                quidem veritatis ab vel porro dolorem quasi nemo, tempore
                distinctio ducimus nesciunt eius? Dolorum, dolorem? Ipsam modi
                enim dignissimos autem ad cum nobis voluptatibus consequatur
                molestias totam unde, dolorum perspiciatis natus.
              </p>
            )}
          </div>
        </div>

        <div className="">
          <p className=" font-dmfont text-[16px] font-normal text-[#767676] py-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="w-[20%] mt-[123px] mb-[45px]">
        <div className="flex justify-between">
          <h5 className="text-[20px] font-dmfont font-normal text-[#767676]">
            Description
          </h5>
          <h5 className="text-[20px] font-dmfont font-bold">Reviews (1)</h5>
        </div>
      </div>
      <div className="w-[100%]">
        <div className=" border-b-[1px] border-[#F0F0F0] pb-[16px]">
          <p className="text-[14px] text-[#767676] font-dmfont font-normal pb-[16px]">
            1 review for Product
          </p>
          <div className="flex items-center border-t-[1px] border-[#F0F0F0] pt-[16px]">
            <div className="">
              <p className="text-[16px]  font-dmfont font-normal">John Ford</p>
            </div>
            <div className="flex ml-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p className="text-[16px] text-[#767676] font-dmfont font-normal pt-[20px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="py-[55px]">
          <h3 className="text-[20px] font-dmfont font-bold">Add a Review</h3>
          <div className="pt-[42px]">
            <h4 className="text-[16px] font-dmfont font-bold pb-[10px]">
              Name
            </h4>
            <input
              className="text-[14px] font-dmfont font-normal text-[#767676] border-b-[1px] border-[#F0F0F0] pr-[500px] pb-4"
              type="text"
              placeholder="Your name here"
            />
          </div>
          <div className="pt-[23px]">
            <h4 className="text-[16px] font-dmfont font-bold pb-[10px]">
              Email
            </h4>
            <input
              className="text-[14px] font-dmfont font-normal text-[#767676] border-b-[1px] border-[#F0F0F0] pr-[500px] pb-4"
              type="text"
              placeholder="Your email here"
            />
          </div>
          <div className="pt-[23px] pb-[30px]">
            <h4 className="text-[16px] font-dmfont font-bold pb-[10px]">
              Review
            </h4>
            <input
              className="text-[14px] font-dmfont font-normal text-[#767676] border-b-[1px] border-[#F0F0F0] pr-[500px] pb-[80px]"
              type="text"
              placeholder="Your review here"
            />
          </div>
          <div className="">
            <h5 className="text-[16px] text-[#000] text-center font-dmfont font-bold w-[180px] h-[50px] pt-3 border-[1px] border-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] duration-1000 ease-in-out">
              Post
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
