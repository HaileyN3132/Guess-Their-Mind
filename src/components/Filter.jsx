import "../styles/Filter.css";
import ChoicesSection from "./ChoicesSection";

export default function Filter() {
  const category = ["Produce", "Food", "Snack", "Beverages"];

  return (
    <div className="filter-container">
      <ChoicesSection title="Game" isExpanded choices={category} />
      <ChoicesSection title="Food" />
    </div>
  );
}
