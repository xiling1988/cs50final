import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Nature from "./Nature";
import Intentions from "./Intentions";
import Instructions from "./Instructions";
import Time from "./Time";

const Slides = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className='carousel' interval={3600000}>
          <Carousel.Item className="container">
            <Nature/>
          </Carousel.Item>
          <Carousel.Item>
            <Intentions/>
          </Carousel.Item>
          <Carousel.Item>
            <Time/>
          </Carousel.Item>
          <Carousel.Item>
            <Instructions/>
          </Carousel.Item>
      </Carousel>
    );
  }

  export default Slides;