import React, { useState } from "react";
import {Link} from 'react-router-dom'
import NotFound from "../pages/NotFound";

export default function Cart({cart}) {
    return (
        <Link to="/order">
            <svg color="#808000" xmlns="file:///C:/Users/OMISTAJA/Downloads/cart-fill%20(1).svg" width="20" height="20" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <span style={{color:'#9ACD32'}}>{cart.length}</span>
            </Link>
    )
} 
    function App(){
        const [cart, setCart] = useState([ ]);
        
       
    }
    function addToCart(product) {
        const newCart = [... cart,product];
        setCart(newCart);
        localStorage.setItem('Cart',JSON.stringify(newCart));
    }
return (
        <>
        <Header />
        <Navbar url={URL} cart={cart}/>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products/:categoryId" element={<Products url={URL} addToCart={addToCart}/>}/>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
        <Footer />
        </>
    );
