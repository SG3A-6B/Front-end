import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";




export default function Navbar({ url }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        console.log(url)
        axios.get(url + 'products/getcategories.php')
            .then((response) => {
                const json = response.data
                setCategories(json)
                console.log(json)
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }, [])


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Verkkokauppa</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Etusivu </a>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
                        <ul className="dropdown-menu" aria-labelledby="dropdown01">
                            {categories.map(category => (
                                <li key={category.id}>
                                    <a className="dropdown-item" to={"/products/" + category.id}>{category.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}






/* <div className="container-fluid">
            <a className="navbar-brand" to="/">Verkkokauppa</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <a className="nav-link" to="/">Etusivu</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
                        <ul className="dropdown-menu" aria-labelledby="dropdown01">
                            {categories.map(category => (
                                <li key={category.id}>
                                    <a className="dropdown-item" to={"/products/" + category.id}>{category.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div> */