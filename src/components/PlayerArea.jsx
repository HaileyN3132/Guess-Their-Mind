import "../styles/PlayerArea.css";

import Filter from "./Filter";
import Display from "./Display";
export default function PlayerArea() {
  return (
    <div className="player-container">
      <Filter />
      <Display />
    </div>
  );
}
