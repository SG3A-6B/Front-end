import React from 'react';
import ProductsCard from '../components/ProductsCard';

export default function Category({url}) {
  return (
    
    <div className='container-fluid content-container containeeer'>
    <div className='category-thumbnail'>
      <ProductsCard url={url} />
    
   </div>
   </div>
  )
}
