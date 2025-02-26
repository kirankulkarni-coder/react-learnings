import { useState } from "react";
import styles from "./Items.module.css";

const Items = ({ foodItem, onClickHandler }) => {
  return (
    <li
      key={foodItem.item}
      className={`list-group-item list-group-item-primary ${
        foodItem.active ? "active" : ""
      }`}
    >
      {foodItem.item}
      <button
        type="button"
        onClick={onClickHandler}
        class={`btn btn-info ${styles.button_buy}`}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
