import React from "react";
import Benefits from "../components/benefits/Benefits";
import GlbalNetwork from "../components/globalNetwork/GlbalNetwork";
import ImplSheet from "../components/implSheet/ImplSheet";
import Info from "../components/info/Info";
import Intro from "../components/intro/Intro";
import Partners from "../components/partners/Partners";
import Promo from "../components/promo/Promo";
import Wallets from "../components/wallets/Wallets";

const Home = () => {
  return (
    <main className="home">
      <Promo />
      <Intro />
      <Benefits />
      <Info />
      <ImplSheet />
      <Partners />
      <GlbalNetwork />
      <Wallets />
    </main>
  );
};

export default Home;
