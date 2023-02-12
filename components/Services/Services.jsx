import Link from "next/link";
import React from "react";
import SingleService from "./SingleService";

const Services = () => {
  const services = [
    {
      name: "Manicure",
      desc: "Stimmulate nail growth and soften dry, dull skin.",
      imgSrc: "/illustrator/manicure-colored.png",
      altText: "Manicure service Icon",
    },
    {
      name: "Pedicure",
      desc: "Provide full restoration for your nails with extra polishing.",
      imgSrc: "/illustrator/pedicure-colored.png",
      altText: "Pedicure service Icon",
    },
    {
      name: "Nail Art",
      desc: "Stunning and sustainable design for your nails.",
      imgSrc: "/illustrator/nailart-colored.png",
      altText: "Nail Art service Icon",
    },
    {
      name: "Waxing",
      desc: "Treatments for smoother skin area.",
      imgSrc: "/illustrator/wax-colored.png",
      altText: "Waxing service Icon",
    },
  ];
  return (
    <>
      <div className="row align-items-center justify-content-center gap-5">
        {services.map((item, idx)=> 
          (<SingleService key={idx} service={item}/>)
        )}
      </div>
      <div className="text-center mt-5">
        <Link
          href="/services"
          
        >
          <a className="btn btn-dark text-danger font-libre shadow py-2 px-3 "> See our full services</a>
          
        </Link>
      </div>
    </>
  );
};

export default Services;
