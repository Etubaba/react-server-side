import React from "react";
import Counter from "../components/Counter";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Counter initial={0} />
    </div>
  );
};

export default Home;
