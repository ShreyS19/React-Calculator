import React from "react";
import Button from "./Button";
import Styles from "./AllButtons.module.css";
const AllButtons = (props) => {
  const clickHandler = (name) => {
    props.onClickHandler(name);
  };

  return (
    <div className={Styles.buttonsDiv}>
      <div>
        <Button name="AC" onClickHandler={clickHandler} />
        <Button name="+/-" onClickHandler={clickHandler} />
        <Button name="%" onClickHandler={clickHandler} />
        <Button name="/" orange onClickHandler={clickHandler} />
      </div>
      <div>
        <Button name="7" onClickHandler={clickHandler} />
        <Button name="8" onClickHandler={clickHandler} />
        <Button name="9" onClickHandler={clickHandler} />
        <Button name="X" orange onClickHandler={clickHandler} />
      </div>
      <div>
        <Button name="4" onClickHandler={clickHandler} />
        <Button name="5" onClickHandler={clickHandler} />
        <Button name="6" onClickHandler={clickHandler} />
        <Button name="-" orange onClickHandler={clickHandler} />
      </div>
      <div>
        <Button name="1" onClickHandler={clickHandler} />
        <Button name="2" onClickHandler={clickHandler} />
        <Button name="3" onClickHandler={clickHandler} />
        <Button name="+" orange onClickHandler={clickHandler} />
      </div>
      <div>
        <Button name="0" wide onClickHandler={clickHandler} />
        <Button name="." onClickHandler={clickHandler} />
        <Button name="=" orange onClickHandler={clickHandler} />
      </div>
    </div>
  );
};

export default AllButtons;
