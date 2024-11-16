import React from 'react'
import Container from '../../components/Container'
import dress from '../../assets/dress.jpg'
import { FaCartShopping } from "react-icons/fa6";
import blue from '../../assets/blue.jpg'
import black from '../../assets/black.jpg'
import zolpai from '../../assets/zolpai.jpg'
import white from '../../assets/white.jpg'



const Newarival = () => {
  return (
      <div className='py-[150px]'>
          <Container>
              <h2 className='capitalize text-[32px] font-bold text-center underline '>New Arrival</h2>

              <div className="py-[50px]">
                  <div className="flex flex-wrap items-center justify-evenly">
                      <div className="relative group">
                          <div className="bg-[#EDEDED] p-7  ">  
                          <img className='w-[350px]' src={dress} alt="" />
                          </div>
                          <div className="pt-2">      
                          <h3 className='capitalize text-[20px] font-[600px]'>title</h3>
                          <h5 className='font-[500px] capitalize'>price : <span className='font-normal'>25.00$</span></h5>
                          <h5 className=' capitalize'>description :</h5>
                          </div>
                          <div className="flex items-center gap-x-[20px] absolute bottom-[50px] opacity-0 group-hover:opacity-100 right-0">
                              <button className='capitalize text-[14px] border px-1 rounded-[4px]'>buy now</button>
                              <button className='capitalize text-[14px] border px-1 rounded-[4px]'>add to cart</button>
                          </div>
                      </div>
                      <div className="">
                          <div className="bg-[#EDEDED] p-7">  
                          <img className='w-[350px]' src={blue} alt="" />
                          </div>
                          <div className="pt-2">      
                          <h3 className='capitalize text-[20px] font-[600px]'>title</h3>
                          <h5 className='font-[500px] capitalize'>price : <span className='font-normal'>25.00$</span></h5>
                          <h5 className=' capitalize'>description :</h5>
                          </div>
                      </div>
                      <div className="">
                          <div className="bg-[#EDEDED] p-7">  
                          <img className='w-[350px]' src={zolpai} alt="" />
                          </div>
                          <div className="pt-2">      
                          <h3 className='capitalize text-[20px] font-[600px]'>title</h3>
                          <h5 className='font-[500px] capitalize'>price : <span className='font-normal'>25.00$</span></h5>
                          <h5 className=' capitalize'>description :</h5>
                          </div>
                      </div>
                      <div className="">
                      <div className="bg-[#EDEDED]  p-7 mt-[60px]">
                          <img className='w-[350px]' src={black} alt="" />
                          </div>
                          <div className="pt-2">      
                          <h3 className='capitalize text-[20px] font-[600px]'>title</h3>
                          <h5 className='font-[500px] capitalize'>price : <span className='font-normal'>25.00$</span></h5>
                          <h5 className=' capitalize'>description :</h5>
                          </div>
                      </div>
                      <div className="">
                      <div className="bg-[#EDEDED]  p-7 mt-[60px]">
                          <img className='w-[350px]' src={white} alt="" />
                          </div>
                          <div className="pt-2">      
                          <h3 className='capitalize text-[20px] font-[600px]'>title</h3>
                          <h5 className='font-[500px] capitalize'>price : <span className='font-normal'>25.00$</span></h5>
                          <h5 className=' capitalize'>description :</h5>
                          </div>
                      </div>
                      <div className="">
                      <div className="bg-[#EDEDED]  p-7 mt-[60px]">
                          <img className='w-[350px]' src={dress} alt="" />
                          </div>
                          <div className="pt-2">      
                          <h3 className='capitalize text-[20px] font-[600px]'>title</h3>
                          <h5 className='font-[500px] capitalize'>price : <span className='font-normal'>25.00$</span></h5>
                          <h5 className=' capitalize'>description :</h5>
                          </div>
                      </div>
                  </div>
              </div>
          </Container>
      
    </div>
  )
}

export default Newarival
