import React from "react";
import PicCard from "./PicCard";

const Album = () => {
  return (
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
              <div className="col" key={idx}>
                <PicCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
