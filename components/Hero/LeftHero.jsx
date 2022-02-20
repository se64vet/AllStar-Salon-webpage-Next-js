import React from "react";

const LeftHero = ({ title, desc, btn1, imgUrl }) => {
  return (
    <>
      <div className="col-10 mx-auto px-4 py-5" id="aboutUs">
        <div className="row flex-lg-row-reverse align-items-center gap-4 justify-content-center py-5">
          <div className="col-10 col-sm-8 col-lg-4">
            <img
              src={imgUrl}
              className="d-block mx-lg-auto img-fluid"
              alt="about us"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 text-center">
            <h1 className=" font-libre fw-bold text-light mb-3">{title}</h1>
            <p
              className="lead font-mali fst-italic text-start text-dark"
              dangerouslySetInnerHTML={{ __html: desc }}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftHero;
