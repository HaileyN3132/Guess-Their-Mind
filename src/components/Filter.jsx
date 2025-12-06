import "../styles/Filter.css";
import ChoicesSection from "./ChoicesSection";
import productsData from "../data/products";

export default function Filter({ updateFilter }) {
  const options = {
    category: [...new Set(productsData.map((item) => item.category))],
    type: [...new Set(productsData.map((item) => item.type))],
    season: [...new Set(productsData.flatMap((item) => item.season))],
  };

  return (
    <div className="filter-container">
      <ChoicesSection
        title="Category"
        isExpanded
        choices={options.category}
        updateFilter={updateFilter}
      />
      <ChoicesSection
        title="Type"
        isExpanded
        choices={options.type}
        updateFilter={updateFilter}
      />

      <ChoicesSection
        title="Season"
        isExpanded
        choices={options.season}
        updateFilter={updateFilter}
      />
    </div>
  );
}
