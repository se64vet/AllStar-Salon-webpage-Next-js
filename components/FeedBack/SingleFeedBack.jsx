import React from "react";

const SingleFeedBack = ({ name, feedback, stars }) => {
  return (
    <>
      <div className="col-9 col-lg-4 bg-warning rounded shadow p-4 m-3">
        <p
          className="font-mali text-white"
          style={{ fontSize: "4em", lineHeight: "0.3" }}
        >
          &#8220;
        </p>
        <small className="fst-italic text-white font-libre">{`" ${feedback} "`}</small>

        <div className="my-2">
          {Array(stars)
            .fill(0)
            .map((x, idx) => (
              <span key={idx} className="d-inline">
                ⭐
              </span>
            ))}
        </div>
        <h5 className="text-danger font-shi">{`— ${name}`}</h5>
      </div>
    </>
  );
};

export default SingleFeedBack;
