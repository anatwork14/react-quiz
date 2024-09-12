import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";
const initialState = {
  year: 2024,
  color: "red",
  size: "large",
};
function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { ...state, year: state.year + 1 };
    case "decrease":
      return { ...state, year: state.year - 1 };
    default:
      throw new Error("This is fail");
  }
}

export default function Test() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { year, color, size } = state;
  return (
    <>
      <button onClick={() => dispatch({ type: "increase" })}>
        Increase Year Model
      </button>
      <button onClick={() => dispatch({ type: "decrease" })}>
        decrease Year Model
      </button>
      <h1>{year}</h1>
      <p>
        Color is <em>{color}</em>
      </p>
      <p>
        Size is <em>{size}</em>
      </p>
    </>
  );
}
