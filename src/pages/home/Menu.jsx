import React from 'react'
import lgog from "../../assets/logo.png"
import Container from '../../components/Container'
import { FaHeadset } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";

const Menu = () => {
  return (
    <div className='py-[0px] shadow-2xl relative w-full z-[999] '>
      <Container>
        <div className="flex items-center justify-between">
          <a href="#">
          <img className='w-[105px]' src={lgog} alt="" />
          </a>
          {/* search components start */}

              <form className="max-w-md mx-auto">   
        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div class="absolute inset-y-0 end-[-130px] flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" className="block w-[600px] h-[40px] p-4 ps-10 text-[16px] text-gray-900 border border-red-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search in BROLOX" required />
        </div>
    </form>

          {/* search components end */}
          <div className="flex items-center gap-x-[50px]">
            <div className="flex items-center gap-x-3">
              <div className="">
                <FaHeadset className='text-[28px] text-[red]'/>
              </div>
              <div className="">
              <h4 className='capitalize text-[14px]'>talk to a owner</h4>
              <h4 className=' text-[red]'>+8801*********</h4>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="">
                <BiMessageRoundedDetail className='text-[30px] text-[red]'/>
              </div>
              <a href='#' className="">
              <h4 className='capitalize text-[14px]'>chat to a owner</h4>
              <h4 className='capitalize text-[red]'>chat now</h4>
              </a>
            </div>
            <div className="flex items-center gap-x-[50px]">

            <div className="flex items-center gap-x-[10px] cursor-pointer">
              <IoPersonSharp className='text-[20px]'/>
              <h3 className='capitalize text-[17px]'>login</h3>
            </div>
            <div className="flex items-center gap-x-[10px] cursor-pointer">
              <FaCartShopping className='text-[20px]'/>
              <h3 className='capitalize text-[17px]'>cart</h3>
            </div>
            </div>
          </div>
        </div>
        
      </Container>
    </div>
  )
}

export default Menu
