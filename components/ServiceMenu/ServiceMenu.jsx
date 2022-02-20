import React from "react";
import data from "../../data/menu.json";

import SingleCat from "./SingleCat";
const ServiceMenu = () => {
  const {
    Natural_Manicure,
    Natural_Pedicure,
    Artificial_Nails,
    Other_Services,
  } = data;

  return (
    <div className="mx-auto container py-5">
      {/* manicures */}
      <SingleCat
        catImg={"url('/landscape/22.jpg')"}
        catName={"Natural Manicure"}
        category={Natural_Manicure}
      />
      <div className="my-5"></div>
      <SingleCat
        catImg={"url('/landscape/20.jpg')"}
        catName={"Natural Pedicure"}
        category={Natural_Pedicure}
      />
      <div className="my-5"></div>
      <SingleCat
        catImg={"url('/landscape/7.jpg')"}
        catName={"Artificial Nails"}
        category={Artificial_Nails}
      />
      <div className="my-5"></div>
      <SingleCat
        catImg={"url('/landscape/4.jpg')"}
        catName={"Other Services"}
        category={Other_Services}
      />
    </div>
  );
};

export default ServiceMenu;
