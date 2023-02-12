import React, { useEffect, useState } from "react";
import SingleFeedBack from "./SingleFeedBack";
import feedbacks from '../../data/feedbacks.json'
const Team = () => {
  const [reviews, setReviews] = useState([]);

  function getData(dataList, amount=5){
    amount = amount > dataList.length ? dataList.length : amount;
    let tempReviews= [];
    let randNum = Math.floor(Math.random()*dataList.length); 
    for (let index = 0; index < amount; index++) {
      randNum < dataList.length-1 ? randNum++ : randNum=0
      tempReviews.push(dataList[randNum]);
      console.log(randNum)
    }
    console.log(tempReviews)
    setReviews(tempReviews)
  }
  useEffect(()=>{
    getData(feedbacks, 5);
  }, []);

  return (
    <div className="container" id="review">
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
          href="https://www.google.com/search?q=all+star+nails&sxsrf=AJOqlzWdd8xzlw1vhseJz8zXj-iE-7pnbw%3A1676148263290&ei=J_7nY4OlEda3qtsPo_qAsAw&oq=all+star+nails&gs_lcp=ChNtb2JpbGUtZ3dzLXdpei1zZXJwEAMyBAgjECcyBggjECcQEzIOCC4QrwEQxwEQgAQQywEyDgguEK8BEMcBEIAEEMsBMggIABCABBDLATIOCC4QrwEQxwEQgAQQywEyCAgAEIAEEMsBMg4ILhCABBDHARCvARDLAToHCCEQoAEQCjoFCCEQoAE6CwghEBYQHhDxBBAdOgQIIRAVOggIIRAWEB4QHToMCAAQFhAeEPEEEMkDOgkIABAWEB4Q8QQ6BQghEJIDOgYIABAWEB5KBAhBGAFQrA5YxCVgviloAHAAeACAAZYBiAGNDpIBBDUuMTGYAQCgAQHAAQE&sclient=mobile-gws-wiz-serp#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D&trex=m_t:lcl_akp,rc_ludocids:13589539335302094621,rc_q:all%2520star%2520nails,ru_gwp:0%252C7,ru_q:all%2520star%2520nails,trex_id:JukdAc"
          className="btn btn-outline-dark shadow px-3 py-2 fw-bold "
        >
          See all reviews or write yours here &#x025BE;
        </a>
      </div>
    </div>
  );
};

export default Team;
