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
    return {
      next: (obj.next || "") + name,
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
      return {};
    }
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
