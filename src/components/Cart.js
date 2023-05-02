import React from "react";

export default function Ostos({Kärry}) {
    let sum = 0;
    return (
        <div>¨
            <h3 className="header">Tuotteet Ostoskärryssä</h3>
            <table classname="id">
                <tbody>
                    {Kärry.map(tuote => {
                        sum+parseFloat(tuote.hinta);
                        return(
                            <tr key={id()}>
                            <td>{tuote.nimi}</td>
                            <td>{tuote.hinta} €</td>
                            <td></td>

                            </tr>
                        )
                    })}
                    <tr key={id()}>
                        <td></td>
                        <td>{sum.toFixed(2)} €</td>
                        <td></td>
                    </tr>
                </tbody>
                </table>
        </div>
    )

return (
    <>
    <Header />
    <Navbar url={URL} cart={cart}/>
    <div classname='container'>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products/:category" element={<Products url={URL} addToCart={addToCart}/>}/>
            <Route path="/order" element={<Order cart={cart}/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="*" element={<NotFound />}/>

        </Routes>
        </div>
        <Footer/>
    </>
);

            