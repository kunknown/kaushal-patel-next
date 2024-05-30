"use client";

import MemoChild from "@/app/projects/practice/memo/memo-child";
import React, { useMemo, useState, useEffect, memo } from "react";

type TDATA = {
  id: number;
  address: string;
  buildYear: string;
  city: string;
  owner: string;
  price: number;
  state: string;
  zipcode: string;
};
type TSearchParams = {
  address: string;
  buildYearMin: string;
  buildYearMax: string;
  city: string;
  owner: string;
  priceMin: number;
  priceMax: number;
  state: string;
  zipcode: string;
};
const DATA: TDATA[] = [
  {
    address: "3400 Loretta White Ln.",
    buildYear: "2017",
    city: "Austin",
    id: 1,
    owner: "Kush Patel",
    price: 555000,
    state: "Texas",
    zipcode: "78754",
  },
  {
    address: "6500 Savage Springs Dr.",
    buildYear: "2017",
    city: "Austin",
    id: 2,
    owner: "Kusha Patel",
    price: 375000,
    state: "Texas",
    zipcode: "78754",
  },
  {
    address: "970 Corkwood Knl.",
    buildYear: "2015",
    city: "Hamilton",
    id: 3,
    owner: "Ani Patel",
    price: 350000,
    state: "Ohio",
    zipcode: "45011",
  },
  {
    address: "6900 Bandanna Dr.",
    buildYear: "2010",
    city: "Cincinnati",
    id: 4,
    owner: "Maan Patel",
    price: 450000,
    state: "Ohio",
    zipcode: "45238",
  },
];

export default function MemoizationParent() {
  const [count, setCount] = useState(0);
  const [properties, setProperties] = useState<TDATA[]>(DATA);
  const [searchParams, setSearchParams] = useState<TSearchParams>({
    address: "",
    buildYearMax: 2024,
    buildYearMin: 0,
    city: "",
    owner: "",
    priceMax: 0,
    priceMin: 999999,
    state: "",
    zipcode: "",
  });
  const [something, setSomething] = useState(0);
  const obj = useMemo(() => ({ test: count }), [count]);
  const addCounter = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffectHit!");
    setProperties(
      DATA.filter((property: TDATA) => {
        return Object.entries(searchParams).every(([key, value]) => {
          if (!value) return true;
          if (key.includes("buildYear")) return;
          if (key.includes("price")) return true;
          else {
            console.log("key", key, "value", value);
            return (
              property[
                key as unknown as keyof Pick<
                  TDATA,
                  "address" | "city" | "owner" | "state" | "zipcode"
                >
              ] as string
            ).includes(searchParams[key]);
          }
        });
        p;
      }),
    );
  }, [searchParams]);

  function handleOnChange(e: unknown) {
    const key = e.target.name;
    const value = e.target.value;
    const updatedSearchParam = { [key]: value };
    const newSearchParams = {
      ...searchParams,
      ...updatedSearchParam,
    };
    setSearchParams(newSearchParams);
  }

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={addCounter}>Increase Count</button>
      <div>Something: {something}</div>
      <button onClick={() => setSomething(something + 1)}>
        Increase Something
      </button>
      <div>
        <MemoChild obj={obj} />
      </div>
      <div>
        <label>Address:</label>
        <input
          name="address"
          type="text"
          value={searchParams.address}
          onChange={(e) => handleOnChange(e)}
        />
        <label>Build Year Min:</label>
        <input
          name="buildYearMin"
          type="text"
          value={searchParams.buildYearMin}
          onChange={(e) => handleOnChange(e)}
        />
        <label>Build Year Max:</label>
        <input
          name="buildYearMax"
          type="text"
          value={searchParams.buildYearMax}
          onChange={(e) => handleOnChange(e)}
        />
        <label>City:</label>
        <input
          name="city"
          type="text"
          value={searchParams.city}
          onChange={(e) => handleOnChange(e)}
        />
        <label>Owner:</label>
        <input
          name="owner"
          type="text"
          value={searchParams.owner}
          onChange={(e) => handleOnChange(e)}
        />
        <label>Price Min:</label>
        <input
          name="priceMin"
          type="text"
          value={searchParams.priceMin}
          onChange={(e) => handleOnChange(e)}
        />
        <label>Price Max:</label>
        <input
          name="priceMax"
          type="text"
          value={searchParams.priceMax}
          onChange={(e) => handleOnChange(e)}
        />
        <label>State:</label>
        <input
          name="state"
          type="text"
          value={searchParams.state}
          onChange={(e) => handleOnChange(e)}
        />
        <label>Zipcode:</label>
        <input
          name="zipcode"
          type="text"
          value={searchParams.zipcode}
          onChange={(e) => handleOnChange(e)}
        />
        <input type="submit" />
      </div>
      <div>{properties.map((property: TDATA) => JSON.stringify(property))}</div>
    </div>
  );
}
