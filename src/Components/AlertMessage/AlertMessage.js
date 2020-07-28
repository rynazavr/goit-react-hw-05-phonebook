import React from "react";
import styles from "./AlertMessage.module.css";

const AlertMessage = ({ name, clearAlert }) => {
  return (
    <div className={styles.alertCover}>
      <p className={styles.alertText}>Contact {name} is already in list!</p>
      <button className={styles.alertBtn} onClick={clearAlert}>
        Close
      </button>
    </div>
  );
};

export default AlertMessage;
