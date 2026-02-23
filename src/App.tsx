import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

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
        <div className="right outline">
          {" "}
          <div className="p-6">
            <h1>Wizytówki</h1>
            <h2>Kalkulator ceny</h2>
            <div>
              <div className="label">Rozmiar</div>
              <div className="flex items-center gap-4">
                <input className="w-15" type="number" />
                <p>x</p>
                <input className="w-15" type="number" />
                <p>cm</p>
              </div>
              <div className="label mt-10">Kolor</div>
              <select className="w-60 text-right" value={"Biały"}>
                <option>Biały</option>
                <option>Czarny</option>
                <option>Przezroczysty matowy</option>
                <option>Czerwony</option>
              </select>
            </div>
          </div>
          <div className="footer ">
            <p>
              <h2>Cena</h2>
              <h1>123,00zł</h1>
            </p>
            <p className="text-right font-medium">
              Chcesz <strong>zamówić?</strong>
              <br /> <strong>Wyślij</strong> do nas e-maila
              <br />
             <strong>printing.internationalpl@gmail.com</strong> 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
