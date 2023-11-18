import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import { Image } from 'react-bootstrap';


const ControlledCarousel = ({children}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        // <div className='carousel-outer'>
        <Carousel activeIndex={index} onSelect={handleSelect} >
        
        <Carousel.Item>
            <Image
            className="d-block w-100"
            src={require("../component_image/mainscreen_img1.png")}
            alt="Second slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <Image
            className="d-block w-100"
            src={require("../component_image/mod2.png")}
            alt="First slide"
            />
        </Carousel.Item>
        
        </Carousel>
    );
}

export default ControlledCarousel;