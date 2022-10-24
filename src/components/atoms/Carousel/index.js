import React from "react";
import _ from "lodash";

const Carousel = () => {
  return (
    <div className="carousel carousel-center p-4 space-x-4">
      {_.map(Array(3), (val, key) => (
        <div className="carousel-item" key={key}>
          <img
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
