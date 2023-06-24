import React from "react";
import BotonTotal from "../components/BotonTotal";
import accounting from "accounting";
import { ClassNames } from "@emotion/react";

const Total = () => {
  return (
    <div
      className={ClassNames.root}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
      }}
    >
      <h5>Total items: 3</h5>
      <h5>{accounting.formatMoney(100)}</h5>
      <BotonTotal />
    </div>
  );
};

export default Total;
