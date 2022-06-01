import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";

import "./scss/App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Routes>
          <Route path="/about" element={<Header />} />
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
