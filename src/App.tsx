import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import BusinesscardCalculator from "./Calculators/BusinesscardCalculator";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import { Header } from "./Components/Header/Header";
const Services = () => {
  return (
    <div className="wrapper">
      <nav className="left">
        <h3>Nasze usługi</h3>
        <Link to={"/services/wizytowki"} className="selected">
          <img src="/svg/druk_icon.svg" />
          Wizytówki
        </Link>
        <Link to={"/services/wizytowki"} className="outline">
          <img src="/svg/druk_icon.svg" />
          Wizytówki
        </Link>
        <a className="outline">
          <img src="/svg/szyba2_icon.svg" />
          Wizytówki
        </a>
        <a className="outline">
          <img src="/svg/druk_icon.svg" />
          Wizytówki
        </a>
        <a className="outline">
          <img src="/svg/wizytowki_icon.svg" />
          Wizytówki
        </a>
      </nav>
      <div className="right">
        {" "}
        <BusinesscardCalculator />
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <header>
          <Link to={"/"}>Digital Printing</Link>
          <div className="flex gap-4">
            <a>O Nas</a>
            <a>Dostawa</a>
          </div>
          <div className="flex items-center gap-4">
            <img src="/svg/phone_icon.svg" width={30} />
            <span>732 853 845</span>
          </div>
        </header> */}
        <Header/>
        <Routes>
          <Route path="/services/wizytowki" element={<Services />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
