import React from 'react'
import { Carousel } from 'react-bootstrap'


/* Toistaiseksi kovakoodattu, kuvat yms. muuttujiksi (tai miten niitä tulee tarvimaan) tulevaisuudessa  */

export default function productCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../images/1.jpg")}
                    alt="Boots"
                />
                <Carousel.Caption>
                <span className="font-link">
                    <h3>Erikoistarjous</h3>
                    <p>Kaikki jalkineet alkaen 29.99€</p>
                    </span>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../images/2.jpg")}
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
                    src={require("../images/3.jpg")}
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

