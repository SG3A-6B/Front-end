import React from "react";
import uuid from 'react-uuid'
import NotFound from "../pages/NotFound";

   export default function Cart({cart, removeFromCart}) {
    let sum = 0;

    return (
        <div className="container-fluid kori">
            <h3 className="header">Tuotteet ostoskorissa</h3>
            <table classname="table">
            <tbody>
                {cart.map(product => {
                    sum+=parseFloat(product.price);
                    return (
                        <tr key={uuid()}>
                            <td> {product.name}</td>
                            <td>{product.price} €</td>
                            <td><a href="#" onClick={() => removeFromCart(product)}>Poista tuote</a></td>
                        </tr>
                    )
                })}
                <tr key={uuid()}>
                    <td></td>
                    <td>{sum.toFixed(2)} €</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
   }
       
    
