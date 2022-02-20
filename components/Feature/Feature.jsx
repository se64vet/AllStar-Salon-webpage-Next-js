import React from "react";
import SingleFeature from "./SingleFeature";

const Feature = () => {
  return (
    <>
      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom text-center">Icon grid</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {[1, 2, 3, 4].map((item, idx) => (
            <SingleFeature key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature;
