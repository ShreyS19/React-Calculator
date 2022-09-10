import React from "react";
import Big from "big-js";

export default function operate(number1, number2, operation) {
  const num1 = Big(number1);
  const num2 = Big(number2);

  if (operation === "+") return num1.plus(num2).toString();
  if (operation === "-") return num1.minus(num2).toString();
  if (operation === "X") return num1.times(num2).toString();
  if (operation === "/") {
    if (num2 != 0) {
      return num1.div(num2).toString();
    }
  }
}
