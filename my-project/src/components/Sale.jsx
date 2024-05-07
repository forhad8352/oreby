import React from "react";
import Sal from "../assets/sale1.png";
import Sall from "../assets/sale2.png";
import Salll from "../assets/sale3.png";

const Sale = () => {
  return (
    <section className="mt-[170px] mb-[120px]">
      <div className="container mx-auto">
        <div className="flex justify-between gap-6">
          <div className="w-46%">
            <div className="">
              <img src={Sal} alt="" />
            </div>
          </div>
          <div className="w-46%">
            <div className="">
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
