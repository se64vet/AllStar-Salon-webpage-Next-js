import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="text-center w-100 mx-auto">
      <h3 className="fs-1 font-libre text-light my-5"><span className="fs-4">#</span>{text}</h3>
    </div>
  );
};

export default SectionTitle;
