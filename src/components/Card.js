import React from 'react'
import { Button, Card } from 'react-bootstrap'

/* Toistaiseksi kovakoodattu Puukoille testausta varten, Title ja Img muuttujiksi tulevaisuudessa */

export default function productCard() {
    return (
        <Card className='card'>
            <Card.Img variant="top" src={require("../images/knife.jpg")} />
            <Card.Body className='cardbody'>
                <Card.Title>Puukot</Card.Title>
            </Card.Body>
        </Card>
    )
}
