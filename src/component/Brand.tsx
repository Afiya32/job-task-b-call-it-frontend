import React from 'react';
import brand1 from "../assets/brand1.webp";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";
const Brand = () => {
  return (
    <div className='text-center font-semibold'>
      <h1 className='text-xl' > WE WORK WITH GLOBAL LARGEST BRANDS </h1>
      <div className='flex justify-between w-3/4 mx-auto mt-5 items-center gap-1'>
        <div>
            <img src={brand1} alt="brand" />
        </div>
        <div>
            <img src={brand2} alt="brand" />
        </div>
        <div>
            <img src={brand3} alt="brand" />
        </div>
        <div>
            <img src={brand4} alt="brand" />
        </div>
        <div>
            <img src={brand5} alt="brand" />
        </div>
        <div>
            <img src={brand6} alt="brand" />
        </div>
      </div>
    </div>
  );
};

export default Brand;