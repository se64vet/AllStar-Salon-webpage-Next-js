import React from "react";
import styles from "../../styles/Address.module.css";

const Address = ({ address, tel, openingHrs }) => {
  
  return (
    <div>
      <ul
        className={
          styles.list +
          " d-flex flex-column justify-content-center align-items-center my-4 py-5 border border-dark w-75 mx-auto font-mali text-dark"
        }
        style={{
          boxShadow: "0px 0px  0px 5px white, 0 0 0 11px var(--bs-dark)",
        }}
      >
        <li
          className={styles.listItem + " font-libre fw-bold fs-2 mb-2 border-3"}
          style={{
            textShadow: "1px 1px 2px gray",
          }}
        >
          We&#39;re Here For You!{" "}
        </li>
        <li className={styles.listItem}>{tel}</li>
        <li className={styles.listItem}>{openingHrs}</li>
        <li className={styles.listItem}>{address}</li>
      </ul>
    </div>
  );
};

export default Address;
