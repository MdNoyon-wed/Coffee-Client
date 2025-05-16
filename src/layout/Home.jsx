import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../pages/CoffeeCard';

const Home = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className='grid grid-cols-2 gap-5 mt-5 md:grid-cols-2'>
      {
        data.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
    
    </div>
  );
};

export default Home;