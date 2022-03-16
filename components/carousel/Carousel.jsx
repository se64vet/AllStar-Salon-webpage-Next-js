import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import gallery from "../../data/gallery.json";
function Gallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      style={{ height: "500px", width: "370px", overflow: "hidden" }}
      interval={4000}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {gallery.map((item, idx) => (
        <Carousel.Item key={idx} style={{ height: "500px", width: "370px" }}>
          <img
            src={`/gallery/${item.imgUrl}`}
            alt="our works"
            className="img-fluid"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Gallery;
