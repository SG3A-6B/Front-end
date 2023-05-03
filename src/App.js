import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import ProductsCard from './components/ProductsCard';
import ProductCard from './components/ProductCard';
import NotFound from './pages/NotFound';
import Login from './pages/Login'
import ManageCategories from './pages/ManageCategories'
import ManageProducts from './pages/ManageProducts'
import AddAdmin from './pages/AddAdmin'
import Cart from './components/Cart';



const URL = 'http://localhost/partiobackend/';

function App() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/managecategories');
  }

  function handleLogout() {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/login');
  }

//ostoskorin kanssa toimivaksi
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])
  

  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }

  return (
    <div className='container-fluid app-container'>
      <Navbar url={URL} onLogout={handleLogout} />

      <div className='route-container'>
        <Routes>
          <Route path="/" element={<Home url={URL} />} />
          <Route path="/products/:categoryId" element={<Category url={URL} addToCart={addToCart}/>} />
          <Route path="/product/:productId" element={<ProductCard url={URL} />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Cart cart={cart} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login url={URL} onLogin={handleLogin} />} />
          <Route path="/managecategories" element={<ManageCategories url={URL} onLogout={handleLogout} />} />
          <Route path="/manageproducts" element={<ManageProducts url={URL} onLogout={handleLogout} />} />
          <Route path="/addadmin" element={<AddAdmin url={URL} onLogout={handleLogout} />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

 

export default App;
