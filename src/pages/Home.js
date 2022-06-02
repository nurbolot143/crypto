import React from "react";
import Benefits from "../components/benefits/Benefits";
import ImplSheet from "../components/implSheet/ImplSheet";
import Info from "../components/info/Info";
import Intro from "../components/intro/Intro";
import Partners from "../components/partners/Partners";
import Promo from "../components/promo/Promo";

const Home = () => {
  return (
    <main className="home">
      <Promo />
      <Intro />
      <Benefits />
      <Info />
      <ImplSheet />
      <Partners />
    </main>
  );
};

export default Home;
