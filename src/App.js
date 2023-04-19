import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';


const URL = 'http://localhost/partiobackend/';

function App() {


  return (
    <div className='container-fluid app-container'>
      <Navbar url={URL} />
      <Home url={URL} />
      <Footer />
    </div>
  );
}

export default App;
