import React from "react";
import SingleService from "./SingleService";

const Services = () => {
  const services = [
    {
      name: "Manicure",
      desc: "Stimmulate nail growth and soften dry, dull skin.",
      imgSrc: "/illustrator/sym.png",
      altText: "Manicure service Icon",
    },
    {
      name: "Pedicure",
      desc: "Provide full restoration for your nails with extra polishing.",
      imgSrc: "/illustrator/sym2.png",
      altText: "Pedicure service Icon",
    },
    {
      name: "Nail Art",
      desc: "Stunning and sustainable design for your nails.",
      imgSrc: "/illustrator/sym3.png",
      altText: "Nail Art service Icon",
    },
    {
      name: "Waxing",
      desc: "Treatments for smoother skin area.",
      imgSrc: "/illustrator/sym4.png",
      altText: "Waxing service Icon",
    },
  ];
  return (
    <>
      <div className="row align-items-center justify-content-center gap-5">
        <SingleService service={services[1]} />
        <SingleService service={services[0]} />
        <SingleService service={services[2]} />
        <SingleService service={services[3]} />
      </div>
      <div className="text-center mt-5">
        <a
          href="#"
          className="btn btn-dark text-danger font-libre shadow py-2 px-3 "
        >
          See our full services
        </a>
      </div>
    </>
  );
};

export default Services;
