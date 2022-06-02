import React from "react";
import Benefits from "../components/benefits/Benefits";
import Charts from "../components/charts/Charts";
import Events from "../components/events/Events";
import GlobalNetwork from "../components/globalNetwork/GlobalNetwork";
import ImplSheet from "../components/implSheet/ImplSheet";
import Info from "../components/info/Info";
import Intro from "../components/intro/Intro";
import Miner from "../components/miner/Miner";
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
      <GlobalNetwork />
      <Wallets />
      <Charts />
      <Miner />
      <Events />
    </main>
  );
};

export default Home;
