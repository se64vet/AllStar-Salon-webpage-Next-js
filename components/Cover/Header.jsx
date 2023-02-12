import React from "react";
import Link from "next/link";
const Header = ({ fix }) => {
  return (
    <>
      <header
        className={
          (fix ? "fixed-top" : "") +
          " bg-dark pt-2 pb-2 pt-lg-3 px-3 container-fluid font-mali"
        }
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Link passHref href="/">
            <h1 className="font-shi fs-1 text-danger">Allstar Nail Studio</h1>
          </Link>
          <nav className="nav nav-masthead gap-5 justify-content-center mt-3 ">
            <Link passHref href="/#aboutUs">
              <span className="nav-link text-white font-mali ">
                Why Us?
              </span>
            </Link>
            <Link passHref href="/services">
              <span className="nav-link text-white font-mali ">
               What we do? 
              </span>
            </Link>
            <Link passHref href="tel:865-693-4776">
              <span className="nav-link text-white font-mali ">
               Book now 
              </span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
