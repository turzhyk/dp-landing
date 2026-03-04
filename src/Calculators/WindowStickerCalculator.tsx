import React, { useState } from "react";
import { Select } from "../Components/Select";
import Slider from "../Components/Slider";
import PriceFooter from "../Components/PriceFooter";
import ContactForm from "../Components/ContactForm";

const sizePrice: Record<string, number> = {
  "5x5": 1.5,
  "7x7": 2,
  "10x10":2.5,
  "15x15":3,
  "20x20":4
};
const paperTypePrice: Record<string, number> = {
  "Biała": 0,
  "Przezroczysta matowa (Frosted)":1
};

export default function WindowStickerCalculator() {
  const [size, setSize] = useState<string>(Object.keys(sizePrice)[0]);
  const [paper, setPaper] = useState<string>("Biała");
  const [quantity, setQuantity] = useState<number>(10);
  const getPrice = () =>
    (sizePrice[size] + paperTypePrice[paper]) * quantity;
  return (
    <>
      <div className="p-6 panel outline">
        <h1>Naklejki na okno</h1>
        <p>
          Zaprojektuj naklejki na okno, które podkreślą charakter Twojego
          lokalu. Drukujemy grafiki i napisy na folii białej lub mrożonej,
          idealnej do witryn sklepowych, biur i restauracji. Trwałe materiały i
          precyzyjne wykonanie gwarantują estetyczny efekt. Sprawdź cenę w
          kalkulatorze i zamów online.
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
              name="Rozmiar (cm)"
              values={Object.keys(sizePrice)}
              onChange={setSize}
              active={size}
            />
            <Select
              name="Typ folii"
              values={Object.keys(paperTypePrice)}
              onChange={setPaper}
              active={paper}
            />
           <Slider name="Ilość literek" min={1} max={50} stepList={[]} active={quantity} onChange={setQuantity} step={1}/>
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
