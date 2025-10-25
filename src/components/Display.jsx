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

  function updateProductsList(data) {
    console.log(`Parent received = ${data}`);
    setListProducts(() => {
      return productsData.filter((product) => {
        return product.name.includes(data);
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
