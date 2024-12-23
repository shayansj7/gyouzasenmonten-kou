import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;