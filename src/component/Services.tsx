import React from 'react';
import ServiceCard from './serviceCard';
const Services = () => {
  return (
    <div className='text-center'>
     <div className='w-2/6 mt-5 mx-auto text-left'>
     <h1 className='font-normal text-xl' >SERVICES </h1>
      <h1 className='mt-2 font-semibold text-5xl'>OUR MARKING</h1>
      <h1 className='mt-2 font-semibold text-5xl'>SERVICES</h1>
     </div>
     <div>
        <ServiceCard/>
     </div>
    </div>
  );
};

export default Services;