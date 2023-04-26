import React from 'react'
import Carousel from '../components/Carousel';
import CategoryCard from '../components/CategoryCard';
import ProductsCard from '../components/ProductsCard';

/* Etusivunäkymä */

export default function Home({ url }) {
  
  return (
    <div className='container-fluid content-container'>
      <div className='category'>
        <CategoryCard url={url} />
      </div>
    </div>
  )
}
