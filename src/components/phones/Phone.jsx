import React from "react";
import { malti } from "../../utilities/calculate";

const Phone = () => {
  return (
    <div>
      <h1>All Phone</h1>
      <h2>{malti(20, 3)}</h2>
    </div>
  );
};

export default Phone;
