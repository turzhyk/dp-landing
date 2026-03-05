import React, { useEffect, useState } from "react";
import { Select } from "../Components/Select";
import Slider from "../Components/Slider";
import PriceFooter from "../Components/PriceFooter";
import ContactForm from "../Components/ContactForm";

export default function FlyerCalculator() {
  const [size, setSize] = useState<string>("A5 jednostronnie");
  const [paper, setPaper] = useState<string>("80");
  const [quantity, setQuantity] = useState<string>("10");
  const [prices, setPrices] = useState<any>(null);

  useEffect(() => {
    const loadPrices = async () => {
      const res = await fetch("/config/prices.json");
      const data = await res.json();
      setPrices(data);
    };

    loadPrices();
  }, []);
  const getPrice = () =>
    (prices.flyer.sizePrice[size] + prices.flyer.paperTypePrice[paper]) *
    parseInt(quantity);

  if (!prices) {
    return <div>Loading prices...</div>;
  }
  return (
    <>
      <div className="p-6 panel outline">
        <h1>Ulotki</h1>
        <p>
          Zaprojektuj ulotki, które skutecznie przekażą Twoją ofertę. Drukujemy
          ulotki w wielu formatach i na różnych papierach, z możliwością wyboru
          gramatury oraz wykończenia. Sprawdź cenę w naszym kalkulatorze i złóż
          zamówienie online bez wychodzenia z biura.
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
              values={Object.keys(prices.flyer.sizePrice)}
              onChange={setSize}
              active={size}
            />
            <Select
              name="Typ papieru (g/m²)"
              values={Object.keys(prices.flyer.paperTypePrice)}
              onChange={setPaper}
              active={paper}
            />
            <Select
              name="Ilość"
              values={["5", "10", "20", "50", "100"]}
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
