import React, { useEffect, useState } from "react";
import styles from "./OfferPage.module.css";
import Offer from "../Offer";

export const OfferItem = ({
  title,
  desc,
  number,
  price,
  url,
}: {
  title: string;
  desc: string;
  number: string;
  price: string;
  url: string;
}) => {
  return (
    <div className={styles.item + " outline"}>
      <div className={styles.imgContainer}>
        <img src={"/products/" + url} />
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
        <div className="flex justify-between">
          <p className={styles.catalogNumber}>{number}</p>
          <strong className={styles.price}>{price}</strong>
        </div>
      </div>
    </div>
  );
};

export default function OfferPage() {
  const [products, setProducts] = useState<any>(null);
  useEffect(() => {
    const loadPrices = async () => {
      const res = await fetch("/config/products.json");
      const data = await res.json();
      setProducts(data);
    };

    loadPrices();
  }, []);
  if (products == null) return <div>Loading...</div>;
  console.log(products.szklanki);
  return (
    <div className="w-full pt-30">
      <h1> Oferta dla restauracji</h1>
      <div className={styles.wrapper}>
        <div className={styles.left + " offer-wrapper"}>
          <Offer />
        </div>
        <div className={styles.right}>
          <div> </div>
          <div className={styles.rightWrapper}>{products.szklanki.map((i)=>{
            return <OfferItem title={i.name} desc={i.desc} url={i.img} price={i.price} number={i.catalogNumber}/>
          })}</div>
        </div>
      </div>
    </div>
  );
}
