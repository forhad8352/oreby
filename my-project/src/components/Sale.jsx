import React from "react";
import Sal from "../assets/sale1.png";
import Sall from "../assets/sale2.png";
import Salll from "../assets/sale3.png";

const Sale = () => {
  return (
    <section className="lg:mt-[170px] mt-[100px] mb-[120px]">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between lg:gap-6">
          <div className="lg:w-46%">
            <div className="">
              <img src={Sal} alt="" />
            </div>
          </div>
          <div className="lg:w-46%">
            <div className="pt-[30px] lg:pt-0">
              <img src={Sall} alt="" />
            </div>
            <div className="pt-[30px]">
              <img src={Salll} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sale;
