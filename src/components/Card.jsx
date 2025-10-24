import "../styles/Card.css";

export default function Card({ emoji, name }) {
  function selectItem() {
    console.log(`${name} is selected`);
  }

  return (
    <div className="card-container">
      <div className="emoji">{emoji}</div>
      <p>{name}</p>
      <button className="card-btn" onClick={selectItem}>
        Select
      </button>
    </div>
  );
}
