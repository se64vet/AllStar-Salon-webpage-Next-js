import React from "react";
import styles from "../../styles/Address.module.css";

const Address = ({ address, tel, openingHrs }) => {
  const bgProps = {
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <ul
        className={
          styles.list +
          " d-flex flex-column justify-content-center align-items-center my-4 py-5 "
        }
        style={{
          ...bgProps,
          backgroundImage: 'url("/Bg1.png")',
          textShadow: "1px 1px 2px gray",
        }}
      >
        <li
          className={
            styles.listItem +
            " fw-bold fs-1 mb-2 border-bottom border-info text-info border-3"
          }
        >
          We're Here For You!{" "}
        </li>
        <li className={styles.listItem}>{tel}</li>
        <li className={styles.listItem}>{openingHrs}</li>
        <li className={styles.listItem}>{address}</li>
      </ul>
    </div>
  );
};

export default Address;
