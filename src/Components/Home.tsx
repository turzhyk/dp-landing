import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-wrapper">
      <section className="home-banner">
        <div className="flex-1">
          <div className="text-4xl text-[#dea215] mb-10 text-left">
            Digital Printing
          </div>
          <div className="h1">
            <h1>Buiro</h1>
            <h1>Druku </h1>
            <h1>Cyfrowego</h1>
          </div>
          <p className="text-white text-xl mt-10">
            Szybki i jakosny druk prawie <strong>wszystkiego</strong>
            <br /> na prawie <strong>wszystkim</strong>!
          </p>
          <nav className="flex mt-10 font-black text-2xl justify-between w-110">
            <Link className="right-btn " to="#services">
              Pokaż ceny
            </Link>
            <Link className="left-btn" to="#services">
              Złoż zamówienie
            </Link>
          </nav>
          <div className="left-top " />
          <div className="left-left " />
        </div>
        <img className="w-250 h-170 ml-50" src="/bizhub.png" />
      </section>
      <section className="services-block">
        <h1 >Usługi</h1>
        <div className="services-holder mt-10">
          <div className="services-item outline">
            <img src="/services-pictures/black-buissnes-card.webp" />
            <div className="p-4">
              {" "}
              <h1>Wizytówki</h1>
              <p>dasdafjio jaisd jioasjiod jkiojks  dasdd dasd sadagre goijk</p>
            </div>
            <Link to="">Rozlić cenę</Link>
          </div>
           <div className="services-item outline">
            <img src="/services-pictures/56.png" />
            <div className="p-4">
              {" "}
              <h1>Naklejki na witryny</h1>
              <p>dasdafjio jaisd jioasjiod jkiojks  dasdd dasd sadagre goijk</p>
            </div>
            <Link to="">Rozlić cenę</Link>
          </div>
          <div className="services-item outline"></div>
        </div>
      </section>
    </div>
  );
}
