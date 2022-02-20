import React from "react";
import { Footer, SectionTitle } from "../components";
import Header from "../components/Cover/Header";
import ServiceMenu from "../components/ServiceMenu/ServiceMenu";

const services = () => {
  return (
    <div className="container-fluid d-flex flex-column">
      <Header />
      <div className="text-center mt-5">
        <h3 className="font-libre fs-1 text-light">Services</h3>
        <p className="font-mali fst-italic">
          &quot; Our customers should be able to fully express themselves with
          their new look.&quot;
        </p>
      </div>

      <ServiceMenu />
      <Footer />
    </div>
  );
};

export default services;
