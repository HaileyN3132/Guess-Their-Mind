import { useState } from "react";

import "../styles/PlayerArea.css";

import Filter from "./Filter";
import Display from "./Display";

export default function PlayerArea() {
  const [filterTarget, setFilterTarget] = useState({
    category: [],
    type: [],
    season: [],
  });

  function updateFilter(section, value) {
    setFilterTarget((prev) => {
      let copy = { ...prev };

      if (copy[section].includes(value)) {
        copy[section] = copy[section].filter((item) => item !== value);
      } else {
        copy[section] = [...copy[section], value];
      }

      return copy;
    });
  }

  function resetFilter() {
    setFilterTarget(() => ({
      category: [],
      type: [],
      season: [],
    }));
  }

  return (
    <div className="flex flex-row bg-[#f5efff] ">
      <Filter
        updateFilter={updateFilter}
        filterTarget={filterTarget}
        resetFilter={resetFilter}
      />
      <Display filterTarget={filterTarget} />
    </div>
  );
}
