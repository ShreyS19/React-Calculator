import React from "react";
import Styles from "./Result.module.css";

const Result = (props) => {
  return (
    <div className={Styles.resultComponent}>
      <div>{props.value}</div>
    </div>
  );
};

export default Result;
