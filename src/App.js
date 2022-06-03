import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  Community,
  ContuctUs,
  Downloads,
  Features,
  Home,
  Resources,
  Team,
} from "./pages";

import "./scss/App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/team" element={<Team />} />
          <Route path="/features" element={<Features />} />
          <Route path="/community" element={<Community />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contuctUs" element={<ContuctUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
