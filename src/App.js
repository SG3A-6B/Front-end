import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import ProductsCard from './components/ProductsCard';
import ProductCard from './components/ProductCard';
import NotFound from './pages/NotFound';



const URL = 'http://localhost/partiobackend/';

function App() {


  return (
    <div className='container-fluid app-container'>
      <Navbar url={URL} />

      <div className='route-container'>
        <Routes>
          <Route path="/" element={<Home url={URL} />} />
          <Route path="/products/:categoryId" element={<Category url={URL} />} />
          <Route path="/product/:productId" element={<ProductCard url={URL} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
