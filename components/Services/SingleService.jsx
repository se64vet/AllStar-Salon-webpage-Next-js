import React from "react";

const SingleService = ({ service }) => {
  return (
    <div className="col-9 col-md-5 text-center px-3 py-5 border border-dark rounded-3">
      <img
        src={service.imgSrc}
        alt={service.altText}
        className="rounded mb-2"
        width={"64px"}
      />
      <h4 className="font-libre fst-italic text-dark">{service.name}</h4>
      <small className="d-block fst-italic text-dark">{`" ${service.desc} "`}</small>

    </div>
  );
};

export default SingleService;
