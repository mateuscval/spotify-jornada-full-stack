import React from "react";
import SingleItem from "./SingleItem";

const ItemList = ({ title, items }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <a className="main__link" href="/">
          Mostrar tudo
        </a>
      </div>
      <div className="item-list__container">
        {Array(items)
          .fill()
          .map((CurrentValue, index) => (
            <SingleItem key={`${title}-${index}`} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
