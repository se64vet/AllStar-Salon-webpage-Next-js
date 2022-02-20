import React from "react";

const SingleService = ({ service }) => {
  return (
    <div className="col-9 col-md-5 text-center p-5 border border-dark rounded-3">
      <h4 className="font-libre fst-italic text-dark">{service.name}</h4>
      <small className="d-block fst-italic text-dark">{`" ${service.desc} "`}</small>
      <img
        src={service.imgSrc}
        alt={service.altText}
        className="rounded-circle"
        width={"120px"}
      />
    </div>
  );
};

export default SingleService;
