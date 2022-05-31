import React, { useEffect, useState, } from 'react'
import { Container, Grid, Row, Col } from 'rsuite';
import Product from './Product'
import axios from 'axios';

export default function Feature() {

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
                    <Col xs={24}>
                        <h2>Featured Products</h2>
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
