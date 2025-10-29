import { useState } from "react";
import "../styles/Display.css";
import Card from "./Card";
import productsData from "../data/products";
import SearchBar from "./SearchBar";

export default function Display() {
  const [listProducts, setListProducts] = useState(productsData);
  let productCards = listProducts.map((product) => (
    <Card key={product.id} emoji={product.emoji} name={product.name} />
  ));

  function updateProductsList(userInput) {
    setListProducts(() => {
      return productsData.filter((product) => {
        return product.name.includes(userInput);
      });
    });
  }

  return (
    <section className="display-container">
      <div className="search-container">
        <SearchBar onChangeInput={updateProductsList} />
      </div>
      <div className="cards-container">{productCards}</div>
    </section>
  );
}
