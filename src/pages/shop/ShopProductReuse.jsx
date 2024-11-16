import React, { useEffect, useState } from "react";
import dress from "../../assets/dress.jpg"
import blue from '../../assets/blue.jpg'
import black from '../../assets/black.jpg'
import zolpai from '../../assets/zolpai.jpg'
import white from '../../assets/white.jpg'
import { Link } from "react-router-dom";

const ShopProductReuse = () => {

  let [data, setData] =useState([])

  useEffect(()=>{
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setData(data));    
  }, [])

  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        { data.map((item, Index) => (       
        <div key={Index} className="w-[350px] mt-[20px]">
          <div className="bg-[#EDEDED] p-7">
            <Link to={`/shop/${item.id}`} >
            <img
              className="w-[350px] hover:transition-all hover:scale-105"
              src={item}
              alt="imge"
            />
            </Link>
          </div>
          <div className="pt-2">
            <h3 className="capitalize text-[20px] font-[600px]">{item.name}</h3>
            <h5 className="font-[500px] capitalize">
              price : <span className="font-normal">{item.price}$</span>
            </h5>
            <h5 className=" capitalize">{item.description} :</h5>
          </div>
        </div>
        ))}
      </div>
    </>
  );
};

export default ShopProductReuse;
