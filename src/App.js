import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';


const URL = 'http://localhost/partiobackend/';

function App() {


  return (
    <div className='container-fluid app-container'>
      <Navbar url={URL} />
      <div className='route-container'>
        <Routes>
          <Route path="/" element={<Home url={URL} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
