import React from "react";

const SingleFeature = () => {
  return (
    <>
      <div className="col d-flex align-items-start">
        <img
          src="https://picsum.photos/50"
          alt=""
          className="mx-3 rounded-circle"
        />
        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </>
  );
};

export default SingleFeature;
