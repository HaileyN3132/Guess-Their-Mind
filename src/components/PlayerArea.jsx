import { useState } from "react";

import "../styles/PlayerArea.css";

import Filter from "./Filter";
import Display from "./Display";

import productsData from "../data/products";

export default function PlayerArea() {
  //States
  const [filterTarget, setFilterTarget] = useState([]);
  const [listProducts, setListProducts] = useState(productsData);

  // Functions
  function updateFilter(target) {
    setFilterTarget((prev) => {
      if (prev.includes(target)) {
        return prev.filter((item) => item !== target);
      } else {
        return [...prev, target];
      }
    });
  }

  return (
    <div className="player-container">
      <Filter update={updateFilter} />
      <Display categoryTargets={filterTarget} />
    </div>
  );
}
