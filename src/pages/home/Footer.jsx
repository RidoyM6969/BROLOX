import React from 'react'
import logo from "../../assets/logo.png"
import Container from '../../components/Container'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";


const Footer = () => {
  return (
    <div className='py-[100px] bg-[#eceaea]'>
          <Container>
              <div className="flex  justify-between">
                  <div className="w-[30%] text-center">
                      <img className='w-[155px] mx-auto  ' src={logo} alt="" />
                      <h6 className='font-bold uppercase '>brolox</h6>
                      <div className="pt-[100px]">
                          <h3 className='capitalize text-[20px] font-[400] '>visit our site</h3>
                          <div className="flex items-center justify-center gap-x-[20px] pt-[20px]">
                              <div className="h-[30px] w-[30px] rounded-[50%] hover:bg-red-400 flex items-center justify-center border hover:border-transparent">                                  
                              <FaFacebookF className='text-[20px]   '/>
                              </div>
                              <div className="h-[30px] w-[30px] rounded-[50%] hover:bg-red-400 flex items-center justify-center border hover:border-transparent">                                  
                              <FaInstagram className='text-[15px] '/>
                              </div>
                              <div className="h-[30px] w-[30px] rounded-[50%] hover:bg-red-400 flex items-center justify-center border hover:border-transparent">
                              <FaLinkedinIn className='text-[15px]   '/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-[30%] text-center">
                      <h2 className='text-[25px] font-[600] capitalize '>about us</h2>
                      <ul className='pt-[20px] '>
                          <li className='mt-[12px] capitalize font-normal hover:underline decoration-red-700 cursor-pointer '>Our Story</li>
                          <li className='mt-[12px] capitalize font-normal hover:underline decoration-red-700 cursor-pointer '>Careers</li>
                          <li className='mt-[12px] capitalize font-normal hover:underline decoration-red-700 cursor-pointer '>Partnerships</li>
                          <li className='mt-[12px] capitalize font-normal hover:underline decoration-red-700 cursor-pointer '>Store Locations</li>
                          <li className='mt-[12px] capitalize font-normal hover:underline decoration-red-700 cursor-pointer '>Customer Reviews</li>
                      </ul>
                  </div>
                  <div className="w-[30%]">
                      <div className="">
                          <h4 className='text-[18px] font-[600] uppercase '>7 days a week</h4>
                          <h6 className='capitalize text-[16px] font-normal ' >Monday-Friday: 8am - Midnight ET</h6>
                      </div>
                      <h4 className='text-[16px] font-semibold capitalize pt-[25px]'>talk to woner</h4>
                      <div className="flex items-center gap-x-4 pt-[10px]">
                          <FaHeadset className='text-[25px] text-red-500 '/>
                          <span className='text-[18px]'>+8801789-244517</span>
                      </div>
                      <div className="flex items-center gap-x-4 pt-[10px]">
                          <FaHeadset className='text-[25px] text-red-500 '/>
                          <span className='text-[18px]'>+88013</span>
                      </div>
                      <div className="flex items-center gap-x-4 pt-[10px]">
                          <BiMessageRoundedDetail className='text-[25px] text-red-500 '/>
                          <span className='text-[18px]'>+8801789-244517</span>
                      </div>
                      <h4 className='text-[18px] font-semibold capitalize py-[20px]'>Service Center</h4>
                      <ul>
                          <li className='text-[16px] font-normal capitalize text-red-500'>help center</li>
                          <li className='text-[16px] font-normal capitalize text-red-500'>complain center</li>
                      </ul>
                  </div>
              </div>
      </Container>
    </div>
  )
}

export default Footer
