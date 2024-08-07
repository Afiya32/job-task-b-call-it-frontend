import React from 'react';
import img from "../assets/meeting2.webp"
const CardPart = () => {
  return (
    <div className='mt-5 h-[150vh] bg-black text-white w-full flex '>
     <div data-aos="fade-up" className='flex items-center justify-center gap-5'>
        <img src={img} alt="" />
     </div>
     
     <div className='' >
      <div className='text-left mt-16 ml-5'>
      <h1>WHO WE ARE</h1>
      <div className='text-5xl mt-2 font-semibold'>
      <h1>WE ARE LEADING</h1>
      <h1>DIGITAL MARKING</h1>
      <h1>AGENCY.</h1>
      </div>
      <div className='flex justify-end items-center m-24 text-left '>
       <div className='w-10'>
         <div></div>
       </div>
       <div> <h1>We’re a team of strategic mdigital marketing</h1>
        <h1>working globally with largest brands, We believe</h1>
        <h1>that progress only happens when you refused</h1>
         <h1>to play things safe. We combine ideas and</h1>
          <h1>behaviors, and insights with design,</h1>
            <h1>technological data to produce brand</h1>

         <h1>experiences that customers love our services.</h1>
         <div className='mt-5  h-44 w-44 text-center border-white flex items-center justify-center rounded-full bg-black text-white hover:bg-white hover:text-black'><button>Explore Us</button></div>
         </div>
      </div>
      </div>
     </div>
    </div>
  );
};

export default CardPart;