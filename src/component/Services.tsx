import React, { useEffect, useState } from 'react';
import ServiceCard from './serviceCard';
import axios from 'axios';

interface Product {
  name: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  description: string;
  image: string;
}
const Services = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('/products.json');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  
  return (
    <div className='text-center'>
     <div className='w-2/6 mt-5 mx-auto text-left'>
     <h1 className='font-normal text-xl' >SERVICES </h1>
      <h1 className='mt-2 font-semibold text-5xl'>OUR MARKING</h1>
      <h1 className='mt-2 font-semibold text-5xl'>SERVICES</h1>
     </div>
     <div className='grid grid-cols-2 gap-1 justify-end items-center text-left m-5'>
      <div></div>
      <div><h1>Consumers today rely heavily on digital means to</h1>
      <h1>research products. We research a brand of bldend</h1>
      <h1>engaging with it, according to the meanwhile, 51%</h1>
      <h1>of consumers say they use Google to research</h1>
      <h1>products before buying.</h1></div>
     </div>
     <div className='grid grid-cols-1 gap-4'>
        {products.map((product) => (
          <ServiceCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Services;