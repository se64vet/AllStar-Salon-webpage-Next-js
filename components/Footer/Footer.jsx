import React from "react";
import SectionDetails from "./SectionDetails";

const Footer = () => {
  return (
    <div
      className="container-fluid text-white mt-5 px-5"
      style={{ background: "#252525" }}
    >
      <footer className="py-5">
        <div className="row gap-4 justify-content-around">
          <div className="col-12 col-md-auto">
			  <h3>ALL STAR NAILS</h3>
            <p>
              Address: 8373 Kingston Pike # 300, Knoxville, TN,
              37919
            </p>
            <a href="tel:865-693-4776" style={{color: "inherit"}}>
              Tel: (865) 693-4776
            </a>
          </div>
          <div className="col-12 col-md-auto">
            <SectionDetails />
            <h5 className="mt-4">Resources</h5>
            <div><a href="https://www.freepik.com" title="Freepik" style={{color: "inherit"}}>Freepik icons</a></div>


          </div>
          <div className="col-12 col-md-auto text-center">
            <img
              className="img-fluid rounded-circle"
              src="/portrait/9.jpg"
              alt="text"
              width={"150px"}
            />
          </div>
        </div>

        <div className="row text-center border-top mt-5">
          <p>© Made by <a href="www.dantemai.com" className="text-dark">Dante</a>. <br/> All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
