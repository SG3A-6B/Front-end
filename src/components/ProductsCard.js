import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'




export default function ProductsCard({ url }) {
    const [products, setProducts] = useState([])

    let params = useParams()

    useEffect(() => {
        let address = url + 'products/getproducts.php/'
        let categoryId = params.categoryId


        console.log(url)
        axios.get(address + categoryId)
            .then((response) => {
                const json = response.data.products
                setProducts(json)
                console.log(json)
                console.log(products)
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }, [])



    return (
        <div className='thumbnail'>
            {products.map(product => (
                <Card className='card' key={product.id}>
                    <Card.Img variant="top" src={(url + 'images/' + product.image)} />
                    <Card.Body className='cardbody'>
                        <Card.Title>{product.brand} {product.name} {product.price}€</Card.Title>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}
