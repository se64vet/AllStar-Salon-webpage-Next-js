import React from "react";
import styles from "../../styles/Services.module.css";
const SingleCat = ({ category, catImg, catName }) => {
  return (
    <div className="row mt-4">
      <div className="col-11 col-lg-4 mx-auto mb-2 bg-light">
        <h3 className="text-white p-3 font-libre text-center">
          {catName}  
        </h3>
      </div>
      <div className="col-10 mx-auto my-2 text-center">
        <img src={catImg} alt="category icon"  width={30}/>   
      </div>

      <div className="col-12 my-auto">
        {category.map((item, idx) => (
          <div
            className=" row justify-content-center align-items-center"
            key={idx}
          >
            <div className={styles.detail_item + " w-75 p-1 gap-2 "}>
              <span
                className={styles.detail_name + " fs-6 font-mali text-dark fw-bold"}
              >
                {item.name}
              </span>

              {/* price removed according to client request */}
              {/* <span className={styles.detail_dots}></span>
              <span className={styles.detail_price + " fs-6 font-libre"}>
                <span className="current">{`$${item.price}`}</span>
              </span> */}

            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCat;
