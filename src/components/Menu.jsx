import React, { useState } from "react";
import menu from "../models/menu-items.json";
import "./Menu.css";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import Card from "./Card";

const Menu = () => {
  const [search, setSearch] = useState("");

  const searchResultItems = menu.filter((item) => {
    if (
      item.title.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search) ||
      item.tags.toLowerCase().includes(search)
    )
      return item;
  });

  return (
    <div>
      <Navigation />
      <main className="main-content">
        <SearchBar onChange={setSearch} />
        <div className="divider"></div>
        <h1>MENU</h1>
        <div className="menu-wrapper">
          <div className="all-items">
            {searchResultItems.map((item) => (
              <Card item={item} />
            ))}
          </div>
        </div>
        <div className="order-button">
          <i className="fas fa-utensils"></i>
        </div>
      </main>
    </div>
  );
};

export default Menu;
