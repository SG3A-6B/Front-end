import React from 'react';
import ProductsCard from '../components/ProductsCard';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Button from 'react-bootstrap/Button';

export default function Category({url,addToCart}) {
  return (
    <div className='container-fluid content-container containeeer'>
    <div className='category-thumbnail'>
    <Button href="/" variant="success">Takaisin</Button>{'  '}
      <ProductsCard url={url} addToCart={addToCart} />
   </div>
   </div>
  )
}
