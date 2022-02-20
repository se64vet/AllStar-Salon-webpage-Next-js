import React from "react";

import CenterHero from "./CenterHero";
import HeroWithForm from "./HeroWithForm";
import LeftHero from "./LeftHero";

const Hero = () => {
  return (
    <main>
      <div className="px-4 py-5 my-5 text-center">
        <CenterHero />
      </div>
      <div className="b-example-divider" />
      {/*  DIVIDER*/}
      <LeftHero />
      <div className="b-example-divider" />
      <HeroWithForm />
    </main>
  );
};

export default Hero;
