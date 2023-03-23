import React from 'react'
import { Button, Card } from 'react-bootstrap'

/* Toistaiseksi kovakoodattu Puukoille testausta varten, Title ja Img muuttujiksi tulevaisuudessa */

export default function productCard() {
    return (
        <Card style={{ width: '12rem', margin: '12px' }}>
            <Card.Img style={{ height: '125px' }} variant="top" src={require("../images/knife.jpg")} />
            <Card.Body>
                <Card.Title>Puukot</Card.Title>
            </Card.Body>
        </Card>
    )
}
