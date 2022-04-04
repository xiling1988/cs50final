import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Slide from "./Slide";
import { addInstructions, addIntentions, addNature, addTime } from "../actions";
import Nature from "./Nature";
import Intentions from "./Intentions";
import Instructions from "./Instructions";

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
            <Slide title="Time" action={addTime}/>
          </Carousel.Item>
          <Carousel.Item>
            <Instructions/>
          </Carousel.Item>
      </Carousel>
    );
  }

  export default Slides;