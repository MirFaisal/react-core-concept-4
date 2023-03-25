import React from "react";
import { add } from "../../utilities/calculate";

const Bags = () => {
  return (
    <div>
      <h1>All bags</h1>
      <h2>{add(29, 3)}</h2>
    </div>
  );
};

export default Bags;
