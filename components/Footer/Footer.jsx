import React from "react";
import SectionDetails from "./SectionDetails";

const Footer = () => {
  return (
    <div
      className="container-fluid text-white mt-5 px-5"
      style={{ background: "#252525" }}
    >
      <footer className="py-5">
        <div className="row gap-5 justify-content-around">
          <div className="col-12 col-md-auto">
            <img
              src="/illustrator/logo.png"
              alt="logo"
              width={"100px"}
              className="bg-white p-1 rounded"
            />
            <p>
              <span>Address: </span> 8373 Kingston Pike # 300, Knoxville, TN
              37919
            </p>
            <p>
              <span>Tel: </span> (865) 693-4776
            </p>
          </div>
          <div className="col-12 col-md-auto">
            <SectionDetails />
          </div>
          <div className="col-12 col-md-auto text-center">
            <img
              className="img-fluid"
              src="/portrait/9.jpg"
              alt="text"
              width={"200px"}
            />
          </div>
        </div>

        <div className="row text-center border-top mt-2">
          <p>© 2021 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
