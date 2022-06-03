import React from "react";
import Benefits from "../components/benefits/Benefits";
import Charts from "../components/charts/Charts";
import Donate from "../components/donate/Donate";
import Events from "../components/events/Events";
import GlobalNetwork from "../components/globalNetwork/GlobalNetwork";
import Roadmap from "../components/roadmap/Roadmap";
import Info from "../components/info/Info";
import Intro from "../components/intro/Intro";
import Miner from "../components/miner/Miner";
import Partners from "../components/partners/Partners";
import Promo from "../components/promo/Promo";
import Team from "../components/team/Team";
import Wallets from "../components/wallets/Wallets";

const Home = () => {
  return (
    <main className="home">
      <Promo />
      <Intro />
      <Benefits />
      <Info />
      <Roadmap />
      <Partners />
      <GlobalNetwork />
      <Wallets />
      <Team />
      <Charts />
      <Miner />
      <Events />
      <Donate />
    </main>
  );
};

export default Home;
