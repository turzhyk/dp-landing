import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import BusinesscardCalculator from "./Calculators/BusinesscardCalculator";

function App() {
  return (
    <>
      <header className="">
        <div>Digital Printing</div>
        <div className="flex gap-4">
          <a>O Nas</a>
          <a>Dostawa</a>
        </div>
        <div className="flex items-center gap-4">
          <img src="/svg/phone_icon.svg" width={30} />
          <span>732 853 845</span>
        </div>
      </header>
      <div className="wrapper">
        <nav className="left">
          <h3>Nasze usługi</h3>
          <a className="selected">
            <img src="/svg/druk_icon.svg" />
            Wizytówki
          </a>
          <a className="outline">
            <img src="/svg/druk_icon.svg" />
            Wizytówki
          </a>
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
          <BusinesscardCalculator/>
        </div>
      </div>
    </>
  );
}

export default App;
