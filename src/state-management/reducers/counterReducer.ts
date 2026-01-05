import React, { useReducer } from "react";
interface Action {
  type: "INCREMENT" | "DECREMENT" | "RESET";
}
const counterReducer = (value: number, action: Action): number => {
  switch (action.type) {
    case "INCREMENT":
      return value + 1;
    case "DECREMENT":
      return value + 1;
    case "RESET":
      return 0;
  }
};

export default counterReducer;
