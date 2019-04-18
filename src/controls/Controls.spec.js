// Test away!
import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Controls from "./Controls";

it("renders without crashing", () => {
  const { getByText } = render(<Controls />);
});
