import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import dress from "../../assets/dress.jpg"
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useLoaderData, useParams } from 'react-router-dom';
const ProductDtals = () => {

  
  const product = useLoaderData(); 
  
  const {id} = useParams();

  const book = product.find(book => book.id === parseInt(id));
  console.log(book);
  
    

  
  

  
  


  
  
  


  let [bgcolor, setBgColor] = useState([
    '#FF0000',
    '#FFFFFF',
    '#C0C0C0',
    '#808080',
    '#000000',
    '#FFA500',
    '#A52A2A',
    '#0000FF',
    '#808000',
    '#008000',
    '#808000',
    '#7FFFD4',
    '#FFC0CB',
    '#800080',
    '#00008B',
    '#FFFF00',
    '#FF00FF',
  ]);
  
  let [itemSize, setItemSize] = useState([
    'm',
    'l',
    'xl',
    'xxl',
  ]);
  
  return (
    <div className="py-[100px]">
      <Container>
        <div className="flex justify-between">
          <div className="w-[40%]">
            <div className="border w-full h-[600px] flex items-center justify-center p-5  ">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://img.drz.lazcdn.com/static/bd/p/6604bcfb38365c336adb0ce859ddb8c3.jpg_720x720q80.jpg"
              />
            </div>
          </div>
          <div className="w-[50%]">
            <h2 className="text-[28px] font-semibold capitalize">
              {book.name}
            </h2>
            <div className="flex items-center pt-[18px] gap-x-5">
              <h5 className="text-[16px] font-normal capitalize  text-blue-400">
                rating :{" "}
              </h5>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>
            </div>
            <h5 className="text-[20px] font-semibold capitalize pt-[18px]">
              brand : BROLOX
            </h5>
            <h6 className="text-[20px] font-semibold capitalize pt-[40px]">
              price : <span className='ml-2'>560$</span>{""}
              <del className="text-red-400 text-[16px] pl-3">600$</del>
            </h6>

            <div className="flex items-center gap-x-2 pt-[20px]">
              <h5 className="text-[16px] capitalize ">available color :</h5>
              {bgcolor.length !== 0 &&
                bgcolor.map((item, Index) => (
                  <div
                    className="h-[20px] w-[20px] cursor-pointer border"
                    style={{ background: item }}
                  ></div>
                ))}
            </div>
            <div className="pt-[60px] flex items-center gap-x-5">
              <h5 className="text-[20px] capitalize ">size :</h5>
              {itemSize.length !== 0 && itemSize.map((item, Index) => (
                
                <div className="border h-9 w-9 uppercase flex items-center justify-center text-[19px] font-semibold p-2 cursor-pointer  ">{ item}</div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductDtals
