import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';


const URL = 'http://localhost/partiobackend/';

function App() {


  return (
    <>
      <Navbar url={URL} />
    </>
  );
}

export default App;
