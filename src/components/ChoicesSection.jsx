import "../styles/ChoicesSection.css";
import { useState } from "react";

function Option({ description, section, updateFilter }) {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prev) => !prev);
    updateFilter(section.toLowerCase(), description); // updateFilter
  }
  return (
    <button
      className={`option ${selected ? "option-selected" : ""}`}
      onClick={handleClick}
    >
      {description}
    </button>
  );
}

export default function ChoicesSection({
  title,
  isExpanded = false,
  choices = ["Option 1", "Option 2", "Option 3"],
  updateFilter,
}) {
  const [expand, setExpand] = useState(isExpanded);
  function handleArrow() {
    setExpand((prev) => !prev);
  }

  const [options, setOption] = useState(choices);

  let optionsList = options.map((option) => (
    <Option
      key={title + option}
      description={option}
      section={title}
      updateFilter={updateFilter}
    />
  ));

  return (
    <section className="section-container">
      <button className="title" onClick={handleArrow}>
        {title}
        <span className="expand-icon">{expand ? "▼" : "▲"}</span>
      </button>

      {expand && <div className="options-container">{optionsList}</div>}
    </section>
  );
}
