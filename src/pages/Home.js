import React from 'react'
import Carousel from '../components/Carousel';
import Card from '../components/Card';

/* Etusivunäkymä */

/* HOX!!! Korteille täytyy tehdä toiminnallisuus, jolla se vaihtaa parametrin mukaan tekeekö kategoriakortin vai tuotekortin, tällä hetkellä tekee vain kategoriat */

export default function Home({ url }) {
  
  return (
    <div className='container-fluid content-container'>
      <div className='category'>
        <Card url={url} />
      </div>
      <div className='product'>

      </div>
    </div>
  )
}
