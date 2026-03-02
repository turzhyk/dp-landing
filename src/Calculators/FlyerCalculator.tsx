import React, { useState } from "react";
import { Select } from "../Components/Select";
import Slider from "../Components/Slider";
import PriceFooter from "../Components/PriceFooter";
import ContactForm from "../Components/ContactForm";

const sizePrice: Record<string, number> = {
  "A5 jednostronnie": 0.7,
  "Rack Card (101x228 mm) jednostronnie": 0.5,
  "A5 dwustronnie": 1.2,
  "Rack Card (101x228 mm) dwustronnie": 0.8,
};
const paperTypePrice: Record<string, number> = {
  80: 0,
  120: 0.2,
  160: 0.4,
};

export default function FlyerCalculator() {
  const [size, setSize] = useState<string>("A5 jednostronnie");
  const [paper, setPaper] = useState<string>("80");
  const [quantity, setQuantity] = useState<string>("10");
  const getPrice = () =>
    (sizePrice[size] + paperTypePrice[paper]) * parseInt(quantity);
  return (
    <>
      <div className="p-6 panel outline">
        <h1>Ulotki</h1>
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
              values={["A5 jednostronnie", "Rack Card (101x228 mm) jednostronnie", "A5 dwustronnie",  "Rack Card (101x228 mm) dwustronnie"]}
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
              values={["5", "10","20","50","100"]}
              onChange={setQuantity}
              active={quantity}
            />
          </div>
          <div className="p-10 ">
            <img src={"/landing1.jpg"} className="rounded-xl" />
          </div>
        </div>
        <PriceFooter value={getPrice()} />
      </div>
      <div className="">
              <ContactForm
                options={
                  "ULOTKI size: " +
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
