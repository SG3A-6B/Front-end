import React from 'react'
import Carousel from '../components/Carousel';
import Card from '../components/Card';

/* Etusivunäkymä */

export default function Home() {

  return (
    <div className='container-fluid content-container'>
      <div className='category-thumbnail'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='promo'>
        Mainostilaa?
      </div>
      <div className='product-thumbnail'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
