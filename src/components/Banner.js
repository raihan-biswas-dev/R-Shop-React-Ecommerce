import React, { useState, useEffect } from 'react'
import { Container, Button } from 'rsuite';
import axios from 'axios'
import { Carousel } from 'rsuite';

export default function Banner() {


    let [banner, setBanner] = useState([])


    useEffect(() => {
        let logoData = async () => {
            let data = await axios.get("http://localhost:8000/banner")
            setBanner(data.data)
        }

        logoData()

    }, [])

    return (
        <div>
            <Carousel autoplay className="custom-slider">


                {banner.map(item => (


                    <div className="sliderItem">
                        <div className="bannerImg" style={{ backgroundImage: `url(${item.img})` }}>
                            <Container className="container">
                                <h4>{item.subheading}</h4>
                                <h1>{item.heading}</h1>
                                <Button className='hero-btn'>{item.button}</Button>
                            </Container>
                        </div>
                    </div>



                ))}

            </Carousel>
        </div>
    )
}
