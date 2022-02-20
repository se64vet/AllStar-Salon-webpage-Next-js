import React from "react";
import styles from "../../styles/Services.module.css";
const SingleCat = ({ category, catImg, catName }) => {
  return (
    <div className="row mt-4">
      <div
        className="col-12 col-lg-4 mb-4 mb-lg-0"
        style={{
          padding: "2rem !important",
          background: catImg,
          backgroundSize: "cover !important",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <h3
          className="text-white bg-warning p-3 text-center shadow"
          style={{ "--bs-bg-opacity": ".4" }}
        >
          {catName}
        </h3>
      </div>
      <div className="col-12 col-lg-8 my-auto">
        {category.map((item, idx) => (
          <div
            className=" row justify-content-center align-items-center"
            key={idx}
          >
            <div className={styles.detail_item + " w-75 p-1 gap-2"}>
              <span
                className={styles.detail_name + " fs-6 font-libre text-dark  "}
              >
                {item.name}
              </span>
              <span className={styles.detail_dots}></span>
              <span className={styles.detail_price + " fs-6 font-libre"}>
                <span className="current">{`$${item.price}`}</span>
              </span>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCat;
