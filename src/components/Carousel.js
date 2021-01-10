import React, { useState } from 'react';

// import bootstrap components here
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.slideImage1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.slideTitle1}</h3>
            <p>{props.slideDesc1}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.slideImage2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>{props.slideTitle2}</h3>
            <p>{props.slideDesc2}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.slideImage3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>{props.slideTitle3}</h3>
            <p>{props.slideDesc3}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.slideImage4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.slideTitle4}</h3>
            <p>{props.slideDesc4}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.slideImage5}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.slideTitle5}</h3>
            <p>{props.slideDesc5}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
//   render(<ControlledCarousel />);

  export default ControlledCarousel;