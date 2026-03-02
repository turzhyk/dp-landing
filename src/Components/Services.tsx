import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";

const serviceLinks = [
  {
    name: "Wizytówki",
    url: "wizytowki",
  },
  {
    name: "Plakaty",
    url: "plakaty",
  },
  {
    name: "Naklejki",
    url: "naklejki",
  },
  {
    name: "Ulotki",
    url: "ulotki",
  },
  {
    name: "Naklejki na witrynę",
    url: "witryna",
  },
  {
    name: "Zdjęcia",
    url: "zdjecia",
  },
  {
    name: "Food menu",
    url: "menu",
  },
  {
    name: "Kalendarze",
    url: "kalendarze",
  },
  {
    name: "Kubki z nadrukiem",
    url: "kubki",
  },
  {
    name: "Koszulki z nadrukiem",
    url: "koszulki",
  },
  {
    name: "Talerze z nadrukiem",
    url: "talerze",
  },
];
export const Services = () => {
  const location = useLocation();
  return (
    <div className="wrapper">
      <nav className="left">
        <h3>Nasze usługi</h3>
        {serviceLinks.map((i) => {
          return (
            <Link
              to={"/services/" + i.url}
              className={
                "outline " +
                (location.pathname.includes(i.url) ? "selected " : "")
              }
            >
              {/* <img src="/svg/druk_icon.svg" /> */}
              {i.name}
            </Link>
          );
        })}
      </nav>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
};
