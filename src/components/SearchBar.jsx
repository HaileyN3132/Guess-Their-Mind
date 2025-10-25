import "../styles/SearchBar.css";
export default function SearchBar({ onChangeInput }) {
  function handleInput(e) {
    onChangeInput(e.target.value);
  }

  return (
    <input
      className="search-bar"
      type="input"
      placeholder="Enter product name"
      onChange={handleInput}
    />
  );
}
