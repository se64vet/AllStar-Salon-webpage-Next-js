import React from "react";

const SectionDetails = () => {
  const time = {
    Closed: "Closed",
    Office: "9:30AM - 7:30PM",
    Special: "",
  };
  return (
    <>
      <div className="">
        <h3 className="mb-2">Opening Hours</h3>
        <ul className="nav flex-column">
            <li className="nav-item mb-1">
              <span className="fw-bold">Mon-Sat: </span> {time.Office}
            </li>
            <li className="nav-item mb-2">
              <span className="fw-bold">Sunday: </span> {time.Closed}
            </li>
        </ul>
      </div>
    </>
  );
};

export default SectionDetails;
