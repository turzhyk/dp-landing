import React from "react";

export default function Slider({
  name,
  min,
  max,
  stepList,
  onChange,
  active,
}: {
  name: string;
  min: number;
  max: number;
  stepList: number[];
  onChange: (value: number) => void;
  active: number;
}) {
  return (
    <>
      <div className="label mt-10 ">{name}</div>
      <div className="flex justify-between w-100">
        <span>{active}</span>
        <input
          className="w-70"
          type="range"
          value={active}
          min={min}
          max={max}
          step={10}
          list="rangeList"
          onChange={(e) => onChange(Number(e.target.value))}
        ></input>
      </div>
      <datalist id="rangeList">
        {stepList.map((i) => (
          <option>{i}</option>
        ))}
      </datalist>
    </>
  );
}
