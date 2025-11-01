import { useState } from "react";
import "../styles/Display.css";
import Card from "./Card";
import productsData from "../data/products";
import SearchBar from "./SearchBar";

export default function Display({ categoryTargets = [] }) {
  const [products, setProducts] = useState(productsData);

  let productCards;
  if (categoryTargets.length === 0) {
    productCards = products.map((product) => (
      <Card key={product.id} emoji={product.emoji} name={product.name} />
    ));
  } else {
    const filteredProducts = products.filter((product) =>
      categoryTargets.includes(product.category)
    );
    productCards = filteredProducts.map((product) => (
      <Card key={product.id} emoji={product.emoji} name={product.name} />
    ));
  }

  function updateProductsList(userInput) {
    setProducts(() => {
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
