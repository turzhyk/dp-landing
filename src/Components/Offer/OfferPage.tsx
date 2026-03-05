import React from "react";
import styles from "./OfferPage.module.css";
import Offer from "../Offer";

export const OfferItem = () => {
  return (
    <div className={styles.item + " outline"}>
      <div className={styles.imgContainer}>
        <img src="/bizhub.png" />
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>Item name</h2>
        <p className={styles.desc}>123123rdas</p>
        <div className="flex justify-between">
          <p className={styles.catalogNumber}>4400</p>
          <strong className={styles.price}>20zł/zestaw</strong>
        </div>
      </div>
    </div>
  );
};  

export default function OfferPage() {
  return (
    <div className="w-full pt-30">
      <h1> Oferta dla restauracji</h1>
      <div className={styles.wrapper}>
        <div className={styles.left + " offer-wrapper"}><Offer/></div>
        <div className={styles.right}>
          <div> </div>
          <div className={styles.rightWrapper}>
            {" "}
            <OfferItem />
            <OfferItem />
            <OfferItem />
            <OfferItem />
            <OfferItem />
            <OfferItem />
            <OfferItem />
          </div>
        </div>
      </div>
    </div>
  );
}
