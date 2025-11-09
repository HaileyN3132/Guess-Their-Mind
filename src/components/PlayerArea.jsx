import { useState } from "react";

import "../styles/PlayerArea.css";

import Filter from "./Filter";
import Display from "./Display";

import productsData from "../data/products";

export default function PlayerArea() {
  const [filterTest, setFilterTest] = useState({
    category: [],
    type: [],
    season: [],
  });

  function updateFilter(section, value) {
    setFilterTest((prev) => {
      let copy = { ...prev };

      if (copy[section].includes(value)) {
        copy[section] = copy[section].filter((item) => item !== value);
      } else {
        copy[section] = [...copy[section], value];
      }

      return copy;
    });
  }

  return (
    <div className="player-container">
      <Filter updateFilter={updateFilter} />
      <Display targetTest={filterTest} />
    </div>
  );
}
