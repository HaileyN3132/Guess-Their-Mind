import { useState } from "react";
import "../styles/Display.css";
import Card from "./Card";
import productsData from "../data/products";
import SearchBar from "./SearchBar";

export default function Display({ filterTarget }) {
  const [products, setProducts] = useState(productsData);

  let productCards;
  if (
    filterTarget["category"].length === 0 &&
    filterTarget["type"].length === 0 &&
    filterTarget["season"].length === 0
  ) {
    productCards = products.map((product) => (
      <Card key={product.id} emoji={product.emoji} name={product.name} />
    ));
  } else {
    let filteredProducts = products;
    if (filterTarget["category"].length) {
      filteredProducts = products.filter((product) =>
        filterTarget["category"].includes(product.category)
      );
    }

    if (filterTarget["type"].length) {
      filteredProducts = filteredProducts.filter((product) =>
        filterTarget["type"].includes(product.type)
      );
    }

    if (filterTarget["season"].length) {
      filteredProducts = filteredProducts.filter((product) =>
        filterTarget["season"].includes(product.season)
      );
    }

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
      <p>{`Category = ${filterTarget.category}`}</p>
      <p>{`Type = ${filterTarget.type}`}</p>
      <p>{`Season = ${filterTarget.season}`}</p>
      <div className="search-container">
        <SearchBar onChangeInput={updateProductsList} />
      </div>
      <div className="cards-container">{productCards}</div>
    </section>
  );
}
