import React from "react";
import Header from "./Header";
import styles from "../../styles/Cover.module.css";
import Link from "next/link";
const Cover = () => {
  const bgProps = {
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className={styles.bg_container + " d-flex vh-100 text-center"}
      style={{ backgroundImage: 'url("/portrait/8.jpg")' }}
    >
      <div
        className={
          styles.cover_container +
          " d-flex w-100 h-100 p-3 mx-auto flex-column justify-content-center align-items-center"
        }
      >
        <Header fix={true} />
        <div
          className="px-2 py-5 bg-warning"
          style={{ "--bs-bg-opacity": "0.05", "borderRadius": "10px" }}
        >
          <h2
            className="text-grey font-libre fs-1"
            style={{ textShadow: "0px 0px 0px gray" }}
          >
            Essence of natural beauty
          </h2>
          <p
            className="lead text-grey font-mali py-3"
            style={{ textShadow: "0px 0px 0px #676767" }}
          >
            Enjoy the soothing experience
          </p>

          <p className="d-flex flex-column justify-content-center align-items-center gap-2">
            <Link passHref href="tel:865-693-4776">
              <span className="btn btn-md py-1 px-3 btn-dark font-libre text-white mx-1 shadow">
                Book now
              </span>
            </Link>
            <Link passHref href="/services">
              <span className="btn btn-md py-1 px-2 btn-outline bg-light font-libre text-white mx-1 shadow">
                Our services
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
