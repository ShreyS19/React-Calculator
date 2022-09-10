import Big from "big-js";
import React from "react";
import isNumber from "./isNumber";
import operate from "./operate";
export default function calculate(obj, name) {
  if (name === "AC") {
    return {
      next: null,
      total: null,
      operation: null,
    };
  }

  if (isNumber(name)) {
    if (name == "0" && obj.next == "0") return {};

    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + name };
      }
      return { next: name };
    }
    if (obj.next) {
      let nextVal = obj.next == "0" ? name : obj.next + name;
      return { next: nextVal, total: null };
    }
    return {
      next: name,
      total: null,
    };
  }

  if (name === "%") {
    if (obj.operation && obj.next) {
      let percentVal = Big(obj.next * obj.total)
        .div(Big("100"))
        .toString();
      let result = operate(obj.total, percentVal, obj.operation);

      return {
        total: result,
        next: null,
        operation: null,
      };
    }
    if (obj.next) {
      return {
        total: Big(obj.next).div(Big("100")).toString(),
      };
    }
    return {};
  }

  if (name === ".") {
    if (obj.next) {
      if (obj.next.includes(".")) return {};
      return {
        next: obj.next + ".",
      };
    }
    return {
      next: "0.",
    };
  }

  if (name === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      return obj;
    }
  }

  if (name === "+/-") {
    if (obj.next) {
      return {
        next: "-" + parseFloat(obj.next).toString(),
      };
    }
    if (obj.total) {
      return {
        total: "-" + parseFloat(obj.total).toString(),
      };
    }
    return {};
  }

  if (obj.operation) {
    return {
      total: operate(obj.next, obj.total, obj.operation),
      next: null,
      operation: name,
    };
  }

  if (!obj.next) {
    return { operation: name };
  }

  return {
    next: null,
    total: obj.next,
    operation: name,
  };
}
