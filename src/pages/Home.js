import React from "react";
import Benefits from "../components/benefits/Benefits";
import Intro from "../components/intro/Intro";
import Promo from "../components/promo/Promo";

const Home = () => {
  return (
    <main className="home">
      <Promo />
      <Intro />
      <Benefits />
    </main>
  );
};

export default Home;
