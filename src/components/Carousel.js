import React from 'react'
import { Carousel } from 'react-bootstrap'


/* Toistaiseksi kovakoodattu, kuvat yms. muuttujiksi (tai miten niitä tulee tarvimaan) tulevaisuudessa  */

export default function productCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../images/boots.jpg")}
                    alt="Boots"
                />
                <Carousel.Caption>
                    <h3>Erikoistarjous</h3>
                    <p>Kaikki jalkineet alkaen 29.99€</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../images/tent.jpg")}
                    alt="Tent"
                />

                <Carousel.Caption>
                    <h3>Retkeilyviikko</h3>
                    <p>Telttoja poistohintaan vain tämän viikon ajan!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../images/forest2.jpg")}
                    alt="Forest2"
                />

                <Carousel.Caption>
                    <h3>Niin hyvää puuta</h3>
                    <p>
                        "Retkeilykauppa on ikuinen suosikkini kaikkiin luontoretkitarpeisiini" ~Vesa-Matti Loiri
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
