import React from "react";
import { useLoaderData } from "react-router-dom";

export const Data = () => {
  const dog = useLoaderData();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1> Data</h1>

        <h3>Image </h3>
        <img alt="Code" src={dog} style={{ height: "70px", width: "70px" }} />
      </div>
    </div>
  );
};

export const getData = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();
  return dog.url;
};
