import React from "react";
import Styles from "./Button.module.css";

const Buttons = (props) => {
  const className =
    Styles.button +
    " " +
    (props?.orange ? Styles.orange : "") +
    (props?.wide ? Styles.wide : "");

  const clickHandler = () => {
    props.onClickHandler(props.name);
  };

  return (
    <div className={className.trim()}>
      <button onClick={clickHandler}>{props.name}</button>
    </div>
  );
};

export default Buttons;
