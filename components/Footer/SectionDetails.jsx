import React from "react";

const SectionDetails = () => {
  const time = {
    Closed: "Closed",
    Office: "9:30AM - 7:30PM",
    Special: "",
  };
  const openingHrs = [
    { day: "Monday", time: time.Office },
    { day: "Tuesday", time: time.Office },
    { day: "Wednesday", time: time.Office },
    { day: "Thursday", time: time.Office },
    { day: "Friday", time: time.Office },
    { day: "Saturday", time: time.Office },
    { day: "Sunday", time: time.Closed },
  ];
  return (
    <>
      <div className="">
        <h5 className="mb-4">Opening Hours</h5>
        <ul className="nav flex-column">
          {openingHrs.map((item, idx) => (
            <li className="nav-item mb-2" key={idx}>
              <span className="fw-bold">{item.day + " :"}</span> {item.time}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SectionDetails;
