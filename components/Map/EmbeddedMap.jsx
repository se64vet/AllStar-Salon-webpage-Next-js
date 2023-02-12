import React from "react";

const EmbeddedMap = () => {
  const map =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12923.795614560004!2d-84.0582226!3d35.9237507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc97be0665e11f1d!2sAll%20Star%20Nails!5e0!3m2!1sde!2sus!4v1644092287988!5m2!1sde!2sus";
  return (
    <div className="container overflow-hidden d-flex justify-content-center align-items-center">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width={1080}
            height={400}
            id="gmap_canvas"
            src={map}
          />
          <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/">
            divi discount
          </a>
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".mapouter{position:relative;text-align:right;height:400px;width:1080px;}",
            }}
          />
          <a href="https://www.embedgooglemap.net">google maps generator</a>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".gmap_canvas {overflow:hidden;background:none!important;height:400px;width:1080px;}",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmbeddedMap;
