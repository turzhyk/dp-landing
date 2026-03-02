import React, { useState } from "react";
import { Select } from "../Components/Select";
import Slider from "../Components/Slider";
import PriceFooter from "../Components/PriceFooter";
import ContactForm from "../Components/ContactForm";

const printTypePrice: Record<string, number> = {
  "4+0": 0.5,
  "4+1": 0.6,
  "4+4": 0.8,
};
const paperTypePrice: Record<string, number> = {
  "250": 0,
  "300": 0.2,
  "350": 0.3,
};
const finishTypePrice: Record<string, number> = {
  "Bez wykonczenia": 0,
  Matowe: 0.1,
  Błyszczące: 0.1,
  "Soft-Touch": 0.3,
};
export default function BusinesscardCalculator() {
  const [color, setColor] = useState<string>("4+0");
  const [paper, setPaper] = useState<string>("300");
  const [coating, setCoating] = useState<string>("Bez wykonczenia");
  const [quantity, setQuantity] = useState<string>("100");
  const getPrice = () => {
    return (
      (printTypePrice[color] +
        paperTypePrice[paper] +
        finishTypePrice[coating]) *
      parseInt(quantity)
    );
  };
  return (
    <>
      <div className="p-6 panel outline">
        <h1>Wizytówki</h1>
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
            name="Kolor druku"
            values={["4+0", "4+1", "4+4"]}
            onChange={setColor}
            active={color}
          />
          <p>
            <strong>4+0</strong> przod kolorowy, tył nie drukujemy;<br/>
            <strong>4+1</strong> przod kolorowy, tył c/b; <br/>
            <strong>4+4</strong> przod kolorowy, tył kolorowy;
          </p>
          <Select
            name="Typ papieru (g/m²)"
            values={["250", "300", "350"]}
            onChange={setPaper}
            active={paper}
          />
          <Select
            name="Typ wykonczenia"
            values={["Bez wykonczenia", "Matowe", "Błyszczące", "Soft-Touch"]}
            onChange={setCoating}
            active={coating}
          />
          {/* <Slider
            name="Ilość"
            min={0}
            max={1000}
            onChange={setQuantity}
            active={quantity}
            stepList={[10, 20, 50, 100, 200, 500, 1000]}
          /> */}
          <Select
            name="Ilość"
            values={["50", "100", "250"]}
            onChange={setQuantity}
            active={quantity}
          />
        </div>
        <PriceFooter value={getPrice()} />
      </div>
      <div className="">
              <ContactForm
                options={
                  "WIZYTÓWKI color: " +
                  color +
                  "paper: " +
                  paper +
                  "coating: " +
                  coating +
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
