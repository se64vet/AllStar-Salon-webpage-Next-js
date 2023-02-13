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
        catImg={"/illustrator/manicure-colored.png"}
        catName={"Natural Manicure"}
        category={Natural_Manicure}
      />
      <div className="my-5"></div>
      <SingleCat
        catImg={"/illustrator/pedicure-colored.png"}
        catName={"Natural Pedicure"}
        category={Natural_Pedicure}
      />
      <div className="my-5"></div>
      <SingleCat
        catImg={"/illustrator/nailart-colored.png"}
        catName={"Artificial Nails"}
        category={Artificial_Nails}
      />
      <div className="my-5"></div>
      <SingleCat
        catImg={"/illustrator/wax-colored.png"}
        catName={"Other Services"}
        category={Other_Services}
      />
    </div>
  );
};

export default ServiceMenu;
