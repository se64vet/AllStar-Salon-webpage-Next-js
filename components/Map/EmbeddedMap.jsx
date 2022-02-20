import React from "react";

const EmbeddedMap = ({ src }) => {
  return (
    <div className="container overflow-hidden d-flex justify-content-center align-items-center">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width={1080}
            height={400}
            id="gmap_canvas"
            src={src}
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
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
