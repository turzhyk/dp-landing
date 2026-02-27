import React from "react";
import { Link } from "react-router-dom";
import ServiceItem from "./ServiceItem";
import ContactForm from "./ContactForm";
import { DlaczegoMy } from "./WhyUsBlock";
import { OpinieKlientow } from "./OpinieBlock";


export default function Home() {
  return (
    <div className="home-wrapper">
      <section className="home-banner mt-20">
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
            <a className="right-btn " href="#services">
              Oblicz ceny
            </a>
            <a className="left-btn" href="#services">
              Złoż zamówienie
            </a>
          </nav>
          <div className="left-top " />
          <div className="left-left " />
        </div>
        <img className="w-250 h-170 ml-50" src="/bizhub.png" />
      </section>
      <section className="services-block" id="services">
        <h1>Usługi</h1>
        <div className="services-holder mt-10">
          <ServiceItem
            title="Wizytówki"
            imageUrl="/services-pictures/black-buissnes-card.webp"
            href="/services/wizytowki"
            description=""
          />
          <ServiceItem
            title="Wizytówki"
            imageUrl="/services-pictures/56.png"
            href="/services/wizytowki"
            description="dasda as da dawd awdaawd aw d"
          />
          <ServiceItem
            title="Wizytówki"
            imageUrl="/services-pictures/56.png"
            href="/services/wizytowki"
            description="dasda as da dawd awdaawd aw d"
          />
          <ServiceItem
            title="Wizytówki"
            imageUrl="/services-pictures/56.png"
            href="/services/wizytowki"
            description="dasda as da dawd awdaawd aw d"
          />
          <ServiceItem
            title="Wizytówki"
            imageUrl="/services-pictures/56.png"
            href="/services/wizytowki"
            description="dasda as da dawd awdaawd aw d"
          />
          <ServiceItem
            title="Wizytówki"
            imageUrl="/services-pictures/56.png"
            href="/services/wizytowki"
            description="dasda as da dawd awdaawd aw d"
          />
          <ServiceItem
            title="Wizytówki"
            imageUrl="/services-pictures/56.png"
            href="/services/wizytowki"
            description="dasda as da dawd awdaawd aw d"
          />
        </div>
      </section>
      <DlaczegoMy/>
      <OpinieKlientow/>
      <ContactForm/>
    </div>
  );
}
