import React from "react";
import Header from "./Header";
import styles from "../../styles/Cover.module.css";
const Cover = () => {
  const bgProps = {
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className={styles.bg_container + " d-flex vh-100 text-center"}
      style={{ backgroundImage: 'url("/portrait/5.jpg")' }}
    >
      <div
        className={
          styles.cover_container +
          " d-flex w-100 h-100 p-3 mx-auto flex-column justify-content-center align-items-center"
        }
      >
        <Header fix={true} />
        <div
          className="px-2 py-5 rounded bg-warning"
          style={{ "--bs-bg-opacity": "0.1" }}
        >
          <h2
            className="text-white font-libre fs-1"
            style={{ textShadow: "1px 1px 2px gray" }}
          >
            Essence of natural beauty
          </h2>
          <p
            className="lead text-white py-3"
            style={{ textShadow: "1px 1px 2px gray" }}
          >
            Enjoy the soothing experience
          </p>

          <p className="d-flex flex-column justify-content-center align-items-center gap-2">
            <a
              href="tel:865-693-4776"
              className="btn btn-md py-1 px-3 btn-dark font-libre text-white mx-1 shadow"
            >
              Book now
            </a>
            <a
              href="/services"
              className="btn btn-md py-1 px-2 btn-outline bg-light font-libre text-white mx-1 shadow"
            >
              Our Services
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
