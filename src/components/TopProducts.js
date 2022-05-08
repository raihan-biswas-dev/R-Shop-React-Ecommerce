import React, { useEffect, useState, } from 'react'
import { Container, Grid, Row, Col } from 'rsuite';
import Product from './Product'
import axios from 'axios';

export default function TopProducts() {

    let [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProduct() {
            let { data } = await axios.get("http://localhost:8000/products")
            setProduct(data)
        }
        fetchProduct()

    }, [])



    return (
        <Container className='container top-products '>
            <Grid>
                <Row className="show-grid" gutter={30}>
                    <Col xs={12}>
                        <h2>Top Products</h2>
                    </Col>
                    <Col xs={12}>
                        <ul>
                            <li> <span></span> All</li>
                            <li> <span></span> Boys Collection</li>
                            <li> <span></span> Girl Collection</li>
                            <li> <span></span> Shose Collection</li>
                        </ul>
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row className="show-grid" gutter={30}>
                    {product.map(item => (
                        <Col xs={6}>
                            <Product img={item.img} heading={item.name} rating={item.rating} brand={item.brand} color={item.color} size={item.sizes} price={item.price} />
                        </Col>
                    ))}


                </Row>
            </Grid>
        </Container>
    )
}
