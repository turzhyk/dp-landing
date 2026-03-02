import React, { useState } from "react";
import { Select } from "../Components/Select";
import Slider from "../Components/Slider";
import PriceFooter from "../Components/PriceFooter";
import ContactForm from "../Components/ContactForm";

const sizePrice: Record<string, number> = {
  A4: 2,
  A3: 4,
  A2: 8,
  A1: 16,
  A0: 22,
};
const paperTypePrice: Record<string, Record<string, number>> = {
  "80": { A4: 0, A3: 0, A2: 0, A1: 0, A0: 0 },
  "120": { A4: 1, A3: 2, A2: 4, A1: 8, A0: 16 },
  "160": { A4: 2, A3: 4, A2: 8, A1: 16, A0: 32 },
};

export default function BannerCalculator() {
  const [size, setSize] = useState<string>("A3");
  const [paper, setPaper] = useState<string>("80");
  const [quantity, setQuantity] = useState<string>("1");
  const getPrice = () =>
    (sizePrice[size] + paperTypePrice[paper][size]) * parseInt(quantity);
  return (
    <>
      <div className="p-6 panel outline">
        <h1>Plakat</h1>
        <p>
          Zaprojektuj wizytówki, które zrobią doskonałe pierwsze wrażenie.
          Drukujemy wizytówki w najwyższej jakości, z opcją wyboru formatu,
          papieru oraz dodatkowych uszlachetnień. Sprawdź cenę w naszym
          kalkulatorze i zamów online w kilka minut.
        </p>
      </div>
      <div className="panel outline">
        <h2>Kalkulator ceny</h2>
        <div className="flex justify-between">
          <div className="p-6">
            {/* <div className="label">Rozmiar</div>
          <div className="flex items-center gap-4">
            <input className="w-15" type="number" />
            <p>x</p>
            <input className="w-15" type="number" />
            <p>cm</p>
          </div> */}

            <Select
              name="Rozmiar"
              values={["A4", "A3", "A2", "A1", "A0"]}
              onChange={setSize}
              active={size}
            />
            <Select
              name="Typ papieru (g/m²)"
              values={["80", "120", "160"]}
              onChange={setPaper}
              active={paper}
            />
            <Select
              name="Ilość"
              values={["1", "2", "5", "10", "15", "20"]}
              onChange={setQuantity}
              active={quantity}
            />
          </div>
          <div className="p-10 ">
            <img src={"/landing1.jpg"} className="rounded-xl" />
          </div>
        </div>
        <PriceFooter value={getPrice()} />
      </div>{" "}
      <div className="">
        <ContactForm
          options={
            "PLAKAT size: " +
            size +
            "paper: " +
            paper +
            " quantity: " +
            quantity +
            " totalprice: " +
            getPrice()
          }
        />
      </div>
    </>
  );
}
