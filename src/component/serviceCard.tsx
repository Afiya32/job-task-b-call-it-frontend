import React from 'react';
import { MdArrowOutward } from "react-icons/md";

interface Product {
  name: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  description: string;
  image: string;
}

interface ServiceCardProps {
  product: Product;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ product }) => {
  return (
    <div className='flex w-3/4 mx-auto h-72 justify-between mt-5 items-center border p-4'>
      <img src={product.image} alt={product.name} className='w-1/4 h-full object-cover' />
      <div className='text-left ml-16'>
      {/* <MouseMoveImage image={product.image}/> */}
        <h1 className='font-bold text-3xl'>{product.name}</h1>
        <p className='text-sm text-gray-600'>{product.brand}</p>
        <p className='text-lg font-semibold'>${product.price}</p>
        <p className='text-sm text-gray-600'>Rating: {product.rating}</p>
        <div className='w-48 '>
        <p >{product.description}</p>
        </div>
      </div>
      <div className='mt-5  h-44 w-44 text-center border-white flex items-center justify-center rounded-full hover:bg-black hover:text-white bg-white text-black'><button>Details</button>
      <MdArrowOutward />
      </div>
    </div>
  );
};

export default ServiceCard;
