import React from 'react'
import Card from '../components/Card';

export default function Category({url}) {
  return (
    
    <div className='container-fluid content-container containeeer'>
    <div className='category-thumbnail'>
      <Card url={url} />
    
   </div>
   </div>
  )
}
