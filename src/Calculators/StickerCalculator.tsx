import React, { useState } from "react";
import { Select } from "../Components/Select";
import PriceFooter from "../Components/PriceFooter";
import ContactForm from "../Components/ContactForm";

const sizePrice: Record<string, number> = {
  "3x3": 0.4,
  "6x6": 1.2,
  "10x10": 2,
};
const paperTypePrice: Record<string, number> = {
  matowy: 0,
  błyszczący: 0.2,
};

export default function StickerCalculator() {
  const [size, setSize] = useState<string>(Object.keys(sizePrice)[0]);
  const [paper, setPaper] = useState<string>("matowy");
  const [quantity, setQuantity] = useState<string>("5");
  const getPrice = () =>
    (sizePrice[size] + paperTypePrice[paper]) * parseInt(quantity);
  return (
    <>
      <div className="p-6 panel outline">
        <h1>Naklejki</h1>
        <p>
          Stwórz naklejki, które skutecznie promują Twoją firmę lub produkt.
          Oferujemy druk naklejek w dowolnym formacie, na różnych materiałach –
          idealnych do zastosowań wewnętrznych i zewnętrznych. Sprawdź wycenę w
          kalkulatorze i zamów online w kilka chwil.
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
            name="Rozmiar (cm)"
            values={Object.keys(size)}
            onChange={setSize}
            active={size}
          />
          <Select
            name="Typ papieru"
            values={Object.keys(paperTypePrice)}
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
