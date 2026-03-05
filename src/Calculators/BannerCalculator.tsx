import React, { useEffect, useState } from "react";
import { Select } from "../Components/Select";
import Slider from "../Components/Slider";
import PriceFooter from "../Components/PriceFooter";
import ContactForm from "../Components/ContactForm";


export default function BannerCalculator() {
  const [size, setSize] = useState<string>("A3");
  const [paper, setPaper] = useState<string>("80");
  const [quantity, setQuantity] = useState<string>("1");
  const [prices, setPrices] = useState<any>(null);

  useEffect(() => {
    const loadPrices = async () => {
      const res = await fetch("/config/prices.json");
      const data = await res.json();
      setPrices(data);
    };

    loadPrices();
  }, []);

  // const getPrice = () =>
  //   (sizePrice[size] + paperTypePrice[paper][size]) * parseInt(quantity);
  const getPrice = () =>
    (prices.banner.sizePrice[size] +
      prices.banner.paperTypePrice[paper][size]) *
    parseInt(quantity);
  if (!prices) {
    return <div>Loading prices...</div>;
  }
  return (
    <>
      <div className="p-6 panel outline">
        <h1>Plakat</h1>
        <p>
          Zaprojektuj plakaty, które przyciągną uwagę i wyróżnią Twoją markę.
          Drukujemy plakaty w wysokiej jakości, w różnych formatach i na
          wytrzymałych papierach dopasowanych do Twoich potrzeb. Sprawdź cenę w
          naszym kalkulatorze i zamów online szybko i wygodnie.
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
              values={Object.keys(prices.banner.sizePrice)}
              onChange={setSize}
              active={size}
            />
            <Select
              name="Typ papieru (g/m²)"
              values={Object.keys(prices.banner.paperTypePrice)}
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
          <div className="img-holder ">
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
