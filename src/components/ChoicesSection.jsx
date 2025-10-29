import "../styles/ChoicesSection.css";
import { useState } from "react";

function Option({ description }) {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prev) => !prev);
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

export default function ChoicesSection({ title, isExpanded = false }) {
  const [expand, setExpand] = useState(isExpanded);
  function handleArrow() {
    setExpand((prev) => !prev);
  }

  const mockOptions = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ];
  const [options, setOption] = useState(mockOptions);

  let optionsList = options.map((option) => (
    <Option key={title + option} description={option} />
  ));

  return (
    <section className="section-container">
      <p className="title">
        {title}{" "}
        <span className="expand-icon" onClick={handleArrow}>
          {expand ? "▼" : "▲"}
        </span>
      </p>
      <div className="options-container">{optionsList}</div>
    </section>
  );
}
