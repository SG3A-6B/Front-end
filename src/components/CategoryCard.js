import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

/* HOX!!! Kategoriat tarvitsevat kuvat tietokantaan */

export default function CategoryCard({ url }) {
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
        <div className='thumbnail'>
            {categories.map(category => (
                <Card className='card' onClick={() => { window.location = "/products/" + category.id }} key={category.id}> {/* Vaihdetaan toimimaan Route-avulla */}
                    <Card.Img variant="top" src={(url + 'images/categories/' + category.image)} /> {/* Muutetaan hakemaan oikea kuva kun mahdollista */}
                    <Card.Body className='cardbody'>
                        <Card.Title>{category.name}</Card.Title>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}
