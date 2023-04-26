import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';


const URL = 'http://localhost/partiobackend/';

function App() {


  return (
    <div className='container-fluid app-container'>
      <Navbar url={URL} />
      <About/>
      <Footer />
    </div>
  );
}

export default App;
