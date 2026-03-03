import React, { useState } from "react";
import { Select } from "../Components/Select";
import PriceFooter from "../Components/PriceFooter";
import ContactForm from "../Components/ContactForm";

const sizePrice: Record<string, number> = {
  "3x3 cm": 0.4,
  "6x6 cm": 1.2,
  "10x10 cm": 2,
};
const paperTypePrice: Record<string, number> = {
  matowy: 0,
  błyszczący: 0.2,
};

export default function StickerCalculator() {
  const [size, setSize] = useState<string>("3x3 cm");
  const [paper, setPaper] = useState<string>("matowy");
  const [quantity, setQuantity] = useState<string>("5");
  const getPrice = () =>
    (sizePrice[size] + paperTypePrice[paper]) * parseInt(quantity);
  return (
    <>
      <div className="p-6 panel outline">
        <h1>Naklejki</h1>
        <p>
          Zaprojektuj wizytówki, które zrobią doskonałe pierwsze wrażenie.
          Drukujemy wizytówki w najwyższej jakości, z opcją wyboru formatu,
          papieru oraz dodatkowych uszlachetnień. Sprawdź cenę w naszym
          kalkulatorze i zamów online w kilka minut.
        </p>
      </div>
      <div className="panel outline">
        <h2>Kalkulator ceny</h2>
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
            values={["3x3 cm", "6x6 cm", "10x10 cm"]}
            onChange={setSize}
            active={size}
          />
          <Select
            name="Typ papieru"
            values={["matowy", "błyszczący"]}
            onChange={setPaper}
            active={paper}
          />
          <Select
            name="Ilość"
            values={["5", "10", "15", "20", "30", "50", "100"]}
            onChange={setQuantity}
            active={quantity}
          />
        </div>
        <PriceFooter value={getPrice()} />
      </div>
      {/* <div className="">
        <ContactForm
          options={
            "NAKLEJKI size: " +
            size +
            "paper: " +
            paper +
            " quantity: " +
            quantity +
            " totalprice: " +
            getPrice()
          }
        />
      </div> */}
    </>
  );
}
