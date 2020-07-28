import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ filter, inputHandler }) => {
  return (
    <div>
      <form>
        <label className={styles.label}>Find contact by name</label>
        <input
          className={styles.input}
          type="text"
          name="filter"
          placeholder="Type contact name"
          value={filter}
          onChange={inputHandler}
        ></input>
      </form>
    </div>
  );
};

export default Filter;
