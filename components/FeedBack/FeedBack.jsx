import React from "react";
import SingleFeedBack from "./SingleFeedBack";

const Team = () => {
  const feedbacks = [
    {
      name: "Dj Iko",
      feedback:
        "Great prices, very nice staff. I was very happy with my results and experience here,  I will return with family and friends!",
      stars: 5,
    },
    {
      name: "Jennifer Martin",
      feedback:
        "Clean, great pricing, awesome massage/scrub, sweet worker. Will come back.",
      stars: 5,
    },
    {
      name: "Phyllis Parker",
      feedback:
        "This location is my favorite for pedicures. Get the deluxe and you will walk out of there with your legs and feet feeling amazing. They take their time and really pamper your feet. I highly recommend this location.",
      stars: 5,
    },
    {
      name: "Joanna Martinez",
      feedback:
        "Favorite place in Knoxville! They always do a wonderful job, are so kind, and prices are great!",
      stars: 5,
    },
  ];
  return (
    <div className="container mt-5" id="review">
      <div className=" text-center mx-center m-2">
        <p className="fs-4 font-libre fw-bold text-light">
          What our customer <br /> saying about us?
        </p>
      </div>
      <div className="row justify-content-center align-items-center">
        {feedbacks.map((feedback, idx) => (
          <SingleFeedBack
            key={idx}
            name={feedback.name}
            feedback={feedback.feedback}
            stars={feedback.stars}
          />
        ))}
      </div>
      <div className="text-center mt-5">
        <a
          href="https://www.google.com/search?q=all+star+nails+reviews+google&sxsrf=APq-WBuwtL_VbEt3_1_jgTpHiQHSQj3FNg%3A1644453771623&ei=i18EYuewJfuqqtsPifG5oAI&ved=0ahUKEwinoqDX8_P1AhV7lWoFHYl4DiQQ4dUDCA8&uact=5&oq=all+star+nails+reviews+google&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgATIFCCEQoAEyBQghEKABOgcIABBHELADOgoIABBHELADEMkDOgkIABDJAxAWEB46BggAEBYQHjoICCEQFhAdEB5KBAhBGABKBAhGGABQoQNY2Rlgkx1oA3ABeACAAagBiAHyBpIBAzcuMpgBAKABAcgBCMABAQ&sclient=gws-wiz#lrd=0x885c24df773f1ddf:0xbc97be0665e11f1d,1,,,"
          className="btn btn-outline-dark shadow px-3 py-2 fw-bold "
        >
          See all reviews or write yours here &#x025BE;
        </a>
      </div>
    </div>
  );
};

export default Team;
