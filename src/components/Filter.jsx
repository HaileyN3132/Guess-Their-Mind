import "../styles/Filter.css";
import ChoicesSection from "./ChoicesSection";

export default function Filter() {
  return (
    <div className="filter-container">
      <ChoicesSection title="Game" isExpanded />
      <ChoicesSection title="Food" />
    </div>
  );
}
