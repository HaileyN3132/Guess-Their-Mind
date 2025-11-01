import { useState } from "react";

import "../styles/PlayerArea.css";

import Filter from "./Filter";
import Display from "./Display";
export default function PlayerArea() {
  const [filterTarget, setFilterTarget] = useState([]);

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
      <Display />
    </div>
  );
}
