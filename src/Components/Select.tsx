import React from "react";

type SelectProps = {
  name: string;
  values: string[];
  active: string;
  onChange: (value: string) => void;
};
export const Select = ({ name, values, active, onChange }: SelectProps) => {
      // console.log(active);
  return (
    <>
      <div className="label mt-10">{name}</div>
      <select
        className="w-60  text-right"
        value={active}
        onChange={(e) => onChange(e.target.value)}
      >
        {values.map((i) => {
            // if(i==active) return<></>; else
          return <option>{i}</option>;
        })}
      </select>
    </>
  );
};
