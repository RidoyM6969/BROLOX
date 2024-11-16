import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { FaList } from "react-icons/fa";
import { SiWindows } from "react-icons/si";
import { FiPlus } from "react-icons/fi";
import ShopProductReuse from "./ShopProductReuse";
import { patch } from "@mui/material";

const ShopProduct = () => {
  let [catagoryShop, setCatagoryShop] = useState(false);
  let [shopSize, setShopSize] = useState(false);
  let [shopColor, setShopColor] = useState(false);
  let [shopPrice, setShopPrice] = useState(false);
  let [shopRating, setshopRating] = useState(false);


  

  return (
    <div className="py-[100px]">
      <Container>
        <div className="flex items-center gap-x-4 mb-[10px]">
          <Link to='/'>
          <h6 className="text-[16px] font-normal uppercase hover:text-red-500 ">home</h6>
          </Link>
          &#11178;
          <h6 className="text-[16px] font-normal uppercase ">shop</h6>
        </div>
        <div className="flex items-center justify-between border-t border-b border-gray-400 py-[5px] px-[20px]">
          <div className="w-[20%]">
            <h3 className="text-[25px] font-[700] uppercase ">brolox</h3>
          </div>
          <div className="w-[75%%] flex gap-x-7">
            <div className="flex items-center gap-x-3">
              <h5 className="text-[18px] font-semibold capitalize">
                short by :
              </h5>
              <select
                className="border rounded-[4px] capitalize "
                name=""
                id=""
              >
                <option className="text-center capitalize" value="best match">
                  best match
                </option>
                <option className="text-center capitalize" value="low - medium">
                  low - medium
                </option>
                <option
                  className="text-center capitalize"
                  value="medium to high"
                >
                  medium to high
                </option>
                <option className="text-center capitalize" value=" high">
                  high
                </option>
              </select>
            </div>
            <div className="flex items-center gap-x-4">
              <h5 className="text-[18px] font-semibold capitalize">view :</h5>
              <div className="flex items-center gap-x-[30px]">
                <SiWindows className="text-[25px]" />
                <FaList className="text-[25px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-[100px] flex justify-between">
          <div className="w-[20%]">
            <div className="">
              <div
                onClick={() => setCatagoryShop(!catagoryShop)}
                className="flex items-center justify-between cursor-pointer "
              >
                <h3 className="text-[25px] font-bold capitalize  ">catagory</h3>
                <FiPlus className="text-[25px]" />
              </div>
              {catagoryShop == true ? (
                <ul className="text-[18px] font-normal capitalize">
                  <div className="flex items-center border-b justify-between cursor-pointer py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">mens</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                  <div className="flex items-center border-b justify-between cursor-pointer py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">kids</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                  <div className="flex items-center border-b justify-between cursor-pointer py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">womens</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                  <div className="flex items-center border-b justify-between cursor-pointer py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">womens kids</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className="pt-[20px]">
              <div
                onClick={() => setShopSize(!shopSize)}
                className="flex items-center justify-between "
              >
                <h3 className="text-[25px] font-bold capitalize  ">size</h3>
                <FiPlus className="text-[25px]" />
              </div>
              {shopSize == true ? (
                <ul className="text-[18px] font-normal capitalize">
                  <div className="flex items-center border-b gap-x-4  py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <input type="checkbox" name="chekbox" id="" />
                    <li className="">xs</li>
                  </div>
                  <div className="flex items-center border-b py-[10px]  px-[10px] gap-x-4  hover:bg-[#fde9e9] ">
                    <input type="checkbox" name="checkbox" id="" />

                    <li className="">xl</li>
                  </div>
                  <div className="flex items-center border-b  py-[10px] px-[10px] gap-x-4  hover:bg-[#fde9e9] ">
                    <input type="checkbox" name="chekbox" id="" />

                    <li className="">2xl</li>
                  </div>
                  <div className="flex items-center border-b  py-[10px] px-[10px] gap-x-4  hover:bg-[#fde9e9] ">
                    <input type="checkbox" name="chekbox" id="" />

                    <li className="">l</li>
                  </div>
                  <div className="flex items-center border-b  py-[10px] px-[10px] gap-x-4  hover:bg-[#fde9e9] ">
                    <input type="checkbox" name="chekbox" id="" />

                    <li className="">m</li>
                  </div>
                  <div className="flex items-center border-b  py-[10px] px-[10px] gap-x-4  hover:bg-[#fde9e9] ">
                    <input type="checkbox" name="chekbox" id="" />

                    <li className="">s</li>
                  </div>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className="pt-[20px]">
              <div
                onClick={() => setShopColor(!shopColor)}
                className="flex items-center justify-between "
              >
                <h3 className="text-[25px] font-bold capitalize  ">color</h3>
                <FiPlus className="text-[25px]" />
              </div>
              {shopColor == true ? (
                <ul className="text-[18px] font-normal capitalize">
                  <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">mens</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                  <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">kids</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                  <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">womens</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                  <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">womens kids</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className="pt-[20px]">
              <div
                onClick={() => setShopPrice(!shopPrice)}
                className="flex items-center justify-between "
              >
                <h3 className="text-[25px] font-bold capitalize  ">price</h3>
                <FiPlus className="text-[25px]" />
              </div>
              {shopPrice == true ? (
                <ul className="text-[18px] font-normal capitalize">
                  <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">mens</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                  <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">kids</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                  <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">womens</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                  <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">womens kids</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className="pt-[20px]">
              <div
                onClick={() => setshopRating(!shopRating)}
                className="flex items-center justify-between"
              >
                <h3 className="text-[25px] font-bold capitalize ">rating</h3>
                <FiPlus className="text-[25px]" />
              </div>
              {shopRating == true ? (
                <ul className="text-[18px] font-normal capitalize">
                  <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">mens</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                  <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">kids</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                  <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">womens</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                  <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                    <li className="">womens kids</li>
                    <FiPlus className="text-[16px]" />
                  </div>
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-[75%] ">
            <ShopProductReuse />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopProduct;
