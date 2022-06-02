import React from "react";
import Intro from "../components/intro/Intro";
import Promo from "../components/promo/Promo";

const Home = () => {
  return (
    <main className="home">
      <Promo />
      <Intro />
    </main>
  );
};

export default Home;
