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

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])
  

  function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id === product.id)
      updateAmount(parseInt(existingProduct[0].amount) + 1, product)
    }
    else {
    product['amount'] = 1;
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
    }
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id)
    setCart(itemsWithoutRemoved)
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved))
  }

  function updateAmount(amount,product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }

  function emptyCart() {
    setCart([]);
    localStorage.removeItem('cart');
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
          <Route path="/order" element={<Cart url={URL} cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} empty={emptyCart}/>} />
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
