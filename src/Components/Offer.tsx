import React from "react";

const offerTopics = [
  { title: "THEME", url: "/svg/dish_icon.svg" },
  { title: "Sztucće", url: "" },
  { title: "Talerze", url: "" },
  { title: "Szklanki", url: "" },
  { title: "THEME", url: "/svg/clothes2_icon.svg" },
  { title: "Koszulki", url: "" },
  { title: "Zapaski", url: "" },
  { title: "Spodnie", url: "" },
];

export const OfferTopic = ({ title, url, main }: { title: string; url: string ; main?:boolean}) => {
  return (
    <a href={url} className={"offer-topic outline "+ (main? " uppercase font-bold tracking-wider":"")}>
      {title}
    </a>
  );
};

export default function Offer() {
  return (
    <>
      {" "}
      <OfferTopic title="Pokaż wszystko" url="/offer" main={true} />
      {offerTopics.map((i) => {
        if (i.title === "THEME") {
          return (
            <div className="flex justify-between items-center w-full">
              {/* <div className="w-full h-0.5 bg-gray-500"></div> */}
              <img src={i.url} className="w-10 m-auto" />
              {/* <div className="w-full h-0.5 bg-gray-500"></div> */}
            </div>
          );
        } else return <OfferTopic title={i.title} url={i.url} />;
      })}
    </>
  );
}
