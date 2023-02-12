import React from "react";

const LeftHero = ({ title, desc, btn1, imgUrl }) => {
  return (
    <>
      <div className="col-10 mx-auto px-4 pt-5" id="aboutUs">
        <div className="row flex-lg-row-reverse align-items-center gap-4 justify-content-center py-5">
          <div className="col-12 col-sm-8 col-lg-4">
            <img
              src={imgUrl}
              className="d-block mx-lg-auto img-fluid"
              alt="about us"

              loading="lazy"
            />
          </div>
          <div className="col-lg-6 text-center">
            <h1 className="font-libre text-light mb-3"><span className="fs-4">#</span>{title}</h1>
            <p
              className="lead font-mali text-start text-dark fs-6"
              dangerouslySetInnerHTML={{ __html: desc }}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftHero;
