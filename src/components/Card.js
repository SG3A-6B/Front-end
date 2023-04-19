import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

/* HOX!!! Kategoriat tarvitsevat kuvat tietokantaan */

export default function ProductCard({ url , cardtype }) {
    const [dbArray, setDbArray] = useState([])
    
    let backend;

    useEffect(() => {
        console.log(url)

        switch (cardtype) {
            case 'category':
                backend = url + 'products/getcategories.php'
                break
            case 'product':
                backend = url + 'products/getproduct.php'
                break
            case 'categoryProducts':
                backend = url + 'products/getproducts.php'
                break
            default:
                backend = null
        }

        axios.get(backend)
            .then((response) => {
                const json = response.data
                setDbArray(json)
                console.log(json)
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }, [])

    return (
        <div className='thumbnail'>
            {dbArray.map(dbItem => (
                <Card className='card' onClick={ () => { window.location="/products/" + dbItem.id}} key={dbItem.id}>
                    <Card.Img variant="top" src={require("../images/" + dbItem.id + ".jpg")} />
                    <Card.Body className='cardbody'>
                        <Card.Title>{dbItem.name}</Card.Title>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}
