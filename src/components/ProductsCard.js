import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'




export default function ProductsCard({ url }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log(url)
        axios.get(url + 'products/getproducts.php')
            .then((response) => {
                const json = response.data
                setProducts(json)
                console.log(json)
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }, [])



    return (
        <div className='thumbnail'>
            {products.map(product => (
                <Card className='card' key={product.id}>
                    <Card.Img variant="top" src={require(product.image)} />
                    <Card.Body className='cardbody'>
                        <Card.Title>{product.name}</Card.Title>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}
