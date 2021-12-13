import React from "react";
import styles from "./Card.model.css";

const Card = (props) => {
  return (
    <div className={styles.card} {...props}>
      {(props.headerLeft || props.headerRight) && (
        <div className={styles.cardHeader}>
          {props.headerLeft && <div>{props.headerLeft}</div>}
          {props.headerRight && props.headerRight}
        </div>
      )}

      {props.children}
    </div>
  );
};

export default Card;
