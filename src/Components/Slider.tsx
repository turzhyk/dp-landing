import React from "react";

export default function Slider({
  name,
  min,
  max,
  stepList,
  onChange,
  active,
  step
}: {
  name: string;
  min: number;
  max: number;
  stepList: number[];
  onChange: (value: number) => void;
  active: number;
  step:number;
}) {
  return (
    <>
      <div className="label mt-10 ">{name}</div>
      <span className="w-full text-center font-bold">{active}</span>
      <div className="flex justify-between w-60">
        
        <input
          className="w-70"
          type="range"
          value={active}
          min={min}
          max={max}
          step={step}
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
