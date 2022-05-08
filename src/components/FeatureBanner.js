import React, { useState, useEffect } from 'react'
import { Container, Button } from 'rsuite';
import axios from 'axios'
import { Carousel } from 'rsuite';

export default function FeatureBanner() {


    let [featureBanner, setFeatureBanner] = useState([])


    useEffect(() => {
        let featureBannerData = async () => {
            let data = await axios.get("http://localhost:8000/featurebanner")
            setFeatureBanner(data.data)
        }

        featureBannerData()

    }, [])

    return (
        <div>
            <Carousel autoplay className="custom-slider">


                {featureBanner.map(item => (


                    <div className="featureSliderItem">
                        <div className="bannerImg" style={{ backgroundImage: `url(${item.img})` }}>
                            <Container className="container">
                                <h4>{item.heading}</h4>
                                <Button className='hero-btn'>{item.button}</Button>
                            </Container>
                        </div>
                    </div>



                ))}

            </Carousel>
        </div>
    )
}
