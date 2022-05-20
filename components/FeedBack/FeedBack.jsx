import React, { useEffect, useState } from "react";
import SingleFeedBack from "./SingleFeedBack";
import feedbacks from '../../data/feedbacks.json'
const Team = () => {
  const [reviews, setReviews] = useState([]);

  function getData(dataList, amount=5){
    amount = amount > dataList.length ? dataList.length : amount;
    let retrievedData = [];
    for (let index = 0; index < amount; index++) {
      retrievedData.push(dataList[index]);
    }
    return retrievedData;
  }
  useEffect(()=>{
    setReviews(getData(feedbacks, 5));
  }, []);

  return (
    <div className="container mt-5" id="review">
      <div className=" text-center mx-center m-2">
        <p className="fs-4 font-libre fw-bold text-light">
          What our customer <br /> saying about us ?
        </p>
      </div>
      <div className="row justify-content-center align-items-center">
        {reviews && reviews.map((feedback, idx) => (
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
