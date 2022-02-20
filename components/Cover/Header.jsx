import React from "react";
import Link from "next/link";
const Header = ({ fix }) => {
  return (
    <>
      <header
        className={
          (fix ? "fixed-top" : "") +
          " pt-5 pb-2 pt-lg-3 px-3 container-fluid font-mali"
        }
        style={{ background: "#683A15" }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Link href="/">
            <h1 className="font-shi fs-1 text-light">All Star Nail Salon</h1>
          </Link>
          <nav className="nav nav-masthead gap-5 justify-content-center mt-3 ">
            <Link
              className="nav-link text-white font-libre fst-italic"
              href="/#aboutUs"
            >
              Why Us?
            </Link>
            <Link
              className="nav-link text-white font-libre fst-italic"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="nav-link text-white font-libre fst-italic"
              href="tel:865-693-4776"
            >
              Book now
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
