import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Slide from "./Slide";

const Slides = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className='carousel' interval={3600000}>
        <Carousel.Item className="container">
          <Slide title="Nature of Emergency"/>
        </Carousel.Item>
        <Carousel.Item>
          <Slide title="Intentions of the Captain"/>
        </Carousel.Item>
        <Carousel.Item>
        <Slide title="Specific Intructions"/>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default Slides;