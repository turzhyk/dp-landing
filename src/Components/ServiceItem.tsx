import React from "react";
import { Link } from "react-router-dom";

export default function ServiceItem({
  imageUrl,
  title,
  description,
  href,
}: {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="services-item outline">
      <div className="img-container ">
        <img src={imageUrl} />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <h1>{title}</h1>
        <p className="text-center">{description}</p>
      </div>
      <Link to={href}>Oblicz cenę</Link>
    </div>
  );
}
