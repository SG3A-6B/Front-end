import React from 'react'
import Carousel from '../components/Carousel';
import Card from '../components/Card';

/* Etusivunäkymä */

export default function Home({ url }) {

  return (
    <div className='container-fluid content-container'>
      <div className='category'>
        <Card url={url} />
      </div>
      <div className='product-thumbnail'>
        
      </div>
    </div>
  )
}
