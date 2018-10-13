import React from 'react';
import { Row, Carousel } from 'react-bootstrap'; 

const ImageBody = () => {
    return (
    <Row id="carousal">
        <Carousel>
          <Carousel.Item>
            <img width={"100%"} src="https://images.pexels.com/photos/877695/pexels-photo-877695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </Row>
    )
}

export default ImageBody;