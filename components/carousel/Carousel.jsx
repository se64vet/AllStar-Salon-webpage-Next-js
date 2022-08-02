import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import gallery from "../../data/gallery.json";
function Gallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
	const setting = {
		dots: true,
		//fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

  return (
	  <>
      <Carousel
      style={{ height: "500px", width: "370px", overflow: "hidden" }}
	  controls = {false}
	  touch fade
      activeIndex={index}
      onSelect={handleSelect}
    >
      {gallery.map((item, idx) => (
        <Carousel.Item key={idx} style={{ height: "500px", width: "370px" }}>
			<div >
          <img
            src={`/gallery/${item}.webp`}
            alt="our recently works"
            className="img-fluid"
			  style={{borderRadius: "20px", height: "100%", width: "100%"}}
          />
		  </div>
        </Carousel.Item>
      ))}
    </Carousel>
	  </>
  );
}

export default Gallery;

