import React from "react";
import dress from '../../assets/dress.jpg'

const Boxreuseable = (props) => {
  return (
    <div>
      <div className="relative group mt-[60px]">
        <div className="bg-[#EDEDED] p-7  ">
          <img className="w-[350px]" src={props.img} alt="" />
        </div>
        <div className="pt-2 text-start ">
          <h3 className="capitalize text-[20px] font-[600px]">title :</h3>
          <h5 className="font-[500px] capitalize">
            price : <span className="font-normal">25.00$</span>
          </h5>
          <h5 className=" capitalize">description :</h5>
        </div>
        <div className="flex items-center gap-x-[20px] absolute  bottom-[50px] opacity-0 group-hover:opacity-100 right-0">
          <button className="capitalize text-[14px] border px-1 rounded-[4px] border-red-500">
            buy now
          </button>
          <button className="capitalize text-[14px] border px-1 rounded-[4px] border-red-500">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boxreuseable;
